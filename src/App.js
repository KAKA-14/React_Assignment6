import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Skills/>
    </div>
  );
}

export default App;
