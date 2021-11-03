
import axios from 'axios';
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Home.css';

const Home = (props) => {
    const { searchType, searchIdType } = useParams();
    const [searchpick, setSearchpick] = useState("people")
    const [searchid, setSearchid] = useState(0)
    const history = useHistory();
    const [searchdataapi, setSearchdataapi] = useState([])
    const [submitted, setSubmitted] = useState(false)


    useEffect((e) => {
        axios.get(`https://swapi.dev/api/${searchType}/${searchIdType}`)
            .then(response => { setSearchdataapi(response.data) })
            .catch(err => { console.log(err) });
    }, [submitted])


    const searchData = (e) => {
        e.preventDefault();

        history.push(`/${searchpick}/${searchid}`)
        setSubmitted(!submitted);
    }


    return (
        <div>
            <form onSubmit={searchData}>
                <label>Search for:</label>
                <select onChange={(e) => setSearchpick(e.target.value)} value={searchpick}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <input type="text" onChange={(e) => setSearchid(e.target.value)} value={searchid} placeholder="0" />
                <button>Search</button>
            </form>
            <div>
                {searchdataapi && searchType === "people" ?
                    <div>
                        <h1>{searchdataapi.name}</h1>
                        <label><b>Height:</b></label>
                        <p>{searchdataapi.height}</p>
                        <label><b>Mass:</b></label>
                        <p>{searchdataapi.mass}</p>
                        <label><b>Hair Color:</b></label>
                        <p>{searchdataapi.hair_color}</p>
                        <label><b>Skin Color:</b></label>
                        <p>{searchdataapi.skin_color}</p>
                    </div>
                    : null
                }

                {searchdataapi && searchType === "planets" ?
                    <div>
                        <h1>{searchdataapi.name}</h1>
                        <label><b>Climate:</b></label>
                        <p>{searchdataapi.climate}</p>
                        <label><b>Terrain:</b></label>
                        <p>{searchdataapi.terrain}</p>
                        <label><b>Surface Water:</b></label>
                        <p>{searchdataapi.surface_water}</p>
                        <label><b>Population:</b></label>
                        <p>{searchdataapi.population}</p>
                    </div>
                    : null
                }
            </div>
        </div>

    );

}
export default Home;