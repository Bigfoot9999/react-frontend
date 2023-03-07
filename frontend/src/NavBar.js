import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useUser from './hooks/useUser';
import logonew from './Logonew.png'
import Home from './icons/Home.svg'
import info from './icons/info.svg'
import Articles from './icons/Articles.png';
import Games from './icons/Games.svg';
import Logout from './icons/Logout.png';
import Login from './icons/Login.png';
import Discord from './icons/Discord.svg';
import Youtube from './icons/Youtube.svg';

const NavBar = () => {

    const {user} = useUser();
    const navigate = useNavigate();
    //className="login-log-out"
    return (
    
<nav className="navbar">
        <img className="logo-nav" src={logonew}/>
        <Link title="Home"to="/"><img class="icon-nav"src={Home} /></Link>
        <Link title="Info"to="/about"><img class="icon-nav"src={info} /></Link>
        <Link title="Articles"to="/articles"><img class="icon-nav"src={Articles} /></Link>
        <Link title="Games" to="/play"><img class="icon-nav"src={Games} /></Link>
        <a title="Join our Discord" href="https://discord.com/invite/JYQ4n8DBKM"><img class="icon-nav"src={Discord} /></a>
        <a title="Sub to us on YT" href="https://www.youtube.com/@bigfoots-game-shack"><img class="icon-nav"src={Youtube} /></a>


        {user && <Link to="/admin"><img class="icon-nav"src={logonew}/></Link>
        }
        {user 
        ? <button  class="button-nav-user"onClick={() =>{signOut(getAuth());}}>
            <img class="icon-nav"src={Logout} /></button>

        : <button class="button-nav-user" onClick={() => {
            navigate('/login');
        }}><img class="icon-nav"src={Login} /></button>
        }
</nav>
    )
}

export default NavBar;