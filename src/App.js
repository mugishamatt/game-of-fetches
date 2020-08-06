import axios from "axios";
import React from 'react';
import User from './Components/User'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="App"> 
      <User/>
      </div>
     );
  }
}
 
export default App;


