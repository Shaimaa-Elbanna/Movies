import './App.css';
import Mastercomponent from './Component/Mastercomponent/Mastercomponent';
import {RouterProvider, Navigate, createHashRouter} from 'react-router-dom'
import Home from './Component/Home/Home';
import Movies from './Component/Movies/Movies';
import Regestration from './Component/Regestration/Regestration';
import Login from './Component/Login/Login';
import Notfound from './Component/Notfound/Notfound';
import { useEffect, useState } from 'react';
import jwt_decoded from 'jwt-decode'
import MovieDetails from './Component/MovieDetails/MovieDetails';
// import { Provider } from 'react-redux';
// import { Store } from './Store';
import TvDetails from './Component/TvDetails/TvDetails';
import PeopleDetails from './Component/PeopleDetails/PeopleDetails';
import TV from './Component/TV/TV';


function App() {

let [user,setToken]= useState(null)



useEffect ( ()=> {

    if (localStorage.getItem("token")!=null){
      saveLoginData()


}} , [])

// function  GaurdRouting (props){
//   if (localStorage.getItem("token")==null){

//     return <Navigate to="/login"/>


//   }

//   else{
//     return props.children

//   }
// }


function saveLoginData(){

  let token =localStorage.getItem("token")
  let data = jwt_decoded(token)

setToken(data)
console.log(data);
}

function logout(){
  setToken(null)

  localStorage.removeItem("token")
  return <Navigate to ="/login"/>

}






let routing = createHashRouter
([
  {path:"/" , element :<Mastercomponent  logOut={logout} /> , children: [
    {path : "home", element:<Home/>},
    {path : "/", element:<Home/>},
    {path : "tv", element:<TV />},
    {path : "movies", element:< Movies/>},
    {path : "moviedetails/:id", element:< MovieDetails/>},
    {path : "tvdetails/:id", element:< TvDetails/>},
    {path : "peopledetails/:id", element:< PeopleDetails/>},

    {path : "regestration", element:< Regestration/>},
    {path : "login", element:<Login  loginToken={saveLoginData} />},
    {path : "*", element: <Notfound/>},
  ]}
])





  return (
    <>
    <RouterProvider router ={routing}/>

    </>
    );
}

export default App;
