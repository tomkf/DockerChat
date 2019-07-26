import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
//}

class App extends Component {
  render() {
    return <div>I'm ready for changes</div>;
  }
}

export default App;

// FROM node:10

// # Create app directory
// WORKDIR /usr/src/app

// # Install app dependencies
// # A wildcard is used to ensure both package.json AND package-lock.json are copied
// # where available (npm@5+)
// COPY package*.json ./

// RUN npm install
// # If you are building your code for production
// # RUN npm ci --only=production

// # Bundle app source
// COPY . .

// EXPOSE 8080
// CMD [ "node", "server.js" ]

// You will also want a .dockerignore file
// with:
// node_modules
// npm-debug.log
