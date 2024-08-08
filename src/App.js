import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Form from './Form';
import PersonContainer from './components/PersonContainer';


function App() {
  return (
    <Router>
      <PersonContainer />
    </Router>
  );
}

export default App;
