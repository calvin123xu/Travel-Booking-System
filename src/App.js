import { Container } from 'react-bootstrap'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import FlightsScreen from './screens/FlightsScreen'
import HotelsScreen from './screens/HotelsScreen'
import ActivitiesScreen from './screens/ActivitiesScreen'
import PremadePackagesScreen from './screens/PremadePackagesScreen'
import PackagesScreen from './screens/PackagesScreen'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main classname="py-3">
        <Container>
          <Routes>
            
             < Route path = '/' Component = {HomeScreen} exact />
             < Route path = '/Flights' Component = {FlightsScreen} exact />
             < Route path = '/Hotels' Component = {HotelsScreen} exact />
             < Route path = '/Activities' Component = {ActivitiesScreen} exact />
             < Route path = '/Premade Packages' Component = {PremadePackagesScreen} exact /> 
             < Route path ='/pkg/:id' Component = {PackagesScreen} /> 
            
 
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;