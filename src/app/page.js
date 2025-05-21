// import Image from "next/image";
"use client";
import React, {useEffect,useState} from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";


export default function Home() {
  
  const [products,setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async() => {
      try{
        const response = await fetch ("/api/products");

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
      }, []);
    
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <Banner />
      <Products products={products} />
      
    </div>
  );
}
