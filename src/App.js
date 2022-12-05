import Home from './routes/home/home.component';
import { Routes, Route } from "react-router-dom";
import Navbar from './routes/nav/nav.component';
import SignIn from './routes/sign-in/sing-in.component';

const Shop = () => {
  return <h1>Hello there</h1>
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='sign-in' element={<SignIn />}/>
      </Route>
    </Routes>
  )
}

export default App;
