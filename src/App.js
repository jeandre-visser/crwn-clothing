import Home from './routes/home/home.component';
import { Routes, Route } from "react-router-dom";
import Navbar from './routes/nav/nav.component';
import Auth from './routes/auth/auth.component';
import Shop from './routes/shop/shop.component';
import Checkout from './components/checkout/checkout.component';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './store/user/user.action';

import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        console.log(user)
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

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
