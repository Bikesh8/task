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
        Rotation Period : {planet.rotation_period}
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    
  </Card>
        )
    }
    </Box>
  )
}

export default PlanetDetails