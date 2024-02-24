import { Routes, Route } from "react-router-dom"
import {Home} from './assets/pages/home'
import {Detail} from './assets/pages/detail'
import {Register} from './assets/pages/register'
import {Cart} from './assets/pages/cart'

// import {Whish} from "./assets/pages/whishlist"
import {TopBar} from "./assets/components/top-bar"



function App() {
  return ( 
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        
  
</Routes>
</div>
  );
}
export default App;
