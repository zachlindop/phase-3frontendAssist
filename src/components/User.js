import React from 'react';
const User = (props) => {
    console.log(`props: ${JSON.stringify(props)}`);
return (
    <div className="App">
        <h1> Users</h1>

            {props.users.map((user, index) => {
            return (
                
                <div class = "game">
                <h2 class = "gameTitle">{user.name}</h2>
    
                </div>
            )
        })}
    

    </div>
)
}
export default User;