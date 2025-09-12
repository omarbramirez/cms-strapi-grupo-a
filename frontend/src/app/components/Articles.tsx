import { getArticles } from '@/lib/get'
import React from 'react'
import Link from "next/link"
import Article from './ui/Article';
const Articles = async() => {
    const articles = await getArticles() 
  return (
  <div className=' w-full box-border lg:w-4/6 mt-10 lg:mt-0'>
      <h1 className='text-2xl text-center  lg:text-left truncate'>NOTICIAS</h1>
      <div className='mt-5 px-5'>
      {articles.map((article, index) => (
        <Article article={article} key={index}/>
      ))

      }
      </div>
    </div>
  )
}

export default Articles
