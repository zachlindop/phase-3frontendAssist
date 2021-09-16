import react, { Component } from 'react' 

class Home extends Component{ 

    constructor(props) { 
    super(props) 
    this.state= { 
        posts: [] } }

    componentDidMount(){
        fetch('http://localhost:3000/games')
        .then(response => {
            this.setState({
                post: response.data
            })
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() { 
        const {posts} = this.state
        return ( 
            <div> 
                <h1> </h1>
                {
                posts.map(post => <div key={post.id}>{post.title} </div>)
                }
            </div>
        )
        }
}

export default Home