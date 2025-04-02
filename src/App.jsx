import './index.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
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
						<div className='routes-container'>
							<Routes>
								<Route path="/" element={<Home></Home>}></Route>
								<Route path="/pokemon/:id" element={<PokedexEntry></PokedexEntry>}></Route>
							</Routes>
						</div>
					</div>
				</main>
				<Footer></Footer>
			</div>
		</Router>
	);
}

export default App;
