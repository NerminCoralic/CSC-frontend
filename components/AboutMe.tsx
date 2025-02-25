import React from "react";
import { Leaf, Trees, Heart, Stars } from "lucide-react";
import Image from "next/image";
export default function App() {
  return (
    <section id="aboutCEO" className="w-screen mx-auto my-[-50px]">
      <div className="relative w-full h-[300px]">
        <Image
          className="p-0 m-0 my-[5px]"
          src="/wave.svg"
          alt="CSC o Denisu Karajiću"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-full min-h-[300px] bg-green-50 p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Trees className="w-24 h-24 text-green-800" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Image
              src={"/denoilu.svg"}
              alt="Denis Karajic"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden relative ">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-bl-full opacity-50" />
          <div className="flex flex-col md:flex-row items-center p-8 gap-8">
            <div className="w-full md:w-1/3 flex flex-col items-center space-y-4">
              <div className="relative transform transition-transform hover:scale-105 duration-300">
                <div className="w-48 h-48 bg-green-100 rounded-full flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 transition-all duration-300" />
                  <Image
                    className="text-[#2F3830] group-hover:scale-110 transition-transform duration-300 rounded-full"
                    src={"/denis.png"}
                    alt={"Poglavica children's summer campa"}
                    width={196}
                    height={196}
                  />
                </div>
                <div className="absolute -top-2 -right-2 animate-pulse">
                  <Heart
                    className="w-8 h-8 text-green-600"
                    fill="currentColor"
                  />
                </div>
              </div>
              <div className="flex space-x-6 items-center">
                <div className="w-8 h-8 text-[#2F3830] transform hover:scale-110 transition-transform" />
                <Trees className="w-8 h-8 text-[#2F3830] transform hover:scale-110 transition-transform" />
                <Stars className="w-8 h-8 text-green-600 transform hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-[#2F3830] flex items-center gap-2">
                  Ko Je Naš Poglavica?
                  <Image
                    src={"/camp.svg"}
                    alt="Ko je poglavica?"
                    width={32}
                    height={32}
                  />
                </h2>
                <p className="text-lg text-[#2F3830] leading-relaxed">
                  Naš vođa avantura je
                  <span className="text-green-50 font-black">
                    {" "}
                    Denis Karajić
                  </span>
                  , diplomirani sociolog, certificirani stručnjak za brigu o
                  djeci i strastveni planinar. Već dvije godine vodi kamp s puno
                  energije, smijeha i ponekim izgubljenim kompasom. Njegova
                  misija je sigurnost, zabava i nezaboravne uspomene za svako
                  dijete. Ako želite ljeto ispunjeno smijehom i pustolovinama –
                  on zna pravi recept!
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                {[
                  "Certifikat za brigu o djeci",
                  "Profesor",
                  "Osvajač Planina",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="bg-green-100 px-6 py-3 rounded-full text-[#2F3830] font-medium
                    transform hover:scale-105 hover:bg-green-200 transition-all duration-300
                    cursor-pointer shadow-sm hover:shadow-md flex items-center gap-2"
                  >
                    <Leaf className="w-4 h-4" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[300px]">
        <Image
          className="p-0 m-0 my-[-5px] rotate-180"
          src="/wave.svg"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
