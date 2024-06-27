import "./style.css"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TokenStore } from "../../interface";
import { useTokenStore } from "../../store";

const schema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(50),
  inn: z.string().length(12).regex(/^\d{12}$/),
});
interface FormData extends z.infer<typeof schema> {}

export const RegistrationRoot = () => {
  const [company, setCompany] = useState(false);
  const myNavigator = useNavigate();
  const { setToken } = useTokenStore<TokenStore>((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } =  useForm<FormData>({
  resolver: zodResolver(schema),
  defaultValues: {
    inn: "000000000000"
  }
});

const onSubmit: SubmitHandler<FormData> = (dataSignUp : {name: string, password: string, email: string, inn: string}) => {
  const options = {
    method: "POST",
    url: `http://localhost:3000/api/register`,
    params: dataSignUp,
    // headers: { accept: "application/json" },
  }
  const { data, isError, error } = useQuery<string>({
    queryKey: ["register"],
    queryFn: () => axios.request(options),
  })
  if (isError) alert(error)
  else setToken(data!)
}

  return (
    <div className="login_cont light-theme">
      <img src="/public/c6f969edd39d2628eb3e81e9fa761356.jpg"/>
      <div className="login_form">
        <div className="login_form_left"><button onClick={() => myNavigator("/login")}>SIGN IN</button></div>
        <div className="login_form_right">
          <span style={{color: "var(--bg_button)", fontSize: "1.7rem", marginTop: "0.7rem"}}>Sign up</span>
          <div className="is_company">
            <button onClick={()=>setCompany(false)} style={{textDecoration: `${company ? "none" : "underline var(--bg_button)"}`}}>Человек</button>
            <button onClick={()=>setCompany(true)} style={{textDecoration: `${company ? "underline var(--bg_button)" : "none"}`}}>Компания</button></div>
          <form onSubmit={handleSubmit(onSubmit)} className="form_to_p">
            <input className="formInput" {...register("name")} type="text" placeholder="Name"/>
            {errors.name ? <p className="error_p">{errors.name.message}</p> : <p style={{color: "hsl(220, 22%, 92%)"}}>.</p>}
            <input className="formInput" {...register("email")} type="text" placeholder="Email"/>
            {errors.email ? <p className="error_p">{errors.email.message}</p> : <p style={{color: "hsl(220, 22%, 92%)"}}>.</p>}
            <input className="formInput" {...register("password")} type="password" placeholder="Password"/>
            {errors.password ? <p className="error_p">{errors.password.message}</p> : <p style={{color: "hsl(220, 22%, 92%)"}}>.</p>}
            {company ? <>
              <input className="formInput" {...register("inn")} type="inn" placeholder="inn"/>
              {errors.inn ? <p className="error_p">{errors.inn.message}</p> : <></>}
            </> : <></>}
            <button className="signButton" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "SIGN UP"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}