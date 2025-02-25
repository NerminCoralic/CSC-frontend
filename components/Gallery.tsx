/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Stars } from "lucide-react";
import GalleryRow from "./GalleryRow";
import Empty from "./Empty"; // Importuj Empty komponentu

const Gallery = ({ gallery }: any) => {
  return (
    <div id="galerija" className="w-full min-h-screen">
      <section className="w-full px-8 py-16">
        <div className="max-w-10xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2F3830] mb-8 flex items-center gap-2">
            Naš Život u Kampu
            <Stars className="w-6 h-6 text-green-600" />
          </h2>
          {gallery?.data?.length > 0 ? (
            <div className="space-y-8">
              {gallery.data
                .map((row: any) => (
                  <GalleryRow
                    key={row.id}
                    images={row.images}
                    reversed={row.reversed}
                  />
                ))
                .reverse()}
            </div>
          ) : (
            <Empty
              title="Nema Dostupnih Slika"
              description="Trenutno nema slika u galeriji!"
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
