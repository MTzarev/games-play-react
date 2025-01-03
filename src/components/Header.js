import {Link, NavLink} from 'react-router-dom';

let Header=()=>{
        let activeLinkStyles = {
            backgroundColor: 'grey',
            textDecoration: 'underline',
            borderRadius: '5px',
            padding: '15px, 15px, 15px, 15px',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'
        }
    return (
              
        <header >
        <h1><NavLink className="/home" to="/">GamesPlay</NavLink></h1>
        <nav>
                <NavLink activeStyle={activeLinkStyles} to="/games">All games</NavLink>
            <div id="user">
                <NavLink activeStyle={activeLinkStyles} to="/create-game">Create Game</NavLink>
                <NavLink to="/logout">Logout</NavLink>
            </div>
            <div id="guest">
                <NavLink activeStyle={activeLinkStyles} to="/login">Login</NavLink>
                <NavLink activeStyle={activeLinkStyles} to="/register">Register</NavLink>
            </div>
        </nav>
    </header>
   
    );
}
export default Header;