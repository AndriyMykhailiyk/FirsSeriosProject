import React, {useState} from "react";
import "./News.scss";
import { Header } from "../header/Header";
import { PostersFilm } from "../../Api/Posters";

import { Link } from "react-router-dom";

const News = ({}) => {

  return (
    <>
      <div className="Hover_Btn1">
        <Header onGenreSelect={function (genry: string): void {
          throw new Error("Function not implemented.");
        } } numberFilm={null} handleSearch={function (): void {
          throw new Error("Function not implemented.");
        } } search={""} />
      </div>
      <section className="About_Sinem">

      <div className="Header_About_Us"><h1>Актуальні фільми цього тижня</h1></div>
        

      <div className="Scroll_Photo">

    
      </div>
    
</section>
    </>
  );
};

export default News;
