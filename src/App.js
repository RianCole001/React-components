import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; // Import the Header component
import Footer from'./components/Footer';//import the footer component
import car1 from'./components/car1';//import the car component
import shoot from './shoot';
function App() {
  return (
    <div className="App">
      
      <Header/>
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      
      </header>
       
      <Footer/>
  
      <div className='bb'>
      <car1></car1>
      </div>

    </div>
   
  );
}

export default App;
