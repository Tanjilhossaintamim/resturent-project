import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/MainComponent";
import { Provider } from "react-redux";
import myStore from "./redux/Store";

function App() {
  return (
    <>
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
