import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Search} from "../../Search";


export function Countries() {
    const url = "https://restcountries.com/v3.1/all"
    const [countries, setCountries] = useState([])
    const [filtered, setFiltered] = useState([])
    const [searchInput, setSearchInput] = useState("")



    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(url)
            const countries = await response.json()
            setCountries(countries)
        }
        fetchData()
    }, [])

    const searchCountries = (searchValue) => {
        setSearchInput(searchValue)

        if (searchInput) {
            const filteredCountries = countries.filter((country) => (
                Object.values(country).join("").toLowerCase().includes(searchValue.toLowerCase
                ())
            ))
            setFiltered(filteredCountries)
        } else {
            setFiltered(countries)
        }
    }

    return(
        <>

        <Search
            searchCountries={searchCountries}
            // setCountries={setCountries}

        />

    {searchInput.length > 0 ?
        <section id="allCountries" className="grid">

            {filtered.map((country) => {
                const { numeriCode, name, flags, population, region, capital,
                    nativeName} = country

                return(

                    <div className="country" id="countryInfos" key={numeriCode} >
                        <Link to={`/countries/${name.common}`}>
                            <img src={flags.png} alt={name.official}/>

                            <div className="countryInfos" >
                                <h3 className='countryName'>{name.common}</h3>
                                <p> Population: <span>{population}</span>   <br></br>
                                    Region: <span>{region}</span><br></br>
                                    Capital: <span>{capital}</span></p>
                            </div>

                        </Link>
                    </div>

                )
            })}
        </section> : <section id="allCountries" className="grid">

            {countries.map((country) => {
                const { numeriCode, name, flags, population, region, capital,
                    nativeName} = country

                return(

                    <div className="country" id="countryInfos" key={numeriCode} >
                        <Link to={`/countries/${name.common}`}>
                            <img src={flags.png} alt={name.official}/>

                            <div className="countryInfos" >
                                <h3 className='countryName'>{name.common}</h3>
                                <p> Population: <span>{population}</span>   <br></br>
                                    Region: <span>{region}</span><br></br>
                                    Capital: <span>{capital}</span></p>
                            </div>

                        </Link>
                    </div>

                )
            })}
        </section>}
        </>
    )
}

