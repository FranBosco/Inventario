import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import AgregProd from './components/AgregProd';
import AgregVenta from './components/AgregVenta';
import ModifStock from './components/ModifStock';
function App() {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/aprod" component={AgregProd} />
					<Route exact path="/aventa" component={AgregVenta} />
					<Route exact path="/modif" component={ModifStock} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
