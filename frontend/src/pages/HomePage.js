import { Link } from 'react-router-dom';
import Games from '../icons/Games.svg';
import Ruffle from '../icons/Ruffle.png';
import React from '../icons/React.png';
import Discord from '../icons/Discord.svg';
import Github from '../icons/Github.png';
import HandShacke from '../icons/Handshake.png';
import Youtube from '../icons/Youtube.svg';
import "../homepage.css";
import gamedata from './gamedata';

const HomePage = () => {
  /*function card1stylestuff() {
    document.getElementById("card1s").onmousemove = e => {
        for(const card1 of document.getElementsByclass("card1")) {
          const rect = card1.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
      
          card1.style.setProperty("--mouse-x", `${x}px`);
          card1.style.setProperty("--mouse-y", `${y}px`);
        }
      }
  }*/
  //<h1 class="hero-h1">Bigfoot's Game Shack</h1>
  //<p3>Bigfoot's Game Shack is a go-to website for over 300+ free and unblocked games that you can play instantly. With an extensive collection of games and no need to worry about access restrictions, it's the perfect destination for gamers of all ages.</p3></div>

    return (
        <>
        
        <div class="hero-div"><p1 class="hero-p1">
        Built for Chromebook Gamimg
        </p1><br/>
        <br/>
      </div>
        <div id="card1s">
        <Link to="/play">
  <div class="card1">
    <div class="card1-content">
      <div class="card1-image">
<img alt="Icon"class="icon-body"src={Games} />
      </div>
      <div class="card1-info-wrapper">
        <div class="card1-info">
          <div class="card1-info-title">
            <h3>{gamedata.length} games</h3>  
            <h4>Flash, Emulator, Online Games, you name it</h4>
          </div>    
        </div>
      </div>
    </div>
  </div>
  </Link>
  <a href="https://ruffle.rs/">

  <div class="card1">
    <div class="card1-content">
      <div class="card1-image">
      <img alt="Icon"class="icon-body ruffle"src={Ruffle} />

      </div>
      <div class="card1-info-wrapper">
        <div class="card1-info">
          <div class="card1-info-title">
            <h3>Ruffle Emulator</h3>  
            <h4>Powered by Ruffle, the internet's best Flash Emulator</h4>
          </div>    
        </div>  
      </div>
    </div>
  </div>
  </a>
  <a href="https://reactjs.org/">
  <div class="card1">
    <div class="card1-content">
      <div class="card1-image">
      <img alt="Icon"class="icon-body"src={React} />

      </div>
      <div class="card1-info-wrapper">
        <div class="card1-info">
          <div class="card1-info-title">
            <h3>Built With React</h3>  
            <h4>A powerful Javascript library, capable of displaying dynamic data</h4>
          </div>    
        </div>
      </div>
    </div>
  </div>
  </a>
  <a href="https://discord.com/invite/JYQ4n8DBKM">

  <div class="card1">
    <div class="card1-content">
      <div class="card1-image">
      <img alt="Icon"class="icon-body"src={Discord} />

      </div>
      <div class="card1-info-wrapper">
        <div class="card1-info">
          <div class="card1-info-title">
            <h3>Discord Server</h3>  
            <h4>Join over 500+ members in our Discord Server</h4>
          </div>    
        </div>
      </div>
    </div>
  </div>
  </a>
  <div class="card1">
    <div class="card1-content">
      <div class="card1-image">
      <img alt="Icon"class="icon-body"src={HandShacke} />

      </div>
      <div class="card1-info-wrapper">
        <div class="card1-info">
          <div class="card1-info-title">
            <h3>Partners</h3>  
            <h4>Click to see our affiliates</h4>
          </div>    
        </div>
      </div>
    </div>
  </div>
  <a href="https://github.com/Bigfoot9999/">
  <div class="card1">
    <div class="card1-content">
      <div class="card1-image">
      <img alt="Icon"class="icon-body"src={Github} />

      </div>
      <div class="card1-info-wrapper">
        <div class="card1-info">
          <div class="card1-info-title">
            <h3>Open Source Project</h3>  
            <h4>Our Source code is public on Github</h4>
          </div>    
        </div>
      </div>
    </div>
  </div>
  </a>
  <a href="https://www.youtube.com/@bigfoots-game-shack">
  <div class="card1">
    <div class="card1-content">
      <div class="card1-image">
      <img alt="Icon"class="icon-body"src={Youtube} />

      </div>
      <div class="card1-info-wrapper">
        <div class="card1-info">
          <div class="card1-info-title">
            <h3>YouTube Channel</h3>  
            <h4>Subscribe to us on YouTube</h4>
          </div>    
        </div>
      </div>
    </div>
  </div>
  </a>
</div>

</>
    )
    
}

export default HomePage;