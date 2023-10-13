import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
