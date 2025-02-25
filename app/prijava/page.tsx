"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { User, Users, Phone, MapPin, Tent, Send, Mail } from "lucide-react";
import Image from "next/image";
import { SuccessPopup } from "@/components/SuccessPopup";

const App = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ages, setAges] = useState<string[]>([]);
  const [campTours, setCampTours] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  // Dohvaćanje podataka iz API-ja
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("🔍 Fetching API data...");

        // Dohvati uzraste
        const ageRes = await fetch(
          "https://scintillating-adaptation-production.up.railway.app/api/ages/"
        );
        const ageData = await ageRes.json();

        const fetchedAges = ageData.data.map(
          (item: { godine: string }) => item.godine
        );
        setAges(fetchedAges);

        // Dohvati kamp ture
        const tourRes = await fetch(
          "https://scintillating-adaptation-production.up.railway.app/api/tours/"
        );
        const tourData = await tourRes.json();

        const fetchedTours = tourData.data.map(
          (item: { event: string }) => item.event
        );
        setCampTours(fetchedTours);
      } catch (error) {
        console.error("Error fetching API data:", error);
      } finally {
        console.log("Finished fetching data...");
      }
    };

    fetchData();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setShowSuccess(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "Došlo je do greške prilikom slanja prijave. Molimo pokušajte ponovo."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName = (hasError: boolean) =>
    `w-full pl-10 pr-3 py-2 rounded-md ${
      hasError ? "border-2 border-red-500 bg-red-50" : ""
    }`;

  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/prijavabg.jpg"
          alt="prijava na ljetni kamp"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="relative min-h-screen w-full flex flex-col items-center justify-center p-4"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <Tent className="w-8 h-8" />
            Prijava za Ljetni Kamp
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-white mb-1">Ime *</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    {...register("firstName", {
                      required: "Ime je obavezno",
                    })}
                    className={inputClassName(!!errors.firstName)}
                  />
                  {errors.firstName && (
                    <span className="text-red-400 text-sm mt-1 block">
                      {errors.firstName.message as string}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-white mb-1">Prezime *</label>
                <input
                  {...register("lastName", {
                    required: "Prezime je obavezno",
                  })}
                  className={inputClassName(!!errors.lastName)}
                />
                {errors.lastName && (
                  <span className="text-red-400 text-sm mt-1 block">
                    {errors.lastName.message as string}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label className="block text-white mb-1">Uzrast *</label>
              <select
                {...register("age", {
                  required: "Uzrast je obavezan",
                })}
                className={`w-full px-3 py-2 rounded-md ${
                  errors.age ? "border-2 border-red-500 bg-red-50" : ""
                }`}
              >
                <option value="">Odaberite uzrast</option>
                {ages.map((age, index) => (
                  <option key={index} value={age}>
                    {age}
                  </option>
                ))}
              </select>
              {errors.age && (
                <span className="text-red-400 text-sm mt-1 block">
                  {errors.age.message as string}
                </span>
              )}
            </div>
            <div>
              <label className="block text-white mb-1">Kamp Tura *</label>
              <select
                {...register("campTour", {
                  required: "Kamp tura je obavezna",
                })}
                className={`w-full px-3 py-2 rounded-md ${
                  errors.campTour ? "border-2 border-red-500 bg-red-50" : ""
                }`}
              >
                <option value="">Odaberite turu</option>
                {campTours.map((tour, index) => (
                  <option key={index} value={tour}>
                    {tour}
                  </option>
                ))}
              </select>
              {errors.campTour && (
                <span className="text-red-400 text-sm mt-1 block">
                  {errors.campTour.message as string}
                </span>
              )}
            </div>
            <div>
              <label className="block text-white mb-1">Broj Telefona *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  {...register("phone", {
                    required: "Broj telefona je obavezan",
                  })}
                  className={inputClassName(!!errors.phone)}
                />
                {errors.phone && (
                  <span className="text-red-400 text-sm mt-1 block">
                    {errors.phone.message as string}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label className="block text-white mb-1">Email *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  {...register("email", {
                    required: "Email je obavezan",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Neispravan format email adrese",
                    },
                  })}
                  className={inputClassName(!!errors.email)}
                />
                {errors.email && (
                  <span className="text-red-400 text-sm mt-1 block">
                    {errors.email.message as string}
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-white mb-1">Ime Oca *</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    {...register("fatherName", {
                      required: "Ime oca je obavezno",
                    })}
                    className={inputClassName(!!errors.fatherName)}
                  />
                  {errors.fatherName && (
                    <span className="text-red-400 text-sm mt-1 block">
                      {errors.fatherName.message as string}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-white mb-1">Ime Majke *</label>
                <input
                  {...register("motherName", {
                    required: "Ime majke je obavezno",
                  })}
                  className={inputClassName(!!errors.motherName)}
                />
                {errors.motherName && (
                  <span className="text-red-400 text-sm mt-1 block">
                    {errors.motherName.message as string}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label className="block text-white mb-1">Adresa *</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  {...register("address", {
                    required: "Adresa je obavezna",
                  })}
                  className={inputClassName(!!errors.address)}
                />
                {errors.address && (
                  <span className="text-red-400 text-sm mt-1 block">
                    {errors.address.message as string}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label className="block text-white mb-1">
                Dodatne Informacije o Djetetu
              </label>
              <textarea
                {...register("description")}
                placeholder="Unesite važne informacije o vašem djetetu (alergije, posebne potrebe, interesi, itd.)"
                className="w-full px-3 py-2 rounded-md min-h-[120px] resize-y"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("confirmation", {
                  required: "Morate potvrditi tačnost informacija",
                })}
                className="w-4 h-4"
              />
              <label className="text-white">
                Potvrđujem Tačnost Informacija *
              </label>
              {errors.confirmation && (
                <span className="text-red-400 text-sm block">
                  {errors.confirmation.message as string}
                </span>
              )}
            </div>
            <motion.button
              whileHover={
                isValid
                  ? {
                      scale: 1.02,
                    }
                  : {}
              }
              whileTap={
                isValid
                  ? {
                      scale: 0.98,
                    }
                  : {}
              }
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full bg-green-500 text-white py-3 rounded-md font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? "Slanje..." : "Pošalji Prijavu"}
            </motion.button>
          </form>
        </div>
      </motion.div>
      <SuccessPopup
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
};

export default App;
