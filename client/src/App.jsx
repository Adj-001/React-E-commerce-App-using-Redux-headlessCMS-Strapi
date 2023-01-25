import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Product from "./Pages/Product/Product"
import Products from "./Pages/Products/Products"

const Layout =() => {

  return (
  <div className="app">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/products/:id",
        element:<Products />
      },
      {
        path:"/product/:id",
        element:<Product />
      },
    ]
  },
])

function App() {


  return (
    <div className="app">
      <RouterProvider router={router} />
      {/* <h1 className="text-3xl font-bold underline bg-slate-500">
        Hello world!
      </h1> */}

    </div>
  )
}

export default App
