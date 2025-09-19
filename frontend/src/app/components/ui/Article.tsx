import React from 'react'
import Link from "next/link"

import {ArticleData,ArticleComponentProps} from '@/lib/types'



const Article = ({article}: ArticleComponentProps) => {
  return (
<Link href="#" className="w-full group mt-1 flex flex-col !cursor-pointer ">
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
</Link>

  )
}

export default Article
