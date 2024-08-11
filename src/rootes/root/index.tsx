import "./style.css"
import { RootHeader } from "../../components/rootHeader";
import { Outlet } from "react-router-dom";
export const Root = () => {
  return (
    <div className={`root-cont light-theme`}>
      <RootHeader />
      <Outlet/>
    </div>
  )
}