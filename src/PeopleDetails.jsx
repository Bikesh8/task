import React from 'react'
import {useParams} from 'react-router-dom'
import {Box, Card, CardContent, Typography} from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const PeopleDetails = () => {
    const id=useParams().id

    const [people,setPeople]=useState(null)
    useEffect(()=>{
        async function fetchpeople(){
            const res= await axios.get(`https://swapi.dev/api/people/${id}`)
            setPeople(res.data)
        }
        fetchpeople()
    },[])
  return (
    <Box>

    
    {
        people && (
            <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography variant='h2' color="text.secondary" gutterBottom>
        {people.name}
      </Typography>
      <Typography variant="h5" component="div">
        
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Name : {people.name} <br/>
        Height : {people.height} cm <br/>
        Weight : {people.mass} kg <br/>
        Hair Color : {people.hair_color} <br/>
        Skin Color : {people.skin_color} <br/>
        Eye Color : {people.eye_color} <br/>
        Birth Year : {people.birth_year} <br/>
        Gender : {people.gender} <br/>
      </Typography>
      
    </CardContent>
    
  </Card>
        )
    }
    </Box>
  )
}

export default PeopleDetails