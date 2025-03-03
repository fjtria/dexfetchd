import '../../index.css';
import "./Navbar.css"
import PokedexSearch from "../PokedexSearch/PokedexSearch";


export default function Navbar() {
    return (
        <nav>
            <h1>Dexfetch'd</h1>
            <PokedexSearch />
        </nav>
    );
}