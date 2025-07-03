import {Routes,Route,Link,BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
function App() {
  return (
    <Router>
      <Link to="/homepage" style={{margin: 10}}>Home</Link><br></br>
        <Link to="/aboutpage"style={{margin: 10}} >About us</Link><br></br>
          <Link to="/contactpage" style={{margin: 10}}>contact us</Link><br></br>
          <Link to="/servicepage" style={{margin: 10}}>service </Link><br></br>
    <Routes>
      <Route path="/homepage" element={<Home/>}></Route>
      <Route path="/aboutpage" element={<About/>}></Route>
      <Route path="/contactpage" element={<Contact/>}></Route>
      <Route path="/servicepage" element={<Service/>}></Route>
    </Routes>
    </Router>
  )
}

export default App;
