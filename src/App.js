import './App.css';
import Wrap from './components/Wrap';
import { ViewportProvider } from './useViewportHook/useViewport';

function App() {
	return (
		<div className="App">
			<ViewportProvider>
				<Wrap />
			</ViewportProvider>
		</div>
	);
}

export default App;
