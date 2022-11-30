import './App.css';

import React
// ,{ Component }
  from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage'

// export class App extends Component {
//   render() {
//     return (
//       <>
//         <Router>
//           <Switch>
//             <Route exact path="/">
//               <HomePage />
//             </Route>
//             <Route exact path="/login">
//               <Login />
//             </Route>
//             <Route exact path="/signup">
//               <Signup />
//             </Route>
//           </Switch>
//         </Router>
//       </>
//     )
//   }
// }

// export default App
// import React from 'react'

function App() {
  return (
    <div>
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </Router>
      </>
    </div>
  )
}

export default App