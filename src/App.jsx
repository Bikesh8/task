import {Container} from '@mui/material'
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
import PeopleDetails from './PeopleDetails'
import PlanetDetails from './PlanetDetails'

function App() {
 


  return (
    <>
      <Container>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='people/:id' element={<PeopleDetails/>}/>
          <Route path='planet/:id' element={<PlanetDetails/>}/>
        </Routes>
        
        
      </Container>

    </>
  )
}

export default App
