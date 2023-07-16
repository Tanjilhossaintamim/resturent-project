import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./menu/Menu";
import Home from "./home/Home";
import AboutComponent from "./about/AboutComponent";
import ContactComponent from "./contact/ContactComponent";

const BodyComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/about" element={<AboutComponent />}></Route>
        <Route path="/contact" element={<ContactComponent />}></Route>
      </Routes>
    </div>
  );
};

export default BodyComponent;
