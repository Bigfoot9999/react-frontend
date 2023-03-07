
import gamedata from "./gamedata";
import '../App.css';
import { Link } from "react-router-dom";
import Logonew from '../Logonew.png'
import Trending from '../Trending.png'
import {encode as base64_encode} from 'base-64';


const GamesDB = () => {
   
    if (gamedata.length === 0) {
        return <p>There are no games to show</p>
    }
    var path;

    let encoded = base64_encode(gamedata.path);


    return (
        <>
            <h2>There are {gamedata.length} games!</h2>
            <div class="game-container">
                {gamedata.map(gamedata => (
                    <>
                    <Link key={gamedata.name} className="game-link gamediv" to={base64_encode(gamedata.path)+"/"+gamedata.img+"/"+gamedata.name+"/"+gamedata.isTrending+"/"+gamedata.gameType}>
                        <div class="imgdiv game-card"  style={{backgroundImage: `url("/assets/images/${gamedata.img}")` }}> 
                                <div key={gamedata.name} class="game-card-hover"><h3 class="h3-game-card">{gamedata.name}</h3><img alt="BGS logo"className="logo-game-card" src={Logonew}/>
                               { gamedata.isTrending ?
                                 <img key={gamedata.name} alt="Trending Icon"className="trending-game-card" src={Trending} /> : null
                                }
                                
                        </div></div>
                    </Link></>
                ))}
            </div> 
</>
   
    );
}
export default GamesDB;