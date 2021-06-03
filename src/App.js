import { Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <div className='bg-yellow-50 h-screen'>
      <Navbar />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/products' component={Products} />
      </Switch>
    </div>
  );
}

export default App;
