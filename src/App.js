import React from 'react';
import  {BrowserRouter, Route} from "react-router-dom";
import Posts from './components/posts';
import ToDo from './components/todo';
import Header from './navBar';


function App() {

  return (
    <div className="App">
    
    <BrowserRouter>
    <Header/>
    <Route path="/todos" render={()=>(<ToDo  isAuthed={true}/>)}/>
    <Route path="/posts" render={()=>(<Posts  isAuthed={true}/>)}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
