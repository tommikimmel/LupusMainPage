
import Card from '../common/card.jsx';

function About() {
  return (
    <section className="bg-lupus-light-gray text-center py-12 px-4 min-h-full" id="about">
      <h2 className='font-bold text-4xl text-lupus-primary text-shadow-md'>Sobre Nosotros</h2>
      <p className='mt-2 px-5 max-w-3xl mx-auto text-lg '>
        <strong>LUPUS</strong> es una herramienta creada para ayudar a los comercios a trabajar con más <strong>orden, control y claridad.</strong> Nace con una idea simple: que cada negocio, sin importar su tamaño, pueda <strong>gestionar sus productos, ventas y ganancias</strong> de forma práctica, moderna y profesional.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 justify-items-center px-4">
        <Card
          title="Support"
          description="Offering resources and community support for Lupus patients."
          icon="🤝"
        />
        <Card
          title="Awareness"
          description="Educating the public about Lupus and its impact."
          icon="📢"
        />
        <Card
          title="Research"
          description="Funding research initiatives to find better treatments."
          icon="🔬"
        />
        <Card
          title="Advocacy"
          description="Advocating for policies that benefit Lupus patients."
          icon="🗣️"
        />

      </div>
    </section>
  );
}
export default About;