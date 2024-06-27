import "../registrationRoot/style.css"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { TokenStore } from "../../interface";
import { useTokenStore } from "../../store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const schema = z.object({
  name: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
});
interface FormData extends z.infer<typeof schema> {}

export const LoginRoot = () => {
  const myNavigator = useNavigate();
  const { setToken } = useTokenStore<TokenStore>((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } =  useForm<FormData>({
  resolver: zodResolver(schema),
});

  const onSubmit: SubmitHandler<FormData> = (dataSignIn : {name: string, password: string}) => {
    const options = {
      method: "POST",
      url: `http://localhost:3000/api/login`,
      params: dataSignIn,
      // headers: { accept: "application/json" },
    }
    const { data, isError, error } = useQuery<string>({
      queryKey: ["login"],
      queryFn: () => axios.request(options),
    })
    if (isError) alert(error)
    else setToken(data!)
  }

  return (
    <div className="login_cont light-theme">
      <img src="/public/c6f969edd39d2628eb3e81e9fa761356.jpg"/>
      <div className="login_form">
        <div className="login_form_left"><button onClick={() => myNavigator("/registration")}>SIGN UP</button></div>
        <div className="login_form_right" style={{gridTemplateRows: "30% 70%"}}>
          <span style={{color: "var(--bg_button)", fontSize: "1.7rem", marginTop: "0.7rem"}}>Sign in</span>
          <form  onSubmit={handleSubmit(onSubmit)} className="form_to_p">
            <input className="formInput" {...register("name")} type="text" placeholder="Name" />
            {errors.name ? <p className="error_p">{errors.name.message}</p> : <p style={{color: "hsl(220, 22%, 92%)"}}>.</p>}
            <input className="formInput" {...register("password")} type="password" placeholder="Password"/>
            {errors.password ? <p className="error_p">{errors.password.message}</p> : <p style={{color: "hsl(220, 22%, 92%)"}}>.</p>}
            <button className="signButton" style={{top: "87%"}} type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "SIGN IN"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
// ### запрос на регистрацию
// curl -X POST http://localhost:3000/api/register -d '{"name": "bake", "email":"drnurbekov@mail.ru", "password":"12341234",  "is_company": false, "inn": ""}'
// ### запрос на логин
// curl -X POST http://localhost:3000/api/login -d '{"email":"drnurbekov@mail.ru", "password":"12341234"}'