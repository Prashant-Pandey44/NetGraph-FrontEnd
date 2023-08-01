// import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
// // import HomePage from 'scenes/homepage/homePage';
// // import LoginPage from 'scenes/loginPage/loginPage.jsx';
// import Neo4jDataVisualization from 'scenes/Visu/visulize.jsx';

// function App() {
//   return (
//     <div className="app">
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path= "/" element = {<LoginPage/>} /> */}
//         <Route path= "/" element = {<Neo4jDataVisualization/>} />
//         {/* <Route path= "/home" element = {<HomePage/>} /> */}
//       </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import React from "react"
import Routes from "./Routes"

const App = () => {
  return (
    <div>
        <Routes />
    </div>
  )
}

export default App;
