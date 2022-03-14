import StateHook from './components/stateHook';
import EffectHook from './components/effectHook';
import ContextHook from './components/contextHook';
import Header from './components/Header';

function App() {
	return (
		<div className="container-fluid">
			<Header />
			<StateHook />
			<EffectHook />
			<ContextHook />
		</div>
	);
}

export default App;
