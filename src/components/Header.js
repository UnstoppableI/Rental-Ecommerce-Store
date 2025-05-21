"use client"

import { useState } from "react"

import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { ToastContainer } from "react-toastify"
import { AiOutlineUser } from "react-icons/ai"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { ShoppingCart } from "lucide-react" // Added as a replacement for cartIcon

const Header = () => {
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)

  // Fixed: Changed from function call to property access and uncommented
  const productData = useSelector((state) => state.bazar.product)
  const userInfo = useSelector((state) => state.bazar.userInfo)

  const handleNavigate = () => navigate("/")
  const handleNavigateCart = () => navigate("/cart")

  const NavItems = () => (
    <>
      <li className="hover:text-gray-600 transition-colors">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-gray-600 transition-colors"></li>
      {userInfo?.name && <li className="text-blue-600 font-medium">{userInfo.name}</li>}
      <li>
        <Link to="/login">
          <AiOutlineUser className="w-6 h-6 border border-black rounded-full" />
        </Link>
      </li>
      <li className="relative" onClick={handleNavigateCart}>
        {/* Replaced cartIcon with ShoppingCart from lucide-react */}
        <ShoppingCart className="w-7 h-7 cursor-pointer" />
        {productData?.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {productData.length}
          </span>
        )}
      </li>
    </>
  )

  return (
    <header className="fixed w-full z-10 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <figure className="w-36 sm:w-44">
            {/* Uncomment when you have the logo
            <img
              onClick={handleNavigate}
              src={logo || "/placeholder.svg"}
              alt="logo"
              className="w-full cursor-pointer"
            />
            */}
            {/* Added a text placeholder for the logo */}
            <div onClick={handleNavigate} className="cursor-pointer font-bold text-xl">
              YourLogo
            </div>
          </figure>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <NavItems />
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setMenu(!menu)}>
            <HiOutlineMenuAlt3 className="h-6 w-6" />
          </button>
        </div>
      </div>
      {menu && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {" "}
            {/* Fixed: Added value to py class */}
            <NavItems />
          </ul>
        </nav>
      )}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
        newestOnTop={false}
      />
    </header>
  )
}

export default Header
