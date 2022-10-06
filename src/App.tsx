import Router from "../src/components/Router";
import Route from "../src/components/Router/Route";
import About from "./pages/about/About";
import Main from "./pages/main/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={<Main />} />
        <Route path="/about" component={<About />} />
      </Router>
    </div>
  );
}

export default App;
