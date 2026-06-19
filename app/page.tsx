"use client";

import { useState } from "react";

export default function Home() {
  const images = [
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111637.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111642.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111643.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111649.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111650.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111656.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111657.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111700.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111702.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111703.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111707.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111711.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111729.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111730.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111743.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111744.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111746.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111747.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111750.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111751.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111752.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111754.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111759.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111800.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111802.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111803.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111805.jpeg",
    "/aparadores/Extremely_realistic_professional_architectural_photography_202606111806.jpeg"
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black text-white px-6 pb-32">

      {/* LOGO (NÃO ALTERADO) */}
      <div className="flex justify-center pt-10">
        <img
          src="/logo/logo.png"
          alt="Logo"
          className="w-[350px] md:w-[550px] lg:w-[700px]"
        />
      </div>

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mt-20">

        <p className="text-xs tracking-[0.4em] text-white/40 uppercase">
          Architectural Collection
        </p>

        <h1 className="text-5xl md:text-7xl font-light tracking-wide mt-6">
          CATÁLOGOS
        </h1>

        <div className="w-28 h-[1px] bg-white/20 mx-auto mt-8" />

        <p className="mt-10 text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Um acervo de projetos que traduz elegância e sofisticação.
        </p>

      </section>

      {/* TÍTULO GALERIA */}
      <section className="max-w-7xl mx-auto mt-24">

        <h2 className="text-3xl font-light tracking-widest mb-10 border-b border-white/10 pb-4">
          APARADORES
        </h2>

        {/* GALERIA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(img)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-black"
            >

               <img
                src={img}
                alt={`Projeto ${i + 1}`}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
              />

              <div className="absolute top-3 left-3 bg-black/70 px-2 py-1 rounded text-white text-sm">
                {i + 1}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto mt-32 text-center border-t border-white/10 pt-10">

        <p className="text-white/80 text-lg">
          📞 (32) 99834-3069
        </p>

        <p className="text-white/60 mt-2">
          ✉️ jhulidesigners@gmail.com
        </p>

        <p className="text-white/30 text-sm mt-6">
          JMP Designers © Todos os direitos reservados
        </p>

      </footer>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[92%] max-h-[92%] rounded-xl"
          />
        </div>
      )}

    </main>
  );
}
