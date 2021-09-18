import React, {useState, useEffect}  from 'react';
import { Button } from 'react-bootstrap'



const Games = (props) => {
    const[newGames, setNewGames] = useState( [] )

    useEffect( () => {
        fetch ("http://localhost:9292/games")
               .then((response) => response.json())
               .then(fetchedGames => {console.log(fetchedGames)
               setNewGames(fetchedGames)
             })
               
             }, [])
    const [gameName, setGameName] = useState('');
    const [gameImage, setGameImage] = useState('');
    const [gameUser, setGameUser] = useState('');

    function deleteGame (gameId){
        // e.preventDefault();
        console.log(`delete game called: ${gameId}`);

        fetch (`http://localhost:9292/games/${gameId}`, { method: 'DELETE' })
        .then((response) => console.log(response.json()))
        let filterGames = newGames.filter(eachGame => 
         eachGame.id !== gameId)
         setNewGames([...filterGames])
        

    }

    function handleCreateGame(e) {
        console.log(`creating gme..`);
        e.preventDefault();

        const data = {
            "game": {
                "game_name": gameName,
                "game_image": gameImage,
                "gamer_name": gameUser
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
               setNewGames([...newGames, game]);
              //setShowReviewForm(!showReviewForm);
          }) 
    }

return (
<div>
    <form className="note-editor">
          <label htmlFor='rating'>              
          </label>
          <label htmlFor='text'>
              Game Name:
              <input type= 'text' onChange={(e) => setGameName(e.target.value)} value={gameName} />
          </label>  
          <br/>
          <label htmlFor='text'>
              Game User:
              <input type= 'text' onChange={(e) => setGameUser(e.target.value)} value={gameUser} />
          </label>   
          <br/>  
          <label htmlFor='text'>
              Game Image:
              <input type= 'text' onChange={(e) => setGameImage(e.target.value)} value={gameImage} />
          </label>        
          <div className="button-row">                          
              <Button onClick={handleCreateGame} variant="warning">Create Game </Button>{' '}
          </div>
          
        </form>

 
     <div class = "gameLibrary">
        


        {newGames.map((game, index) => {
            return (
                
                <div class = "game">
                <h2 class = "gameTitle">{game.game_name}</h2>
                <img src={game.game_image} />
                <Button onClick={ e => deleteGame(game.id)}variant="warning">Delete Game </Button>{' '}
                <h3> One of {game.gamer_name}'s favorite game!!!</h3>
                </div>
            )
        })}
    </div>           
    </div>
    )
}

export default Games;