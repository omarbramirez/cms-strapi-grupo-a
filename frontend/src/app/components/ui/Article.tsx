import React from 'react'
import Link from "next/link"
import { motion } from "motion/react"

import {ArticleData,ArticleComponentProps} from '@/lib/types'



const Article = ({article, index}: ArticleComponentProps) => {
  return (
<motion.a 
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: index * 0.2, duration: 0.9 }}
    viewport={{ once: true }}
href="#" className="w-full group mt-1 flex flex-col !cursor-pointer ">
  <div className="overflow-hidden rounded-2xl h-60 mb-2">
    <img
      src={article.image}
      alt=""
      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
    />
  </div>
    <span className="block mt-1 mb-3 text-dark transition-colors duration-500 group-hover:text-[var(--color-secondary)]">
      {`${article.date} ${new Date().getFullYear()}`}
    </span>
    <span className="block font-heading font-normal text-3xl text-[var(--color-dark)] transition-colors duration-500 group-hover:text-[var(--color-secondary)]">
      {article.title}
    </span>
    <p className='block mt-4 font-body font-normal text-xl text-[var(--color-dark)] '>{article.description}</p>
</motion.a>

  )
}

export default Article
