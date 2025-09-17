import { getArticles } from '@/lib/get'
import React from 'react'
import Article from './ui/Article';
import {ArticleData} from '@/lib/types'

const Articles = async() => {
  
    let articles: ArticleData[] = []

    try{
      articles = await getArticles();
    } catch (error) {
    console.error('Error al obtener eventos:', error);
  }



  return (
  <div className=' w-full box-border lg:w-6/8 mt-10 lg:mt-0 px-5'>
      <h1 className='text-2xl text-center  lg:text-left truncate'>NOTICIAS</h1>
      <div className='mt-5'>
      {articles && articles.map((article, index) => (
        <Article article={article} key={index}/>
      ))

      }
      </div>
    </div>
  )
}

export default Articles
