import Home from './routes/home/home.component';
import { Routes, Route } from "react-router-dom";
import Navbar from './routes/nav/nav.component';

const Shop = () => {
  return <h1>Hello there</h1>
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
      </Route>
    </Routes>
  )
}

export default App;
