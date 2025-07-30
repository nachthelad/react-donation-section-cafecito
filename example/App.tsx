import React from 'react';
import DonationSection from '../src/DonationSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          React Donation Section - Examples
        </h1>
        
        <div className="space-y-8">
          {/* Default variant */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Default Variant</h2>
            <DonationSection />
          </section>

          {/* Minimal variant */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Minimal Variant</h2>
            <DonationSection
              variant="minimal"
              title="¿Te sirvió este artículo? Invítame un café"
              buttonText="Comprar un café"
              buttonUrl="https://buymeacoffee.com/tu-usuario"
              buttonIcon="☕"
            />
          </section>

          {/* Card variant */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Card Variant</h2>
            <DonationSection
              variant="card"
              title="Apoya este proyecto open source"
              buttonText="Hacer donación"
              buttonUrl="https://github.com/sponsors/tu-usuario"
              buttonIcon="⭐"
            />
          </section>

          {/* Custom styling */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Custom Styling</h2>
            <DonationSection
              title="¿Te ayuda esta app a ser más productivo? Apoya el desarrollo"
              buttonText="Apoyar proyecto"
              buttonUrl="https://ko-fi.com/tu-usuario"
              buttonIcon="🚀"
              variant="default"
              className="mt-8 mb-4"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App; 