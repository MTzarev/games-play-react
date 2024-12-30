function GameCard ({game, 
    navigationChangeHandler,}){
 let onDetailsClick = (e) => {
   e.preventDefault();
    navigationChangeHandler(`/details/${game._id}`)
 }
    return(
        <div className="allGames">
            <div className="allGames-info">
                <img src={game.imageUrl} alt=""/>
                <h6>{game.Category}</h6>
                <h2>{game.title}</h2>
                <a href="#" onClick={onDetailsClick} className="details-button">Details</a>
            </div>
            </div>
    
    );
}
export default GameCard;