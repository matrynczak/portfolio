import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './portfolio/Portfolio';

function Wrap() {

	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					path="/"
					element={<Portfolio/>}
				/>
				{/* <Route
					path="/:project-name"
					element={<ProjectComponent/>}
				/> */}
			</Routes>
		</BrowserRouter>
	);
}

export default Wrap;
