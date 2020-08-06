import React from 'react'
import axios from 'axios';
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
      fetchOne:[],
      fetchTwo:[],
      fetchThree:[],
      fetchFour:[],
      fetchFive:[],
      fetchSix:[],
      fetchSeven:[],
      IsLoading:true
     };
    }
  componentDidMount(){
    let One = "https://anapioficeandfire.com/api/characters/16"
    let Two=" https://www.anapioficeandfire.com/api/houses/378"
    let Three="https://www.anapioficeandfire.com/api/houses/229"
    let Four=" https://www.anapioficeandfire.com/api/houses/17"
    let Five=" https://www.anapioficeandfire.com/api/characters/901"
    let Six="https://www.anapioficeandfire.com/api/houses/362"
    let Seven="https://www.anapioficeandfire.com/api/characters/232"
   
    let cors=""

    const requestOne=axios.get(cors+One);
    const requestTwo=axios.get(cors+Two)
    const requestThree=axios.get(cors+Three)
    const requestFour=axios.get(cors+Four)
    const requestFive=axios.get(cors+Five)
    const requestSix=axios.get(cors+Six)
    const requestSeven=axios.get(cors+Seven)

  axios.all([requestOne,requestTwo,requestThree,requestFour,requestFive,requestSix,requestSeven])
  .then(axios.spread((...responses)=>{
      const fetchOne=responses[0].data.born;
      const fetchTwo=responses[1].data.region;
      const fetcThree=responses[2].data.coatOfArms;
      const fetcFour=responses[3].data.seats[1];
      const fetcFive=responses[4].data.aliases[2]
      const fetcSix=responses[5].data.words;
      const fetcSeven=responses[6].data.books[0]
      console.log(fetcThree)
      this.setState({IsLoading:false,fetchOne,fetchTwo,fetcThree, fetcFour, fetcFive,fetcSix,fetcSeven})
      console.log(responses)
  }))
  .catch((errors=>{
      console.error(console.errors);
  })
  )};
 
render() {
 
 if(!this.state.IsLoading){
 }

     return(
         <div>
         <h1> john was bon in::{this.state.fetchOne}</h1>
         <h1>  the region is::{this.state.fetchTwo}</h1>
        <h1> the coat of arms of House Lannister is::{this.state.fetcThree}</h1> 
         <h1>  the second seat of House Baratheon is::{this.state.fetcFour}</h1>
         <h1>  Robert Baratheon's second alias is::{this.state.fetcSix} </h1> 
         <h1> the name of the founder of House Stark is::{this.state.fetcFive}</h1>
         <h1> {this.state.fetcSix}</h1>
         <h1>  {this.state.fetcSeven}</h1>
         </div>
     )
}   
     

}
  export default User;