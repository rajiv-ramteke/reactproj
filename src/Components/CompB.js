import { useContext } from "react"
import { store } from "../App"
import { CompC } from "./CompC"
export const CompB=()=>{
 const data =useContext(store)
  return(
    <>
    <h1>my name is {data.fname} and my surname is {data.lname}</h1>
    <CompC/>
    </>
  )
}