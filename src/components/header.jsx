import Logo from '../assets/LogoLupusTexto.svg'

function Header() {
    return(
    <>
    <header className="h-20 bg-lupus-light-gray flex items-center justify-between px-8">
        <div>
            <img src={Logo} alt="Logo Lupus" className='h-[120px] drop-shadow-md' />
        </div>
        <nav>
            <ul className='flex gap-9 text-lg font-medium text-lupus-primary text-center text-[22px] text-shadow-md'>
                <li><a href="#" className='whitespace-nowrap hover:text-lupus-primary-dark transition'>Inicio</a></li>
                <li><a href="#" className='whitespace-nowrap hover:text-lupus-primary-dark transition'>Sobre Nosotros</a></li>
                <li><a href="#" className='whitespace-nowrap hover:text-lupus-primary-dark transition'>Contactanos</a></li>
            </ul>
        </nav>
    </header>
    </>
    )
}

export default Header