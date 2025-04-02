import '../../index.css';
import './Home.css';
import HeroImage from '../../assets/images/farfetchd.png';
import "bsky-embed/dist/bsky-embed.es.js"

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
      <div className='news'>
        <h2>Latest Updates:</h2>
        <p>Posts from the Pokémon News feed.</p>
        <div className='news-feed'>
          <bsky-embed
            feed="at://did:plc:gxykmpc7s5vwf7sjdodyxwb2/app.bsky.feed.generator/aaai4pabezfq4"
            link-target="_blank"
          >
          </bsky-embed>
        </div>
      </div>
    </div>
  );
}