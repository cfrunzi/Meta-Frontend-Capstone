import React from "react";
import BookingPage from "./BookingPage"
import Homepage from "./Homepage";
import {Routes, Route} from "react-router-dom"

// functions for main page: specials, nav, booking page, call to action
function Main(){
    return(
    <main>
        <div className="main">
            <h2>Placeholder Text</h2>
            <Homepage></Homepage>
            <BookingPage/>
        </div>
        <Routes> 
            <Route exact path="/" element={<Homepage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
    </main>
    );
}

export default Main;