import React from "react";

function Note(props) {
const uniqueId = `carousel-${props.id}`;
  function handleClick() {
    props.onDelete(props.id);
  }
  
  return (
     <div id= {uniqueId} className="carousel slide note">
       <div className="carousel-inner">
         <div className="carousel-item active">
           <h1>{props.title}</h1>
         </div>
         <div className="carousel-item">
           <p>{props.content}</p>
         </div>
       </div>
       <button className="carousel-control-next btn-secondary" type="button" data-bs-target={`#${uniqueId}`} data-bs-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
       </button>
       <button onClick={handleClick}>
        <i class="fa-solid fa-trash"></i>
    </button>
     </div>

  );
}


     
export default Note;
