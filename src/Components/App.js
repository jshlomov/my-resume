import './App.css';
import Navbar from './Navbar/Navbar';
import ContactDetails from './contactDetails/contactDetails';
import About from './About/About';
import Projects from './myProjects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About />
      <Projects />
      <ContactDetails />
    </div>
  );
}

export default App;
