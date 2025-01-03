import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
//import EditGame from "./components/EditGame";
import GameDetails from "./components/GameDetails";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import ErrorPage from "./components/ErrorPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Switch>
          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/games/:gameId" exact component={GameDetails} />
          <Route path="/games" component={GameCatalog} />
          <Route path="/create-game" component={CreateGame} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path= "/logout" component= {ErrorPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
