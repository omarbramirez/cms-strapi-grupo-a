"use client";
import { useEffect, useState } from "react"
import { getArticles } from '@/lib/get'
import React from 'react'
import Article from './ui/Article';
import {ArticleData} from '@/lib/types'
import Link from "next/link"
import { useInView } from '@/app/hooks/useInView'
import { div } from "three/tsl";
import { motion } from "framer-motion";

const Articles = () => {
  
  const [articles, setArticles] = useState<ArticleData[]>([])
  const { ref, isInView } = useInView<HTMLAnchorElement>()

  useEffect(() => {
    getArticles().then(setArticles).catch(console.error)
  }, [])

  return (
  <div className='overflow-x-hidden w-full box-border lg:w-6/8 mt-10 lg:mt-0 px-5  text-center sm:text-left'>
      <h1 className='text-2xl text-center  lg:text-left truncate'>LO MÁS RECIENTE</h1>
      {articles && (
        <Link ref={ref} href="#"  className={`
            group mt-5 flex flex-col lg:flex-row !cursor-pointer mb-12
            transform transition-all duration-700 ease-out
            ${isInView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
          `}>
  <div className="overflow-hidden w-full lg:w-1/2 rounded-2xl h-80 mb-2">
    <img
      src={articles[0]?.image}
      alt=""
      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
    />
  </div>
  <div className='w-full lg:w-1/2 p-0 lg:p-5'>
    <span className="block w-full mt-1 mb-3 text-dark transition-colors duration-500 group-hover:text-[var(--color-secondary)]">
      {`${articles[0]?.date} ${new Date().getFullYear()}`}
    </span>
    <span className="block w-full font-heading font-normal text-3xl text-[var(--color-dark)] transition-colors duration-500 group-hover:text-[var(--color-secondary)]">
      {articles[0]?.title}
    </span>
    <p className='block w-full mt-4 font-body font-normal text-xl text-[var(--color-dark)] '>{articles[0]?.description}</p>
    </div>
</Link>
      )
      }
            <h1 className='text-2xl text-center  lg:text-left truncate'>NOTICIAS</h1>
      <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6'>
      {articles && articles.map((article, index) => (
        index !== 0 && (
          <div key={index}>
<Article article={article} index={index} />
          </div>

        ) 
))
      }
      </div>
      <div className='pt-20'>
     <motion.button whileHover={{ scale: 0.95 }}            className="block px-6 py-3 mx-auto rounded-xl bg-secondary opacity-90  text-white font-semibold hover:opacity-100 transition-all duration-300 ease-in-out">
        Cargar más
      </motion.button>
      </div>
    </div>
  )
}

export default Articles
