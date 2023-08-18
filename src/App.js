import {BrowserRouter as Router, createBrowserRouter,Outlet, RouterProvider, ScrollRestoration} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Headers from './components/Headers'
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Pages from './pages/Pages';
import { productsData} from './api/Api';
import SingleProduct from '../src/components/SingleProduct'
import Login from './pages/Login';
import Error from './pages/Error';
import Shop from './pages/Shop';



const Layout = () =>{
  return(
    <div>
      <Headers />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: productsData
      },
      {
        path: '/products/:id',
        element: <SingleProduct />,
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/pages',
        element: <Pages />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/shop',
        element: <Shop />,
        loader: productsData
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
