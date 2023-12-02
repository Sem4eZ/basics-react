import React from "react";
import cl from "./Loader.module.css";

const Loader = () => {
  return <div className={cl.spin_wrapper}>
    <div className={cl.spinner}></div>
  </div>;
};

export default Loader;
