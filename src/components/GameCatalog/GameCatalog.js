import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import * as gameSercice from "../../services/gameService"
function GameCatalog ({navigationChangeHandler}) {
    let [games, setGames] = useState([]);
  
    useEffect (()=>{
        
        setTimeout(()=>{
            gameSercice.getAll()
            .then(result => {
                setGames(result);
            });
        }, 1000);
        
    
    }, []);
    return (
        <section id="catalog-page">
        <h1>All Games</h1>
            {games.length>0 ?
            games.map(x=><GameCard key={x._id} game={x} navigationChangeHandler={navigationChangeHandler} />)
            : <h3 className="no-articles">No games yet or Loading...</h3>
        }
             
    </section>
    );
}
export default GameCatalog;