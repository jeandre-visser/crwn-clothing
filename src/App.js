import Home from './routes/home/home.component';
import { Routes, Route, Outlet } from "react-router-dom";

const Shop = () => {
  return <h1>Hello there</h1>
}

const Navbar = () => {
  return (
    <div>
      <div>
        <h1>Navbar</h1>
      </div>
      <Outlet />
    </div>
  )
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
