import React from "react";
import { Modal, Box } from "@mui/material";
import "./ModaleBtn.scss";

const ModaleBlockAboutFilm = ({ open, handleClose, selectedMovie }) => {



  const Year = ""






  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box className="Boxstyle">
          <div className="Modale_Style_insade_block">
            <button className="btn_close" onClick={handleClose}>
              Close
            </button>
            <li style={{ listStyleType: "none" }}>
              <div className="TitleBlock">
                <center>{selectedMovie.title}</center>
              </div>
              <div
                style={{
                  fontSize: "1vw",
                  padding: "1vw",
                  fontWeight: "400",
                }}
              >
             
             
             <ul style={{cursor: "text"}}>
             <li className="ul_year">
              <span>      
             <p style={{display: "flex", fontWeight: "normal", paddingBottom: "6px", cursor: "text"}}>
              <p style={{width: "150px", cursor: "text"}}>
              Вік: </p><p className="ul_year_key_value">{(new Date().getFullYear() - selectedMovie.year + "+")}</p></p>
             </span></li>

             <li className="ul_year">
              <span>      
             <p style={{display: "flex", fontWeight: "normal", paddingBottom: "6px"}}>
              <p style={{width: "150px", cursor: "text"}}>
              Режисери: </p><p className="ul_year_key_value">{selectedMovie.director}</p></p>
             </span></li>

             <li className="ul_year">
              <span>      
             <p style={{display: "flex", fontWeight: "normal", paddingBottom: "6px"}}>
              <p style={{width: "150px", cursor: "text"}}>
              Дата виходу: </p><p className="ul_year_key_value">{selectedMovie.year}</p></p>
             </span></li>



             <li className="ul_year">
              <span>      
             <p style={{display: "flex", fontWeight: "normal", paddingBottom: "6px"}}>
              <p style={{width: "150px", cursor: "text"}}>
              Мова: </p><p className="ul_year_key_value">{selectedMovie.language}</p></p>
             </span></li>



             <li className="ul_year">
              <span>      
             <p style={{display: "flex", fontWeight: "normal", paddingBottom: "6px"}}>
              <p style={{width: "150px", cursor: "text"}}>
              Жанр: </p><p className="ul_year_key_value">{selectedMovie.genre}</p></p>
             </span></li>

             <li className="ul_year">
              <span>      
             <p style={{display: "flex", fontWeight: "normal", paddingBottom: "6px"}}>
              <p style={{width: "150px", cursor: "text"}}>
              Тривалість: </p><p className="ul_year_key_value">{selectedMovie.runtime.toString()[0]}{":"}
{selectedMovie.runtime.toString().slice(1)}</p></p>
             </span></li>


             <li style={{paddingTop: "20px"}}>
              <span>      
             <p style={{display: "flex", fontWeight: "normal", paddingBottom: "6px", cursor: "text" }}>
           <p className="ul_year_key_value_plot" >{selectedMovie.plot}
            </p></p>
             </span></li>


             </ul>
             
             </div>
            </li>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ModaleBlockAboutFilm;
