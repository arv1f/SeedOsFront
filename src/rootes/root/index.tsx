import "./style.css"
import { RootHeader } from "../../components/rootHeader";
export const Root = () => {
  return (
    <div className={`root-cont light-theme`}>
      <RootHeader />
      <main></main>
    </div>
  )
}