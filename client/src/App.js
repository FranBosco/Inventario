import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
function App() {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={Landing} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
