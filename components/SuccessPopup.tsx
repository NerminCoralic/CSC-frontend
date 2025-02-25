import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tent, Trees, Sun, X } from "lucide-react";
interface SuccessPopupProps {
  isOpen: boolean;
  onClose?: () => void;
}
export const SuccessPopup = ({ isOpen, onClose }: SuccessPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
          }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <motion.div
            initial={{
              y: -50,
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: 50,
            }}
            className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center relative"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
            <div className="flex justify-center space-x-4 mb-6">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sun className="w-8 h-8 text-yellow-500" />
              </motion.div>
              <Tent className="w-8 h-8 text-green-600" />
              <Trees className="w-8 h-8 text-green-700" />
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Uspješno ste prijavili!
            </h2>
            <p className="text-gray-600">
              Hvala vam na prijavi. Uskoro ćemo vas kontaktirati!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
