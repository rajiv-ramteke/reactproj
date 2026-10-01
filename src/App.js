import Form from "./Components/Form";
import { TodoList } from "./Components/TodoList";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Route, Routes, } from "react-router-dom";
import { CompA } from "./Components/CompA";
import './App.css'
import { createContext } from "react";
import FetchApi from "./Components/FetchApi";

export const context1=createContext();
export const store=createContext();
function App(){
  return (
    <>
    {/* <TodoList/> */}
      {/* <Form/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <context1.Provider value="priya">
        <store.Provider value={{fname:"priyanka",lname:"sawai"}}>
            <CompA/>      
        </store.Provider>
      </context1.Provider>     
      <FetchApi/>
    </>
  );
}

export default App;