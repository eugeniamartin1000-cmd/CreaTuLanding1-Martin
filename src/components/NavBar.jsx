import '../assets/css/NavBar.css'
import CartWidget from './cartWidget.jsx'


const Navbar = () => {
    return (
        <>
      
        <nav className='nav-container'>
            <a className='anchor-nav' href=''>
                <img src={"brand-logo.svg"} alt='Logo SOPHIA Intelligence' className='brand-logo'/>
            </a>
            <a className='nav-category' href=''>Servidores</a>
            <a className='nav-category' href=''>Controladoras</a>
            <a className='nav-category' href=''>Smart Led</a>
            <a className='nav-category' href=''>Smart Touch</a>
            <a className='nav-category' href=''>Smart Locks</a>
            <a className='nav-category' href=''>Smart Roof</a>
            <CartWidget/>
        </nav>

        </>
    )
}

export default Navbar
