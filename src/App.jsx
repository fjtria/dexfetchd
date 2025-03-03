import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import PokedexEntry from './components/PokedexEntry';

function App() {
	return (
		<Router>
			<div>
				<Navbar></Navbar>
				<main>
					<Routes>
						<Route path="/pokemon/:id" element={<PokedexEntry></PokedexEntry>}></Route>
						<Route path="/" element={<Home></Home>}></Route>
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
