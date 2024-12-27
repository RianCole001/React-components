
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; // Import the Header component
import Footer from'./components/Footer';//import the footer component
import ShootButton from './components/shootButton';
import Greetings from './components/Greetings';
import car1 from './components/car1';
import buttton  from'./components/buttonshoot';
function App() {
  return (
   
    <div className="App">
      <Header/>  
      
    <header className="App-header">
         
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 offset-md-3 text-center p-5 bg-primary text-white rounded">
               
            <ShootButton/>
            
            </div>

            <div className="col-md-6 offset-md-3 text-center p-5 bg-primary text-white rounded">
               
            <car1 brand="Toyota" milage="10000" /> 
               </div>

        </div>
        <Greetings name="John Doe" />
                <Greetings name="Jane Smith" />
                <Greetings name="W3B SILVEN" />
    </div>
</header>
<>  


  </>

<Footer/>
</div>

  );
}


export default App;
