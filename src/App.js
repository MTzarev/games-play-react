import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
//import EditGame from "./components/EditGame";
import GameDetails from "./components/GameDetails";
import GameCatalog from "./components/GameCatalog";
import ErrorPage from "./components/ErrorPage"
import { useState } from 'react';


function App() {
  let [page, setPage] = useState('/home');

let routes = {
  '/home': <WelcomeWorld/>,
  '/games': <GameCatalog/>,
  '/create-game': <CreateGame/>,
  '/logout': <ErrorPage/>,
  '/login': <Login/>,
  '/register': <Register/>,
  
};
function navigationChangeHandler (path) {
  setPage(path)
 console.log(path);
  
}


  return (
    <div id="box">

    <Header navigationChangeHandler={navigationChangeHandler} />

    <main id="main-content">
   {routes[page] || <ErrorPage/>}
    </main>


</div>
  );
}

export default App;
