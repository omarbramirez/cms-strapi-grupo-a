import { getArticles } from '@/lib/get'
import React from 'react'
import Link from "next/link"

const Articles = async() => {
    const articles = await getArticles() 
  return (
    <div>
      <h1>ARTICLES</h1>
      {articles.map((article, index)=>(
        <Link href={`/articles/${article.slug}`} key={index}>
            <img src={article.image} alt={article.name} />
            <h1>{article.title}</h1>
            <span>{article.description}</span>
        </Link>
      ))

      }
    </div>
  )
}

export default Articles
