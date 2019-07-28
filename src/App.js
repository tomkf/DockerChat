// import logo from "./logo.svg";
// import "./App.css";
// import React, { Component } from "react";

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// //}

// class App extends Component {
//   render() {
//     return <div>I'm ready for changes</div>;
//   }
// }

// export default App;

import React, { Component } from "react";
import Chat from "./Chat";

class App extends Component {
  render() {
    return (
      <div>
        <Chat />
      </div>
    );
  }
}

export default App;
