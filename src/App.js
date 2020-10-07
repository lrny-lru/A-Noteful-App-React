import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import NoteListNav from '../NotelistNav/NoteListNav';
import NotePageNav from '../NotePageNav/NotePageNav';
import NoteListMain from '../'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//       </header>
//     </div>
//   );
// }

export default function App(){
  return(
    <Router>
      <header>
        <nav>
          <div>
            <ul>
              <li>example 1</li>
              <li>example 2</li>
              <li>example 3</li>
              <li>example 4</li>
            {/*folder components will go here*/}
            </ul>
          </div>
        </nav>
        <div>
          <h1>Noteful {/*href that sets the webpage back to home*/}</h1>
        </div>
      </header>

      <main>
        {/* path: the path of the route. Here, we use / to define the path of the home page. */}
        {/* render: will display the content whenever the route is reached. Here, we'll render a welcome message to the user. */}
    <Route path="/" render={() => {/*welcome page here */}} />
      </main>
    </Router>
  );
}




