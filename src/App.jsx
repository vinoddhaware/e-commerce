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
      path: '/',
      element: <AppLayout/>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/singleproduct/:id',
          element: <SingleProduct/>,
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/products',
          element: <Products/>,
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/cart',
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
