import React from 'react'
import { useEffect, useState } from 'react'
import {Container,Box,Button,Typography, TextField} from '@mui/material'
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


 const [filteredPeople, setFilteredPeople] = useState([])
 useEffect(()=>{
    setFilteredPeople(people)
 }, [people])

 const [filteredPlanets, setFilteredPlanets] = useState([])
 useEffect(()=>{
    setFilteredPlanets(planets)
 },[planets])
  return (
    <div><Box sx={{display:'flex',justifyContent:'center',gap:'16px'}}>
    <Button variant='contained' onClick={()=>{setSelected('all')}}>All</Button>
    <Button variant='contained' onClick={()=>{setSelected('people')}}>People</Button>
    <Button variant='contained' onClick={()=>{setSelected('planets')}}>Planets</Button>
  </Box>
  <TextField id="outlined-basic" label="Search" onChange={(e)=>{
    e.target.value==="" ? setFilteredPeople(people) : setFilteredPeople(people=>(people.filter(item=>item.name.toLowerCase().includes(e.target.value))))
  }} variant="outlined" />
  {
    (selected ==='all' || selected==='people') && (
      <Box sx={{marginTop: '32px'}}>
        <Typography variant='h4' fontWeight={500}>People</Typography>
    {
      filteredPeople.map(ppl=>(
        <Typography sx={{cursor: 'pointer', '&:hover': {
            textDecoration: 'underline', color: 'blue'
        }}}  onClick={()=>getPeopleDetails(ppl.url)} variant='h6' key={ppl.name}>
          {ppl.name}
        </Typography>
      ))
    }
  </Box>
    )
  }

<br/><TextField id="outlined-basic" label="Search" onChange={(e)=>{
    e.target.value==="" ? setFilteredPlanets(planets) : setFilteredPlanets(planets=>(planets.filter(item=>item.name.toLowerCase().includes(e.target.value))))
  }} variant="outlined" />
  {
    (selected ==='all' || selected==='planets') && (
      <Box sx={{marginTop: '32px'}}>
        
    {
      filteredPlanets.map(ppl=>(
        <Typography sx={{cursor: 'pointer', '&:hover': {
            textDecoration: 'underline', color: 'blue'
        }}}  onClick={()=>getPlanetDetails(ppl.url)} variant='h6' key={planets.name}>
          {planets.name}
        </Typography>
      ))
    }
  </Box>
    )
  }
  
  {
    (selected ==='all' || selected==='planets') && ( 
      <Box sx={{marginTop: '32px'}}>
        <Typography variant='h4' fontWeight={500}>Planets</Typography>
    {
      filteredPlanets.map(planet=>(
        <Typography sx={{cursor: 'pointer', '&:hover': {
            textDecoration: 'underline', color: 'blue'
        }}} onClick={()=>getPlanetDetails(planet.url)} variant='h6' key={planet.name}>
          {planet.name}
        </Typography>
      ))
    }
  </Box>
    )
  }
  
  

  </div>
  )
}

export default Home