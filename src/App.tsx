import { useState } from 'react'
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import UserLayout from './components/layout/userLayout'
import Home from './pages/home'
import ProductDetail from './pages/product/productDetail'
import Signup from './pages/signup'
import Signin from './pages/signin'
import AdminLayout from './components/layout/adminLayout'
import Dashboard from './pages/product/dashboard'
import ProductUpdate from './pages/product/product-update'
import ProductAdd from './pages/product/product-add'
import CategoryList from './pages/category/category-list'
import CategoryUpdate from './pages/category/category-update'
import CategoryAdd from './pages/category/category-add'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>

      <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='product/:id' element={<ProductDetail/>}/>
      </Route>
      
      <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='product/:id' element={<ProductUpdate/>}/>
        <Route path='product-add' element={<ProductAdd/>}/>
        <Route path='category' element={<CategoryList/>}/>
        <Route path='category/:id' element={<CategoryUpdate/>}/>
        <Route path='category-add' element={<CategoryAdd/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App