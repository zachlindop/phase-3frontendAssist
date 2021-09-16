
import React from 'react';
const Games = (props) => {

return (
 
     <div class = "gameLibrary">
        {props.gamedata.map((game, index) => {
            return (
                <div class = "game">
                <h2 class = "gameTitle">{game.game_name}</h2>
                <img src={game.game_image} />
                </div>
            )
        })}
                
    </div>
    )
}
export default Games;