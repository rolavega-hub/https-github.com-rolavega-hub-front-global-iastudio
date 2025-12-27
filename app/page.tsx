
import React from 'react';
import Navbar from '../components/ui/Navbar';
import Hero from '../components/sections/Hero';
import Footer from '../components/sections/Footer';
import Catalog from '../components/sections/Catalog';
import Sectors from '../components/sections/Sectors';
import OrionTech from '../components/sections/OrionTech';
import CustomSolutions from '../components/sections/CustomSolutions';

const HomePage: React.FC = () => {
  return (
    <main className="relative bg-[#0a111a]">
      <Navbar />
      <Hero />
      
      {/* Catálogo Técnico OrionStar */}
      <section id="catalogo">
        <Catalog />
      </section>

      {/* Sectores de Aplicación */}
      <section id="sectores">
        <Sectors />
      </section>

      {/* Tecnología de Vanguardia OrionStar */}
      <section id="tecnologia">
        <OrionTech />
      </section>

      {/* Soluciones a Medida */}
      <section id="soluciones-medida">
        <CustomSolutions />
      </section>

      {/* Solicitar estudio a medida - Sección Final CTA */}
      <section id="solicitar-estudio" className="relative">
        {/* Este ID es el destino de la navegación del botón principal */}
      </section>
      
      <Footer />
    </main>
  );
};

export default HomePage;
