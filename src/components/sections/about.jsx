
import Card from '../common/card.jsx';

function About() {
  return (
    <section className="bg-lupus-light-gray text-center py-12 px-4 min-h-full" id="sobreNosotros" data-aos="slide-up">
      <h2 className='font-bold text-4xl text-lupus-primary text-shadow-md'>Sobre Nosotros</h2>
      <p className='mt-2 px-5 max-w-3xl mx-auto text-lg '>
        <strong>LUPUS</strong> es una herramienta creada para ayudar a los comercios a trabajar con más <strong>orden, control y claridad.</strong> Nace con una idea simple: que cada negocio, sin importar su tamaño, pueda <strong>gestionar sus productos, ventas y ganancias</strong> de forma práctica, moderna y profesional.
      </p>
      <h3 className='font-bold text-2xl text-lupus-primary text-shadow-md mt-8'>¿Qué ofrecemos?</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 justify-items-center px-4" data-aos="slide-left" data-aos-delay="200"> 
        <Card
          title="Organización"
          description="Brindamos una herramienta pensada para que cada comercio mantenga un control total sobre sus productos, categorías y ventas sin complicaciones."
          icon="🧩"
        />
        <Card
          title="Crecimiento"
          description="Lupus impulsa el progreso de los negocios ayudando a visualizar ganancias, analizar resultados y tomar decisiones con información real."
          icon="📈"
        />
        <Card
          title="Simplicidad"
          description="Diseñada con un enfoque claro: que cualquier persona pueda usarla sin esfuerzo. Interfaz limpia, intuitiva y sin procesos innecesarios."
          icon="🛠️"
        />
        <Card
          title="Confianza"
          description="Creada para acompañar al comerciante en cada paso, garantizando estabilidad, claridad y resultados confiables. Lupus crece junto a vos"
          icon="🤝"
        />

      </div>
    </section>
  );
}
export default About;