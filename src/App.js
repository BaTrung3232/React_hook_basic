import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";

//template + logic
// JSX
// Babel

const App = () => {
    return (
        <div className="App">
            <Nav />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>REACT HOOK</h1>
            </header>
        </div>
    );
};

export default App;
