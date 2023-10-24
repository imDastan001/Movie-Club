import '../index.css'
import Login from './login'
import Browse from './browse'
import {createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
const Body=()=> {
const approuter= createBrowserRouter([

{
path:'/',
element:<Login/>
},
{
  path:'/browse',
  element:<Browse/>
}

]);

  return (
    <>
    <RouterProvider router={approuter}/>
     
    </>
  )
}

export default Body
