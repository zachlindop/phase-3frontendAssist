import React, { Component } from 'react'

export class Homeform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userID: '',
            title: '',
            body: ''
        }
    }

    handleChange =(e) =>{
        this.setState({
            [e.target.name]: e.target.value

        })

    }
    handleSubmit = (e) =>{
        fetch.post('http://localhost:3000/games', this.state)
        .then(response => {
            console.log(response)
            

        })
        .catch(error => {
            console.log(error)
        })

        
    }
    render() {
        
            const{id, game_name, game_description} = this.state
            return (
            <div>          
             <form onSubmit={this.handleSubmit}> 
             <div> 
             <label>Game Id</label>             
               <input 
                type='text' 
                name='id' 
                value={id} 
                onChange= {this.handleChange}
               ></input> 
               </div> 
               <div> 
             <label>Game Name</label>             
               <input 
                type='text' 
                name='game_name' 
                value={game_name} 
                onChange= {this.handleChange}
               ></input> 
               </div> 
               <div> 
             <label>Game Description</label>             
               <input 
                type='text' 
                name='game_description' 
                value={game_description} 
                onChange= {this.handleChange}
               ></input> 
               <div>
                   <button type ='submit'> Submit</button>
                   </div>
               </div> 
            </form>   
        </div>
        )
    }
}

export default Homeform
