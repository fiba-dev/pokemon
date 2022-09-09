import "./App.css";
import { AllCards } from "./components/AllCards";
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<AllCards></AllCards>
			</div>
		</Provider>
	);
}

export default App;
