import React from 'react'
import Result from './Result'

function Popup({selected, closePopup}) {
  return (
   <section className="popup">
     <div className="content">
       <div className="contentbox1">
       <h2>{selected.Title}
       <span>({selected.Year})</span></h2>
       <p className="rating">Rating:    {selected.imdbRating}</p>
         <p>Runtime: {selected.Runtime}</p>
         <p>Genre: {selected.Genre}</p>

       </div>
       <div className="contentrow">
         <div className="column-1">
     <img src={selected.Poster} alt="Poster"/>
     </div>
     <div className="column-2">
       <p>{selected.Plot}</p>
     </div>  
     </div>

     <button onClick={closePopup}className="close">Close</button>
     </div>
   </section>
  )
}

export default Popup
