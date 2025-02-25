"use client";

import React, { useState } from "react";
import { Tent, TreePine, Moon } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`group relative bg-white/90 backdrop-blur-sm rounded-xl transition-all duration-300 ${
        isOpen
          ? "shadow-lg shadow-orange-500/10"
          : "hover:shadow-md hover:shadow-orange-500/5"
      }`}
    >
      <button
        className="w-full px-6 py-5 flex items-start gap-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mt-1">
          <Tent
            className={`w-5 h-5 transition-colors duration-300 ${
              isOpen
                ? "text-orange-500"
                : "text-orange-400 group-hover:text-orange-500"
            }`}
          />
        </span>
        <div className="flex-1">
          <h3
            className={`text-lg font-medium transition-colors duration-300 ${
              isOpen
                ? "text-orange-500"
                : "text-slate-800 group-hover:text-orange-500"
            }`}
          >
            {question}
          </h3>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-slate-600 leading-relaxed">{answer}</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

interface AccordionProps {
  qas: {
    id: number;
    Question: string;
    Answer: string;
  }[];
}

export default function Accordion({ qas }: AccordionProps) {
  return (
    <section
      id="qas"
      className="w-full min-h-screen bg-slate-100 flex justify-center items-center p-4"
    >
      <div
        className="w-full max-w-[1512px] relative bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden"
        style={{
          backgroundImage: 'url("/firecamp.jpg")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950/70 backdrop-blur-[2px]" />
        <section className="relative w-full px-8 py-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <TreePine className="absolute top-20 left-[15%] w-16 h-16 text-orange-500/10 -rotate-12" />
            <TreePine className="absolute top-40 left-[10%] w-24 h-24 text-orange-500/10 rotate-12" />
            <Moon className="absolute top-32 right-[10%] w-16 h-16 text-yellow-500/20 -rotate-12" />
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 relative">
              <span className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-300 text-sm font-medium mb-4">
                Pitanja?
              </span>
              <h2 className="text-4xl font-bold text-white mb-4">
                Odgovori na Najčešća Pitanja
              </h2>
              <p className="text-orange-100/80 max-w-xl mx-auto">
                Otkrijte više o našem ljetnom kampu i kako stvaramo nezaboravne
                avanture za vašu djecu.
              </p>
            </div>
            <div className="space-y-4">
              {qas.length > 0 ? (
                qas.map((qa) => (
                  <FAQItem
                    key={qa.id}
                    question={qa.Question}
                    answer={qa.Answer}
                  />
                ))
              ) : (
                <p className="text-white text-center">Nema FAQs trenutno.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
