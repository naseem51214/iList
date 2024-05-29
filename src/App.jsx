import React from "react";
import NavBar from "./Components/TodoList/NavBar";
import TodoList from "./Components/TodoList/TodoList";
// import Fetch_API_Dem from "./Components/API/FetchAPIDem";
// import FetchAPIDem from "./Components/API/FetchAPIDem";
// import NavBar from "./Components/API/NavBar";
// import Counter from "./Components/Counter";
// import Test from "./Components/Test";
// import Example from "./Components/Example";
// import UseEffect from "./Components/UseEffect";
// import GitHubAPI from "./Components/API/GitHubAPI";
// import Demo from "./Components/Demo";
// import ReactEventHandling from "./Components/Practice/ReactEventHandling";

export default function App() {

  

  return (
    <>
      {/* <NavBar/>
     <span className="flex justify-center">
     <h1 className="bg-green-700 text-center text-white w-56 mt-5 flex justify-center rounded-2xl h-14 p-4">API Call Demo</h1>
      </span>
      <FetchAPIDem/> */}
      <NavBar/>
      <TodoList/>
      
    </>
  );
}
