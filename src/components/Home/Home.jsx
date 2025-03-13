import '../../index.css';
import './Home.css';
import HeroImage from '../../assets/images/farfetchd.png';

export default function Home() {
  return (
    <div id="home">
        <div className='hero'>
          <div className='hero-image'>
            <img src={HeroImage}></img>
          </div>
          <div className='hero-description'>
            <h1>Welcome to Dexfetch'd!</h1>
            <p>
              Dexfetch'd is a Pokédex web application where you can look up information
              about all Pokémon species.
            </p>
            <p>
              Dex entries contain basic data about each Pokémon species, including their
              typing, abilities, and stats.
            </p>
          </div>
        </div>
    </div>
  );
}