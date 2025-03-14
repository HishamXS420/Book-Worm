import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import BookDetail from './Components/BookDetail/BookDetail';
import { ToastContainer} from 'react-toastify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
        // Root এ গেলে Outlet হিসেবে initially বা by default Home.jsx এর page দেখাবে 
      },
      {
        path: 'dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        // Real life এ এমনে করবো না , DATABASE দিয়ে করবো।
        loader: () => fetch('/booksData.json') 
        // Worst way to load some data (not Recommended)
        // Do not load all the books for one book
      
      },
      {
        path: 'pages',
        element:<PagesToRead></PagesToRead>
      },
      {
        path: 'books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: () => fetch('/booksData.json'),
        // Do not load all the books for one book
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
    <ToastContainer />
  </StrictMode>,
)
