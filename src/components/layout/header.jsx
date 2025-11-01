import Logo from '../../assets/LogoLupusTexto.svg';
import { navbarLinks } from '../../data/data';
import { useState } from 'react';
import {Menu, X} from 'lucide-react';

function Header() {
    const [open, setOpen] = useState(false);

    return(
    
    <header className="h-20 bg-lupus-light flex items-center justify-between px-8 fixed top-0 left-0 right-0 z-50 shadow-md" data-aos="fade-down">
        {/* Logo */}
        <div className='flex items-center'>
            <img src={Logo} alt="Logo Lupus" className='h-[120px] drop-shadow-md' />
        </div>
        {/* Boton Hamburger */}
        <button onClick={() => setOpen(!open)} className='lg:hidden text-lupus-primary hover:text-lupus-primary-dark transition'>
            {open ? <X size={32} className='text-lupus-primary'/> : <Menu size={32} className='text-lupus-primary'/>}
        </button>
        
        {/* Navegacion Escritorio */}
        <nav className='hidden lg:flex'>
            <ul className='flex gap-9 text-[20px] font-medium text-lupus-primary text-shadow-md'>
                {navbarLinks.map((item) => (
                    <li key={item.id}>
                        <a href={item.link} className='hover:text-lupus-primary-dark transition whitespace-nowrap'>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>

        {/* Navegacion Movil */}
        <nav
        className={`lg:hidden absolute top-20 left-0 right-0 bg-lupus-light shadow-md transition-all duration-300 ease-in-out ${
        open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        }`}>
            <ul className='flex flex-col items-center gap-6 py-6 text-[18px] font-medium text-lupus-primary'>
                {navbarLinks.map((item) => (
                    <li key={item.id}>
                        <a href={item.link} className='hover:text-lupus-primary-dark transition'>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>

    </header>
    )
}

export default Header