import React, {Component} from 'react';



// export default function App() {
//     return (
//         <h1>Function Components</h1>
//     )
// }


// class App extends React.Component {
//     render() {
//         return (
//             <h1>{this.props.type} Components</h1>
//         )
//     }
// }

// export default App;




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////
// components


// function Header(props) {
//     return (
//         <header>
//             <p>Welcome, {props.username}!</p>
//         </header>
//     )
// }


// class Header extends React.Component {
//     render() {
//         return (
//             <header>
//                 <p>Welcome, {this.props.username}!</p>
//             </header>
//         )
//     }
// }









// function Greeting() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
    
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
//     return (
//         <h1>Good {timeOfDay} to you, sir or madam!</h1>
//     )
// }





// class Greeting extends React.Component {
//         render() {
//             const date = new Date();
//             const hours = date.getHours();
//             let timeOfDay;
            
//             if (hours < 12) {
//                 timeOfDay = "morning"
//             } else if (hours >= 12 && this.hours < 17) {
//                 timeOfDay = "afternoon"
//             } else {
//                 timeOfDay = "night"
//             }

//             return (
//                 <h1>Good {timeOfDay} to you, sir or madam!</h1>
//             )
//     }
// }
    





////////////////////////////////

// export default function App() {
//     return (
//         <div>
//             <Header />
//             <Greeting />
//         </div>
//     )
// }


// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header username='John Carne'/>
//                 <Greeting/>
//             </div>
//         )
//     }
// }

// export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// export default function App() {
//     const [count, setCount] = React.useState(0)
    
//     function add() {
//         setCount(prevCount => prevCount + 1)
//     }
    
//     function subtract() {
//         setCount(prevCount => prevCount - 1)
//     }
    
//     return (
//         <div className="counter">
//             <button className="counter--plus" onClick={add}>+</button>
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             <button className="counter--minus" onClick={subtract}>–</button>
//         </div>
//     )
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {count: 0};
//         this.add = this.add.bind(this);
//         this.subtract = this.subtract.bind(this);
//     }

//     add(){
//         this.setState((prevState)=> {
//             return {count: prevState.count + 1}
//         })
//     }


//     subtract() {
//         this.setState((prevState)=> {
//             return {count: prevState.count - 1}
//         })
//     }

//     render() {
//         return (
//             <div className="counter">
//                 <button className="counter--plus" onClick={this.add}>+</button>
//                 <div className="counter--count">
//                     <h1>{this.state.count}</h1>
//                 </div>
//                 <button className="counter--minus" onClick={this.subtract}>–</button>
//             </div>
//         )
//     }
// }

// export default App;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })
    
//     let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
//     function toggleFavorite() {
//         setContact(prevContact => ({
//             ...prevContact,
//             isFavorite: !prevContact.isFavorite
//         }))
//     }
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./src/assets/user.png" className="card--image" />
//                 <div className="card--info">
//                     <img 
//                         src={`../src/assets/${starIcon}`} 
//                         className="card--favorite"
//                         onClick={toggleFavorite}
//                     />
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
                
//             </article>
//         </main>
//     )
// }


// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             firstName: "John",
//             lastName: "Doe",
//             phone: "+1 (719) 555-1212",
//             email: "itsmyrealname@example.com",
//             isFavorite: false,
//         }
//         this.toggleFavorite = this.toggleFavorite.bind(this);
//     }

//     toggleFavorite() {
//         this.setState((prevState)=> {
//             return {isFavorite: !prevState.isFavorite }
//         })
//     }

//     render() {
//         let starIcon = this.state.isFavorite ? "star-filled.png" : "star-empty.png"
//         return (
//             <main>
//                 <article className="card">
//                     <img src="./src/assets/user.png" className="card--image" />
//                     <div className="card--info">
//                         <img 
//                             src={`../src/assets/${starIcon}`} 
//                             className="card--favorite"
//                             onClick={this.toggleFavorite}
//                         />
//                         <h2 className="card--name">
//                             {this.state.firstName} {this.state.lastName}
//                         </h2>
//                         <p className="card--contact">{this.state.phone}</p>
//                         <p className="card--contact">{this.state.email}</p>
//                     </div>
//                 </article>
//             </main>
//         )
//     }
// }

// export default App;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// class App extends Component {
//     render() {
//         // console.log('rendered!');
//         return (
//             <h1>{this.state.name}</h1>
//         )
//     }

//     constructor() {
//         super();
//         this.state = {};
//     }

    
    

