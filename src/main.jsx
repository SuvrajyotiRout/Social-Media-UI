import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from './App.jsx'
import Post from './Components/Post.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App></App> },
  { path: "/create-post", element: <Post></Post> }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
