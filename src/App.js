import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GameDetails from "./components/GameDetails";
import GameCatalog from "./components/GameCatalog";
function App() {
  return (
    <div id="box">

    <Header></Header>

    <main id="main-content">
    <WelcomeWorld></WelcomeWorld>
    </main>


</div>
  );
}

export default App;
