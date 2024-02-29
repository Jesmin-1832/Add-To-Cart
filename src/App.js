
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './Components/Product';
import ProductDetail from './Components/ProductDetail';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import ProductCart from './Components/ProductCart';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/productDetail/:id' element={<ProductDetail />} />
            <Route path='/productCart' element={<ProductCart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
