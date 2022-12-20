import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import AgregProd from './components/AgregProd';
import AgregVenta from './components/AgregVenta';
import ModifStock from './components/ModifStock';
import CrearInsumo from './components/CrearInsumo';
import CrearProd from './components/CrearProd';
import AllInsumos from './components/AllInsumos';
import AllProds from './components/AllProds';

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
					<Route exact path="/cins" component={CrearInsumo} />
					<Route exact path="/cprod" component={CrearProd} />
					<Route exact path="/insumos" component={AllInsumos} />
					<Route exact path="/productos" component={AllProds} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
