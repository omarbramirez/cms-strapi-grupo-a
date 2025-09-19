'use client'
import React, { useEffect, useRef, useState } from "react";
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link"
import { motion } from "framer-motion";
type PopupStatus = "banner" | "open" | "dismissed";

const PopUp: React.FC = () => {

  const [status, setStatus] = useState<PopupStatus>("dismissed");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

   useEffect(() => {
    const onScroll = () => {
      // Solo interesa actuar si aún estamos en el estado "banner"
      if (status === "banner") return;

      if (window.scrollY > window.innerHeight) {
        // Si ya hay un timeout programado, no añadimos otro
        if (timeoutRef.current) return;

        timeoutRef.current = setTimeout(() => {
          setStatus("open");
          timeoutRef.current = null; // limpiar referencia
        }, 9000);
      } else {
        // Si el usuario sube antes de que se cumpla el timeout, lo cancelamos
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      // cleanup: quitar listener y cancelar timeout pendiente
      window.removeEventListener("scroll", onScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [status]); // re-ejecuta el effect cuando cambia el estado (se limpiará el listener)

  // Cierre inmediato y definitivo por parte del usuario
  const handleClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setStatus("banner");
  };

    if (status === "banner") { return (<div className='fixed bottom-0 !z-49 w-full'>
<Link href="#" className='flex justify-center items-center gradient-background  uppercase font-bold font-heading !text-light py-2'>Descargar Revista América
</Link>
  </div>)}

if (status === "open") { 
  return (

    <div className={`fixed inset-0 m-auto w-[80vw] max-w-[600px] sm:w-[50vw] h-[80vh] sm:h-[60vh] bg-white z-50 shadow-xl/50 flex flex-col sm:flex-row justify-center items-start rounded-2xl overflow-hidden`}>
               <X  onClick={handleClose} aria-label="Cerrar" className="absolute top-3 right-3 w-[2em] h-[2em] rounded-md  cursor-pointer text-dark bg-white z-51  block sm:hidden"
/>

        <div className="relative w-full sm:w-1/2 h-1/2 sm:h-full">

          <Image
            src={`/mag-cover.png`}
            fill
            alt=""
            className=" object-cover object-top"
          />
        </div>
        <section className="relative flex flex-col justify-center items-start w-full sm:w-1/2 h-1/2 sm:h-auto p-5 text-center sm:text-left">
          <X onClick={handleClose} aria-label="Cerrar"  className=' shrink-0 w-[2em] h-[2em] !cursor-pointer self-end mb-3 hidden sm:block' />
          <span className="block font-heading font-normal text-3xl text-[var(--color-dark)] transition-colors duration-500 group-hover:text-[var(--color-secondary)]">Descargar Revista América</span>
           <p className='block mt-4 font-body font-normal text-xl text-[var(--color-dark)] '>El Grupo América se complace en poner a su disposición su Revista América desde el primer número de agosto de 1925.

</p>
                    <motion.button whileHover={{ scale: 0.95 }} 
            type="submit"
            className="px-6 mx-auto sm:mx-0 py-3 bg-primary opacity-90  text-white font-semibold hover:opacity-100 transition-all duration-300 ease-in-out mt-3 rounded-xl"
          >
            Descargar
          </motion.button>
        </section>
    </div>
  )}
  }

export default PopUp
