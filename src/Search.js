import React, { useState, useEffect } from "react"
import { BiSearchAlt } from "react-icons/bi";
import "./App.scss"

export function Search({
    searchCountries,
    searchInput,
    setCountries,
    countries
}) {

    const [regions, setRegions] = useState([])

    const region = [{
            name: "africa"
        },
        {
            name: "america"
        },
        {
            name: "asia"
        },
        {
            name: "europe"
        },
        {
            name: "oceania"
        },
    ]

    const fetchRegion = async(region) => {
        const res = await fetch(`
            https://restcountries.com/v3.1/region/${region}`)
        const data = await res.json()
        setCountries(data)
    }

    useEffect(() => {

        fetchRegion()
    }, [])


    return ( <
        div className = "search"
        id = "search" >
        <
        div id = "inputSearch" >
        <
        label htmlFor = "" > < BiSearchAlt / > < /label> <
        input onChange = {
            (e) => searchCountries(e.target.value)
        }
        value = { searchInput }
        id = "inputSearch"
        type = "search"
        placeholder = "Search for a country..." / >
        <
        /div> <
        select placeholder = "test"
        onChange = {
            (e) => fetchRegion(e.target.value)
        }
        value = { regions.name }
        id = "select"
        name = "select" >
        <
        option value = "africa" > Africa < /option> <
        option value = "america" > America < /option> <
        option value = "asia" > Asia < /option> <
        option value = "europe" > Europe < /option> <
        option value = "oceania" > Oceania < /option> < /
        select >
        <
        /div>
    )
}