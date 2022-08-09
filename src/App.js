import logo from './logo.svg';
import './App.scss';
import React, {Fragment, useState, useEffect} from "react";
import {BiMoon} from "react-icons/bi"
import {BsSun} from "react-icons/bs"
import {CDeatails} from "./components/countryDetails/CDeatails";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import {Countries} from "./components/countries/Countries";

function App() {

    const [change, setChange] = useState(true)




        function theme() {
            if (change){
                return (
                    <div className="moon">
                        <BiMoon id="moon" />
                        <p>Dark Mode</p>
                    </div>
                    )
            }else{
                return(
                    <div className="sun">
                        <BsSun  />
                        <p>Light Mode</p>
                    </div>
                )
            }
        }


    const changeTheme = () => {
        setChange(false)

        if(change === false){
            setChange(true)
        }






        const moon = document.getElementById("moon")
        document.body.classList.toggle('dark')

        const header = document.getElementById("header")
        header.classList.toggle("dark_header")

        const search = document.getElementById("inputSearch")
        search.classList.toggle("dark_header")

        const select = document.getElementById("select")
        select.classList.toggle("dark_header")

        const cI = document.getElementById("countryInfos")
        cI.classList.toggle("dark_header")

        const infos = document.getElementById("infos")
        infos.classList.toggle("text_white")


    }




    return (
        <Router>
            <>
            <div className="header" id="header">
                <h1>Where in the world?</h1>
                <div className="darkMode">
                    <button onClick={changeTheme}>
                            {theme(false)}
                    </button>

                </div>
            </div>




            <Routes>
                <Route exact path="/" element={<Countries />}/>
                <Route path="/countries/:name" element={<CDeatails/>} />
            </Routes>


            </>
        </Router>

  );
}

export default App;
