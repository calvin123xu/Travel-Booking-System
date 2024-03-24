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
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main classname="py-3">
        <Container>
          <Routes>
            
             < Route path = '/' Component = {HomeScreen} exact />
             < Route path = '/Login' Component = {LoginScreen} exact />
             < Route path = '/register' Component = {RegisterScreen} exact />
             < Route path = '/profile' Component = {ProfileScreen} exact />
             < Route path = '/Flights' Component = {FlightsScreen} exact />
             < Route path = '/Hotels' Component = {HotelsScreen} exact />
             < Route path = '/Activities' Component = {ActivitiesScreen} exact />
             < Route path = '/Premade Packages' Component = {PremadePackagesScreen} exact /> 
             < Route path ='/pkg/:id' Component = {PackagesScreen} /> 
             < Route path ='/cart/:id?' Component = {CartScreen} /> 
            
 
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;