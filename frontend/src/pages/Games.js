import { useParams } from "react-router-dom";
import '../App.css';
import NotFound from "./Notfound";
import gamedata from "./gamedata";
import Trending from '../Trending.png'
import Back from '../icons/Back.png'
import { Link } from "react-router-dom";
import Fullscreen from '../icons/Fullscreen.svg'
import {decode as base64_decode} from 'base-64';

const Games = () => {

    const {swfId, imgId, gameName, isTrending, type} = useParams();

    const decodedSwf = base64_decode(swfId);

    const game = gamedata.find(gamedata => gamedata.path === decodedSwf); //SWF ID IS THE PATH



   const trendingID = gamedata.find(gamedata => gamedata.isTrending === isTrending);
    const newId = "/assets/images/" + imgId;
    //this is the link that we load the swf files from. Parm must me ?swf=${swfId}
    if (!game){
        return <NotFound />
    }
    var src;
    if (type === "flash") {
        let decoded = base64_decode(swfId);
        src = `https://bigfeet.app/g/loading/index.html?url=gfiles/gfiles/flash/?swf=`+decoded;
    }
    if (type === "html5") {
        let decoded = base64_decode(swfId);
         src = `/assets/html5/`+decoded;
    }
    if (type === "external") {
         //let decoded = base64_decode(swfId);
         src = "http://localhost:8080/uv/service/"+swfId;
    }

    return (
        <>
        <div className="game-opt">
        <Link to="/play">
        <img src={Back} alt="Back" className="backwards-button"/></Link>
        </div>
        <div className="game-content">
        <div className="sidebar-gamepage">
        <h1>{gameName}</h1>
        <p2>Game Type: {type},</p2><br/><br/>
        <p2>Game Tags: {isTrending}</p2>
        
        <img alt="game" key="img" className="sidebar-gamepage-img" src={newId}/>
        
        { trendingID ?
        <img key={gameName} alt="Trending Icon"className="trending-game-card" src={Trending} /> : null
        }
        </div>
        <div>
        <img src={Fullscreen} alt="Fullscreen" className="fullscreen" onClick={() => window.open(src, "_blank")}/>
        <iframe title="gameloader" width={500} height={500}className="iframe-game"  key={swfId} src={src}></iframe>
        </div></div>
        </>
    )
}


export default Games;