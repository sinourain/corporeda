export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Corporeda: Innovación en Educación Ambiental</h1>
        <p className="text-lg mb-6">
          Corporeda es pionera en investigación en educación ambiental, enfocándose en la separación en la fuente de materiales orgánicos e inorgánicos. Durante 15 años, hemos diseñado estrategias aplicadas a entornos familiares, escolares y comunitarios, promoviendo oportunidades empresariales para las comunidades que adoptan herramientas de políticas públicas de educación ambiental.
        </p>
        <p className="text-lg mb-6">
          Nuestro semillero de investigación, <strong>RRRotar</strong>, enseña a reconectarse con los ciclos naturales a través de la relación entre las fases lunares, los órganos de las plantas, los elementos de la naturaleza y los ciclos biológicos. Este enfoque biodinámico introduce el concepto de separación en la fuente mediante la clasificación de semillas, promoviendo prácticas sostenibles.
        </p>
        <p className="text-lg mb-6">
          Además, transformamos materiales inorgánicos, como latas de aluminio, en bisutería ecoartesanal, generando beneficios compartidos del 50-50 para comunidades femeninas en ferias y mercados ecoartesanales. Nuestro impacto ha sido reconocido con premios como el <strong>Ranking 500 Latinoamérica Verde 2019</strong> y el concurso <strong>Recon Colombia 2021</strong>. En 2025, nuestro fundador, el Ing. Javier Guerra, fue seleccionado como uno de los cinco ganadores de la beca para el Foro de Defensores de Derechos Humanos y Asuntos Ambientales en el marco del Acuerdo de Escazú.
        </p>
        <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
        <p className="text-lg mb-4">
          Si tienes alguna pregunta o necesitas ayuda, no dudes en comunicarte con nosotros:
        </p>
        <div className="text-lg">
          <p>
            <strong>Correo:</strong>{" "}
            <a
              href="mailto:rrrottar@corporeda.com"
              className="text-blue-500 hover:underline"
            >
              rrrottar@corporeda.com
            </a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/573015335093"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              +57 301 533 5093
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
