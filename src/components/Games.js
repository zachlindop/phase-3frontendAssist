
import React, {useState, useEffect}  from 'react';

const Games = (props) => {

    const [gameName, setGameName] = useState('');
    const [gameImage, setGameImage] = useState('');

    function deleteGame (gameId){
        // e.preventDefault();
        console.log(`delete game called: ${gameId}`);

        fetch (`http://localhost:9292/games/${gameId}`, { method: 'DELETE' })
        .then((response) => console.log(response.json()))
    }

    function handleCreateGame(e) {
        console.log(`creating gme..`);
        e.preventDefault();

        const data = {
            "game": {
                "game_name": gameName,
                "game_image": gameImage
            }
        }
    
        fetch("http://localhost:9292/games", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(game => {
              console.log(`game created: ${JSON.stringify(game)}`);
              // setReviews([...reviews, review]);
              // setShowReviewForm(!showReviewForm);
          }) 
    }

return (
 
     <div class = "gameLibrary">

<form className="note-editor">
          <label htmlFor='rating'>              
          </label>
          <label htmlFor='text'>
              Game Name:
              <textarea onChange={(e) => setGameName(e.target.value)} value={gameName} />
          </label>  
          <label htmlFor='text'>
              Game Image:
              <textarea onChange={(e) => setGameImage(e.target.value)} value={gameImage} />
          </label>        
          <div className="button-row">            
              <button onClick={handleCreateGame} type="button">Create Game</button>              
          </div>
        </form>

        {props.gamedata.map((game, index) => {
            return (
                
                <div class = "game">
                <h2 class = "gameTitle">{game.game_name}</h2>
                <img src={game.game_image} />
                <button onClick={ e => deleteGame(game.id)}> Delete Me </button>
                </div>
            )
        })}
                
    </div>
    )
}
export default Games;