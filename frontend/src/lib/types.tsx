export interface EventData {
date: string; 
time: string;
title: string;
slug: string;
categoryName: string; 
}

export interface EventComponentProps {
  event: EventData;
  key: number;
}


export interface ArticleData {
  id: string; 
  title: string;
  date: string;
  image: string; 
}

export interface ArticleComponentProps {
  article: ArticleData;
  key: number;
}
