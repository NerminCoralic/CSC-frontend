/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";

const GalleryRow = ({ reversed, images }: any) => {
  return (
    <div
      className={`flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-4 mb-4`}
    >
      {/* Glavna slika (prva u nizu) */}
      <div className="md:w-1/2 aspect-[4/3] overflow-hidden rounded-2xl group relative">
        {images[0] && (
          <Image
            src={`https://scintillating-adaptation-production.up.railway.app${images[0].url}`}
            alt="Galerija glavna slika"
            className="object-cover transform transition-transform duration-300 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
          />
        )}
      </div>

      {/* Ostale slike (grid prikaz) */}
      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        {images
          .slice(1, 5)
          .map((img: { id: React.Key | null | undefined; url: any }) => (
            <div
              key={img.id}
              className="aspect-square overflow-hidden rounded-xl group relative"
            >
              <Image
                src={`https://scintillating-adaptation-production.up.railway.app${img.url}`}
                alt="Galerija slike"
                className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GalleryRow;
