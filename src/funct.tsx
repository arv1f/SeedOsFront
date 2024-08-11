import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const funct = ( params : {name: string, password: string, email: string, inn: string} ) => {
  const options = {
    method: "POST",
    url: `http://auth_service:3000/api/register`,
    params: params,
    // headers: { accept: "application/json" },
  }
  const { data, isError, error } = useQuery<string>({
    queryKey: ["register"],
    queryFn: () => axios.request(options),
  })
  if (isError || !data) 
    { alert(error)
      return null}
  else return(data!)
}