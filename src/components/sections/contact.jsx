
function Contacto(){
    return (
        <>
        <section id="contacto" className="min-h-full flex flex-col items-center justify-center p-8" data-aos="slide-right">
            <h2 className="font-bold text-4xl text-lupus-primary text-shadow-md">Contacto</h2>
            <form className="mt-6 flex flex-col  w-full max-w-md">
                <label htmlFor="nombre" className="font-semibold mt-4 outline-none">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required className="h-10 border border-gray-300 rounded-md p-2" />
                <label htmlFor="email" className="font-semibold mt-4 outline-none">Email:</label>
                    <input type="email" id="email" name="email" required className="h-10 border border-gray-300 rounded-md p-2" />
                <label htmlFor="mensaje" className="font-semibold mt-4 outline-none">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" required className="border border-gray-300 rounded-md p-2 resize-none mb-6"></textarea>
                <button type="submit" className="bg-lupus-primary text-white rounded-md p-2 py-3 hover:bg-lupus-primary-dark transition font-semibold">Enviar</button>
            </form>
        </section>
        </>
    )
}
export default Contacto;