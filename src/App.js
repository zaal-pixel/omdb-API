import React, {useState} from 'react';
import axios from "axios";
import './App.css';
import Search from "./Search";
import Results from "./Results";
import Popup from "./Popup";

function App() {
  const [state, setState] = useState({s: "",
  results: [],
  selected:{},

  });
// original link:www.omdbapi.com/?i=tt3896198&apikey=7a4abe02
  const apiurl = "http://www.omdbapi.com/?apikey=7a4abe02"; 
  

  const search = (e) =>{
    if (e.key === "Enter"){
axios(apiurl + "&s="+ state.s).then(({data}) =>{let results= data.Search;
setState(prevState=>{
  return{...prevState, results: results}
})
});
    }
  }
  
  const handleInput = (e)=> {
    let s=e.target.value;
  setState(prevState =>{
    return {...prevState,s:s}
  });
  console.log(state.s);

  }
  const openPopup = id =>{
    axios(apiurl + "&i=" +id).then(({data}) =>{
      let result=data;
  console.log(result);
      setState(prevState =>{
        return {...prevState, selected: result}
      });
    });
  }

  const closePopup =() =>{setState(prevState =>{
    return{...prevState, selected:{}}
  });

  }
  return (
    
    <div className="App">
     <header> <h1>Movie Database</h1>
     </header>
      <main>
        <Search search={search}handleInput={handleInput}/>
        <Results results={state.results} openPopup={openPopup}/>
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup}/>: false}
      </main>
    </div>
  );
}

export default App;
