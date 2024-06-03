import Navbar from '../components/Navbar'
import Upper from '../components/Upper'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Menu from '../components/Menu'

const Home = () => {
  return (
    <div>
        <div><Navbar/></div>
        <div><Upper/></div>
        <div><Card/></div>
        <div><Menu/></div>
        <div><Footer/></div>
    </div>
  )
}

export default Home