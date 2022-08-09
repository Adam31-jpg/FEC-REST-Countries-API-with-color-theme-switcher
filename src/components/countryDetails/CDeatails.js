import React, {useEffect} from "react";
import {useState} from "react";
import {Link, useParams} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import "./Cdetails.scss"
import "../../App.scss"


export function CDeatails() {
    const [country, setCountry] = useState([])
    const { name } = useParams()



    useEffect(() => {
        const fecthData = async () => {
            const response = await fetch(
                `https://restcountries.com/v3.1/name/${name}`
            )
            const country = await response.json()
            setCountry(country)
            console.log(country)

        }
        fecthData()
    }, [])



    return(
        <>


            <section id="countries">
                <div className="back">
                    <Link to="/">
                        <button><BiArrowBack /> Back</button>
                    </Link>

                </div>
                {country.map((c) => {
                    const {numericCode, flags, name, nativeName, population, region, subregion,
                    capital, tld, currencies, languages, borders} = c

                    return (

                        <div key={numericCode} className="container">
                            <div className="flag">
                                <img src={flags.png} alt={name.official}/>
                            </div>

                            <div className="infos" >
                                <div id="infos">
                                    <h2>{name.common}</h2>
                                    <div className="details">
                                        <div className="left">
                                            <p>Native Name: <span>{name.common}</span></p>
                                            <p>Population: <span>{population}</span></p>
                                            <p>Region: <span>{region}</span></p>
                                            <p>Sub Region: <span>{subregion}</span></p>
                                            <p>Capital: <span>{capital}</span></p>
                                        </div>
                                        <div className="right">
                                            <p>Top Level Domain: <span>{tld}</span></p>
                                            <p>Currencies: <span>{currencies.length}</span></p>
                                            <p>Languages: <span>{languages[0]}</span></p>
                                        </div>
                                    </div>
                                    <div className="borders">
                                        Border Countries: <span>{borders.map((border) => {
                                            return(
                                                    <p>{border}</p>
                                            )
                                    })}</span>
                                    </div>
                                </div>

                            </div>


                        </div>
                    )
                })}
            </section>
        </>
    )
}