//     componentDidMount() {
//         // console.log('mounted!');
//         fetch('https://swapi.dev/api/people/1')
//             .then((res)=> res.json())
//             .then((data)=> this.setState(data));
//     }
// }

// export default App;




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// class App extends React.Component {
//     state = {
//         firstName: "", 
//         lastName: "", 
//         email: "", 
//         comments: "", 
//         isFriendly: true,
//         employment: "",
//         favColor: ""
//     }
    
//     handleChange = (event) => {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? 
//             this.setState({
//                 [name]: checked
//             })
//         :
//         this.setState({
//             [name]: value
//         }) 
//     }
    
    
    
//    componentDidMount() {
//         if (!localStorage.getItem('inputData')) return;
//         const inputData = JSON.parse(localStorage.getItem('inputData'));
//         this.setState(inputData)
//    }
    
//     componentDidUpdate() {
//         localStorage.setItem('inputData', JSON.stringify(this.state));
//     }
    
//     render() {
//         return (
//             <form>
//                 <input
//                     type="text"
//                     placeholder="First Name"
//                     onChange={this.handleChange}
//                     name="firstName"
//                     value={this.state.firstName}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Last Name"
//                     onChange={this.handleChange}
//                     name="lastName"
//                     value={this.state.lastName}
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     onChange={this.handleChange}
//                     name="email"
//                     value={this.state.email}
//                 />
//                 <textarea 
//                     value={this.state.comments}
//                     placeholder="Comments"
//                     onChange={this.handleChange}
//                     name="comments"
//                 />
//                 <input 
//                     type="checkbox" 
//                     id="isFriendly" 
//                     checked={this.state.isFriendly}
//                     onChange={this.handleChange}
//                     name="isFriendly"
//                 />
//                 <label htmlFor="isFriendly">Are you friendly?</label>
//                 <br />
//                 <br />
                
//                 <fieldset>
//                     <legend>Current employment status</legend>
//                     <input 
//                         type="radio"
//                         id="unemployed"
//                         name="employment"
//                         value="unemployed"
//                         checked={this.state.employment === "unemployed"}
//                         onChange={this.handleChange}
//                     />
//                     <label htmlFor="unemployed">Unemployed</label>
//                     <br />
                    
//                     <input 
//                         type="radio"
//                         id="part-time"
//                         name="employment"
//                         value="part-time"
//                         checked={this.state.employment === "part-time"}
//                         onChange={this.handleChange}
//                     />
//                     <label htmlFor="part-time">Part-time</label>
//                     <br />
                    
//                     <input 
//                         type="radio"
//                         id="full-time"
//                         name="employment"
//                         value="full-time"
//                         checked={this.state.employment === "full-time"}
//                         onChange={this.handleChange}
//                     />
//                     <label htmlFor="full-time">Full-time</label>
//                     <br />
//                 </fieldset>
//                 <br />
                
//                 <label className="favColor" htmlFor="favColor">What is your favorite color?</label>
//                 <br />
//                 <select 
//                     id="favColor" 
//                     value={this.state.favColor}
//                     onChange={this.handleChange}
//                     name="favColor"
//                 >
//                     <option value="red">Red</option>
//                     <option value="orange">Orange</option>
//                     <option value="yellow">Yellow</option>
//                     <option value="green">Green</option>
//                     <option value="blue">Blue</option>
//                     <option value="indigo">Indigo</option>
//                     <option value="violet">Violet</option>
//                 </select>
//             </form>
//         )
//     }
// }

// export default App



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export default class App extends React.Component {
    state = {
        count: 1,
        character: {}
    }
    
    add = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    
    subtract = () => {
        this.setState(prevState => ({count: prevState.count - 1}))
    }
    
    getStarWarsCharacter = (id) => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => res.json())
            .then(data => this.setState({character: data}))
    }
    
    componentDidMount() {
        this.getStarWarsCharacter(this.state.count)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count === this.state.count) return;
        this.getStarWarsCharacter(this.state.count)
        console.log('updated');
    }
    
    render() {
        return (
            <>
                <div className="counter">
                    <button className="counter--plus" onClick={this.add}>+</button>
                    <div className="counter--count">
                        <h1>{this.state.count}</h1>
                    </div>
                    <button className="counter--minus" onClick={this.subtract}>–</button>
                </div>
                <h1>{this.state.character.name || "Loading..."}</h1>
            </>
        )
    }
}