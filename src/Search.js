import React from 'react';

function Search({handleInput, search}) {
  return (
  <section  className="searchbox-wrap">
    <input type="text" placeholder="Search a movie" onChange={handleInput}className="searchbox" onKeyPress={search}/>     
  </section>  
  )
}

export default Search
