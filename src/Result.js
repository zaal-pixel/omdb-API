import React from 'react'

function Result({result, openPopup}) {
  return (
    <div className="result" onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} alt="sorry no Picture available :(" />
			<h3>{result.Title}</h3>
      <p>{result.Runtime}</p>
		</div>
  )
}

export default Result

