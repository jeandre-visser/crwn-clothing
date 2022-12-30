import Home from './routes/home/home.component';
import { Routes, Route } from "react-router-dom";
import Navbar from './routes/nav/nav.component';
import Auth from './routes/auth/auth.component';
import Shop from './routes/shop/shop.component';
import Checkout from './components/checkout/checkout.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />}/>
        <Route path='shop/*' element={<Shop />}/>
        <Route path='auth' element={<Auth />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
    </Routes>
  )
}

export default App;
