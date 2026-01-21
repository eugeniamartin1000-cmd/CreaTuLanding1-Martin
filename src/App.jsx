import './App.css'
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from './components/itemListContainer.jsx';



function App () {

  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje='Bienvenidos a mi Shop'/>
    </>
  )
}

export default App