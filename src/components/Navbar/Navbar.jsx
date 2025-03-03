import '../../index.css';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import PokedexSearch from "../PokedexSearch/PokedexSearch";


export default function Navbar() {
    return (
        <nav>
            <Link to='/'><h1>Dexfetch'd</h1></Link>
            <div className='search-bar'>
                <PokedexSearch></PokedexSearch>
            </div>
        </nav>
    );
}