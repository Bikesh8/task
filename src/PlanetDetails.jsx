import React from 'react'
import {useParams} from 'react-router-dom'
import {Box, Card, CardContent, Typography} from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const PlanetDetails = () => {
    const id=useParams().id
    const [planet,setPlanet]=useState(null)
    useEffect(()=>{
        async function fetchplanet(){
            const res= await axios.get(`https://swapi.dev/api/planets/${id}`)
            setPlanet(res.data)
        }
        fetchplanet()
    },[])
  return (
    <Box>

    
    {
        planet && (
            <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography variant='h2' color="text.secondary" gutterBottom>
        {planet.name}
      </Typography>
      <Typography variant="h5" component="div">
        
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Rotation Period : {planet.rotation_period}<br/>
        Orbital Period : {planet.orbital_period}<br/>
        Diameter : {planet.diameter}<br/>
        Climate : {planet.climate}<br/>
        Gravity : {planet.gravity}<br/>
        Terrain : {planet.terrain}<br/>
        Surface Water : {planet.surface_water}<br/>
        Population : {planet.population}
      </Typography>
      
    </CardContent>
    
  </Card>
        )
    }
    </Box>
  )
}

export default PlanetDetails