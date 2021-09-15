import React from 'react';

const fetchData = () => {
    return fetch("http://localhost:9292/games")
          .then((response) => response.json())
          .then((data) => console.log(data));}
const Games = () => {
return (
    <div className="App">
        <h1> Games </h1>
    </div>
)
}
fetchData();
console.log(fetchData);
export default Games;