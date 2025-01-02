import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import { AppProvider } from "./context/productsContext"
import { FilterContextProvider } from "./context/filterContext"
import { CartProvide } from "./context/cartContex"

function App() {
  const router = createBrowserRouter([
    {
      path: '/e-commerce/',
      element: <AppLayout/>,
      children: [
        {
          path: '/e-commerce/',
          element: <Home />
        },
        {
          path: '/e-commerce/singleproduct/:id',
          element: <SingleProduct/>,
        },
        {
          path: '/e-commerce/about',
          element: <About/>
        },
        {
          path: '/e-commerce/products',
          element: <Products/>,
        },
        {
          path: '/e-commerce/contact',
          element: <Contact />
        },
        {
          path: '/e-commerce/login',
          element: <Login />
        },
        {
          path: '/e-commerce/cart',
          element: <Cart/>
        },
      ]
    }
  ])

  return (
    <>
    <AppProvider>
      <FilterContextProvider>
        <CartProvide>
          <RouterProvider router={router} />   
        </CartProvide>
      </FilterContextProvider>
    </AppProvider>
    </>
  )
}

export default App
