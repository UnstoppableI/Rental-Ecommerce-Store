"use client"
import "./globals.css";
import Home from "./page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {BrowserRouter, Routes, Route, Outlet, ScrollRestoration,} from 'react-router-dom';
import Cart from "@/app/Cart";
import productsData from "@/api/Api";
import Product from "@/components/Product";
import Login from "./Login";


export default function RootLayout({children}) 
{
  return(
    <>
    <Header />
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} loader={<productsData />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path= "/product/:id" element= {<Product />}></Route>
      </Routes>
    </BrowserRouter>
    {/* <ScrollRestoration /> */}
    <Outlet />
    <Footer />
    </>
  )
}