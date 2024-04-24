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
import CheckoutScreen from './screens/CheckoutScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import PackageListScreen from './screens/PackageListScreen'
import PackageEditScreen from './screens/PackageEditScreen'


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
             < Route path = '/checkout' Component = {CheckoutScreen} exact />
             < Route path = '/placeorder' Component = {PlaceOrderScreen} exact />
             < Route path = '/booking/:id' Component = {OrderScreen} exact />
             < Route path = '/payment' Component = {PaymentScreen} exact />
             < Route path = '/Flights' Component = {FlightsScreen} exact />
             < Route path = '/Hotels' Component = {HotelsScreen} exact />
             < Route path = '/Activities' Component = {ActivitiesScreen} exact />
             < Route path = '/Premade Packages' Component = {PremadePackagesScreen} exact /> 
             < Route path ='/pkg/:id' Component = {PackagesScreen} /> 
             < Route path ='/cart/:id?' Component = {CartScreen} /> 
             < Route path = '/admin/userlist' Component = {UserListScreen} exact />
             < Route path = '/admin/userlist' Component = {UserListScreen} exact />
             < Route path = '/admin/user/:id/edit' Component = {UserEditScreen} exact />
             < Route path = '/admin/packagelist' Component = {PackageListScreen} exact />
             < Route path = '/admin/package/:id/edit' Component = {PackageEditScreen} exact />
            
 
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;