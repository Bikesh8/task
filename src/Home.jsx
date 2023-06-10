import React from 'react'
import { useEffect, useState } from 'react'
import {Container,Box,Button,Typography} from '@mui/material'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Home = () => { 
    const navigate = useNavigate()
    const [people,setPeople]=useState([])
 const [planets,setPlanets]=useState([])
 const [selected,setSelected]=useState('all')

function getPeopleDetails(url){
    const item=url.split('/')
    const id=item[item.length-2]
    navigate(`/people/${id}`)
}
 
function getPlanetDetails(url){
    const item=url.split('/')
    const id=item[item.length-2]
    navigate(`/planet/${id}`)
}
 useEffect(()=>{
  async function fetchPeople(){
    const res= await axios.get('https://swapi.dev/api/people')
    setPeople(res.data.results)
   }
   fetchPeople()
   async function fetchPlanets(){
    const res= await axios.get('https://swapi.dev/api/planets')
    setPlanets(res.data.results)
   }
   fetchPlanets()
 },[])
  return (
    <div><Box sx={{display:'flex',justifyContent:'center',gap:'16px'}}>
    <Button variant='contained' onClick={()=>{setSelected('all')}}>All</Button>
    <Button variant='contained' onClick={()=>{setSelected('people')}}>People</Button>
    <Button variant='contained' onClick={()=>{setSelected('planets')}}>Planets</Button>
  </Box>
  {
    (selected ==='all' || selected==='people') && (
      <Box>
    {
      people.map(ppl=>(
        <Typography onClick={()=>getPeopleDetails(ppl.url)} variant='h6' key={ppl.name}>
          {ppl.name}
        </Typography>
      ))
    }
  </Box>
    )
  }
  
  {
    (selected ==='all' || selected==='planets') && ( 
      <Box>
    {
      planets.map(planet=>(
        <Typography onClick={()=>getPlanetDetails(planet.url)} variant='h6' key={planet.name}>
          {planet.name}
        </Typography>
      ))
    }
  </Box>
    )
  }</div>
  )
}

export default Home