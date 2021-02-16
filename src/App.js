import './App.css';
import "font-awesome/css/font-awesome.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './components/homepage';
import ShopPage from './components/shop/shopPage';
import SingleProduct from './components/singleProduct/singleProduct';
import NotFound from './components/notFound/notFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/product/:id" component={SingleProduct} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/not-found" component={NotFound} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
