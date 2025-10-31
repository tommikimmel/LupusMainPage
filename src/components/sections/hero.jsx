import fondo from '../../assets/bgHero.webp'

function Hero() {
    return (
        <section className="min-h-screen bg-cover bg-center flex items-center justify-center flex-col px-[60px]" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${fondo})`, backgroundBlendMode: 'darken'}}>
            <h1 className='text-[100px]/[1] text-center text-lupus-light text-shadow-lg mb-8 font-semibold'>¡Descubre nuestra aplicacion!</h1>
            <a href="#" className="bg-lupus-primary flex items-center justify-center font-semibold text-[18px] text-white h-[55px] w-[180px] rounded-[10px] hover:bg-lupus-primary-dark hover:scale-105 focus:scale-95   transition">Contactanos</a>
        </section>
    )
}
export default Hero