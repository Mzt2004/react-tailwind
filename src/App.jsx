import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import User from "./User";
import UserDetail from "./UserDetail";

function App(){
  return (
    <div>
  <Routes>
    <Route path="/" element={<User/>}/>
    <Route path="/detail/:id" element={<UserDetail/>}/>
  </Routes>
  </div>
  )
}
export default App
