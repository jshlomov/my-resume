import './App.css';
import Navbar from './Navbar/Navbar';
import ContactDetails from './contactDetails/contactDetails';
import Pressentation from './Pressentetion/Pressentation';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Pressentation />
      <ContactDetails />
    </div>
  );
}

export default App;
