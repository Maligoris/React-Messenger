import * as React from "react";
import MainPage from "./pages/mainPage/MainPage";
import Auth from "./pages/auth/Auth";
import { Routes, Route } from "react-router-dom";

//TODO сделать путь home/id12345 где id это страница конкретного пользователя
function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<MainPage />} /> 
      </Routes>
    </div>
  );
}
export default App;
