import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import PokedexEntry from './components/PokedexEntry/PokedexEntry';
import Footer from './components/Footer/Footer'

function App() {
	return (
		<Router>
			<div>
				<Navbar></Navbar>
				<main>
					<div id="star-container">
						<div id="star-pattern"></div>
						<div id="star-gradient-overlay"></div>
						<Routes>
							<Route path="/" element={<Home></Home>}></Route>
							<Route path="/pokemon/:id" element={<PokedexEntry></PokedexEntry>}></Route>
						</Routes>
					</div>
					<Footer></Footer>
				</main>
			</div>
		</Router>
	);
}

export default App;
