import { useContext } from "react"
import { context1 } from "../App"
export const CompC=()=>{
const name=  useContext(context1)
  return(
    <>
    <h1>this is my name {name}</h1>
    </>
  )
}