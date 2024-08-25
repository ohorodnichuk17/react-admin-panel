import './App.css'
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import MainDash from "./components/MainDash/MainDash.tsx";

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
            <Sidebar/>
            <MainDash/>
        </div>
    </div>
  );
}

export default App
