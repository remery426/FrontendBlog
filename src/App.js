import React from 'react';
import Login from './Components/Login/Login';
import Blog from './Components/Blog/Blog';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Components/Header'

class App extends React.Component {
  render(){
    return(
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Blog}/>
            <Route exact path="/Login" component={Login}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default App
