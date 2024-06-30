// import logo from './logo.svg';
// import './App.css';

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
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';


// import { isLoggedIn } from './utils/auth';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import DashboardPage from './pages/DashboardPage';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
     
//         <Route exact path="/">
//           {isLoggedIn() ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
//         </Route>
//         <Route path="/login" component={LoginPage} />
//         <Route path="/register" component={RegisterPage} />
//         <Route path="/dashboard" component={DashboardPage} />
        
//         </Routes>

      
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
