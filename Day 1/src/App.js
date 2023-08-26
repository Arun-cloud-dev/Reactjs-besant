import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Contact from './contactsa/contact';

function App() {
  return (
    <div className="App">
      <div><Navbar /></div>
      <div><Contact/><label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" /></div>
      
      
    </div>
  );
}

export default App;
