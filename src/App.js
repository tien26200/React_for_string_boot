
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateProducts from './components/UpdateProducts';
import DetailProduct from './components/DetailProduct';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch,  Route  } from 'react-router-dom';

function App() {
  
  return (

    <>
    <Router>    
        <HeaderComponent />                      
        <div className="container">  
          
           <Switch>
           <Route path="/" exact component= {ListEmployeeComponent} />   
              <Route path="/products" component= {ListEmployeeComponent}/>
              <Route path="/add-products" component= {CreateEmployeeComponent}/>
              <Route path="/update-products/:id" component= {UpdateProducts}/>
              <Route path="/deatail-products/:id" component= {DetailProduct}/>
              <Route path="/Home" component= {Home}/>
           </Switch>                                                                     
        </div>                
        <FooterComponent />
        </Router>
  
    
    </>
    
  );
}

export default App;
