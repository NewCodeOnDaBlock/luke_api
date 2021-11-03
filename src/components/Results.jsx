import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Home.css';

const Results = (props) =>{
    const {search, idsearch} = useParams();
    const [peopledata, setPeopledata] = useState([])
    const [planetdata, setPlanetdata] = useState([])


    useEffect((e)=>{
        axios.get('https://swapi.dev/api/planets')
        .then(response => {setPlanetdata(response.data.results)})
        .catch(err => {console.log(err)});
    }, [])


    useEffect((e)=>{
        axios.get('https://swapi.dev/api/people')
        .then(response => {setPeopledata(response.data.results)})
        .catch(err => {console.log(err)});
    }, [])



    return (
        <div>
            {/* <div>
        
                { 
                    peopledata.map((people, i) =>{
                        return <div key={i}>{ people.name }</div>
                })}
            </div><br></br>
            <div>
                { 
                    planetdata.map((planet, i) => {
                        return <div key={i}>{ planet.name }</div>
                })}
            </div> */}
        

        </div>

    )
    
}
export default Results;