import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback="Loading...."><Dashboard /></Suspense>}></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => {navigate("/") }}>Landing page </button>
        <button onClick={() => {navigate("/dashboard")}}> Dashboard page </button>
      </div>
    </>
  );
}

export default App;

//Our problem statement is that we have to do client side routing
//basically means ki we have multiple routes but when should they run?
//Kis chiz pe click krne ke baad ye(/anyRoute) route chale
//So, react-router-dom let us do the client side routing
//It has basically 3 things we always have to use in routing i.e. browserRouter, Routers, Route(u can use multiple routes)
//Route comp is basically asks path and element to load and we say ki when btn clicked '/' route chalna chahiye
//Toh uss route ko chalne ke liye jo hook use kiya jaata hai uska name hai useNavigate
//This things we can do with window.location.href = "/dashboard" (route) but that causes hard reload we cannot used
//So, we prefer navigate hook provided by r-r-dom
//Problem is that ki it should be below the BrowserRouter otherwise it will not run
//so that we created a component below and call it in BrowserRouter
//Everything was fine until now ki "/" route Landing page pe chalega and "/dashboard" dashboard page pe clidk krne ke baad chalega
//But the problem is that ki BUNDLE GETTING HEAVY because we r recaiving the file(code) of both the component at a single time
//And we want ki when I clicked first btn sirf Landing Page ka code load ho same with 2nd route or btn
//So, to fixed this lazy loading is the thing we can use for this task
//But when we clicked on the dashboard so react don't immediately download the page instead it returns a promise
//You can think it is an async task to resolve this we have to use suspense
//When react is waiting for that promise, it pauses rendering
//now problem is that ki react cannot leave screen empty while waiting,So, u need something temporory to show on screen till the page loads
//So, for that purpose we use suspense is a Wrapper which tells React : till the child(page downloads) u can show this fallback on screen