
import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import Product from './pages/admin/Product'
import Category from './pages/admin/Category'
import Orders from './pages/admin/Orders'
import Users from './pages/admin/Users'
import AddCategory from './pages/admin/AddCategory'
import AddProduct from './pages/admin/AddProduct'
import Register from './pages/user/Register'
import UserLogin from './pages/user/UserLogin'
import About from './pages/About'
import Products from './pages/Products'
import ContactUs from './pages/ContactUs'
import ProductDetails from './pages/ProductDetails'
import MyOrders from './pages/user/MyOrders'
import Cart from './pages/user/Cart'
import Profile from './pages/user/Profile'
import ChangePassword from './pages/user/ChangePassword'
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}> </Route>
          <Route path='products' element={<Products/>}></Route>
          <Route path='contact' element={<ContactUs/>}></Route>
          <Route path='/admin/login' element={<Login/>}></Route>

          <Route path='/admin/dashboard' element={<Dashboard/>}>
            <Route path='category' element={<Category/>}></Route>
            <Route path='add-category' element={<AddCategory/>}></Route>
            <Route path='product' element={<Product/>}></Route>
            <Route path='addproduct' element={<AddProduct/>}></Route>
            <Route path='addproduct/:id' element={<AddProduct/>}></Route>
            <Route path='orders' element={<Orders/>}></Route>
            <Route path='users' element={<Users/>}></Route>
          </Route>

          {/* user routes start */}
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<UserLogin/>}></Route>

          <Route path='/user/dashboard'>
            <Route path='myorders' element={<MyOrders/>}></Route>
            <Route path='cart' element={<Cart/>}></Route>
            <Route path='profile' element={<Profile/>}></Route>
            <Route path='change-password' element={<ChangePassword/>}></Route>
          </Route>


          {/* public route */}
          <Route path='/product-details/:id' element={<ProductDetails/>}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
