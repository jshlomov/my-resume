import './App.css';
import Navbar from './Navbar/Navbar';
import ContactDetails from './contactDetails/contactDetails';
import About from './About/About';
import Projects from './myProjects/Projects';
import LogoAndC from './LogoAndC/LogoAndC';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About />
      <Projects />
      <ContactDetails />
      <LogoAndC />
    </div>
  );
}

export default App;
