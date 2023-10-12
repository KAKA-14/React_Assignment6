import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from './components/NavBar';
import Banner from './components/Banner';
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;
