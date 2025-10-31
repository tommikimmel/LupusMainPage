import Logo from '../../assets/LogoLupusTexto.svg'

function Header() {
    return(
    <>
    <header className="h-20 bg-lupus-light flex items-center justify-between px-8 fixed top-0 left-0 right-0 z-50 shadow-md" data-aos="fade-down">
        <div>
            <img src={Logo} alt="Logo Lupus" className='h-[120px] drop-shadow-md' />
        </div>
        <nav>
            <ul className='flex gap-9 text-lg font-medium text-lupus-primary text-center text-[20px] text-shadow-md'>
                <li><a href="#inicio" className='whitespace-nowrap hover:text-lupus-primary-dark transition'>Inicio</a></li>
                <li><a href="#sobreNosotros" className='whitespace-nowrap hover:text-lupus-primary-dark transition'>Sobre Nosotros</a></li>
                <li><a href="#contacto" className='whitespace-nowrap hover:text-lupus-primary-dark transition'>Contactanos</a></li>
            </ul>
        </nav>
    </header>
    </>
    )
}

export default Header