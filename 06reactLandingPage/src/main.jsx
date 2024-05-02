import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

const router = createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[
  {
    path:"",
    element:<Home/>
  },{
    path:"About",
    element:<About/>
  },{
    path:"Contact",
    element:<Contact/>
  },{
    path:"User/:userid", 
    element:<User/>
  },{ 
   
   path:"Github",
    element:<Github/>
  }
  ]
}])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//     <Route path='' element ={<Home/>}/>
//     <Route path='' element ={<About/>}/>
//     <Route path='' element ={<Contact/>}/>

//     {/* <Route path='User/:userid' element ={<User/>}/> */}
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
