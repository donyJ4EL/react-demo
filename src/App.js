import logo from './logo.svg';
import Header from './Header';
import Profile from './Profile';
import Welcome from './Welcome';
import './App.css';

function App() {
  return (
    <div style = {{ padding: '2rem' }}>
      <img src={logo} className="App-logo" alt="logo" />
      <Header title = "My First React App" />
      <Welcome name = "Dony" age = {40} />
      {/* <Profile name = "Dony" age = {40} /> */}
    </div>
  );
}


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
//           Learn React Now
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
