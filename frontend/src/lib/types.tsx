
export interface StrapiData<T> {
  data: {
    id: number;
    attributes: T;
  };
}


export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiEventCategoryAttributes {
  name: string;
}

export interface StrapiEvent {
  id: number;
  attributes: {
    datetime: string;
    title: string;
    slug: string;
    // Usa el nuevo tipo genérico para la categoría
    category: StrapiData<StrapiEventCategoryAttributes>;
  };
}

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

export interface StrapiCoverAttributes {
  url: string;
}

export interface StrapiArticle {
id: number;
documentId: string;
attributes:{
title: string;
slug: string;
description: string;
createdAt: string;
imageurl: string;
}
}

export interface ArticleData { 
  title: string;
  slug: string;
  description: string;
  image: string;
  date: string;
}

export interface ArticleComponentProps {
  article: ArticleData;
  key: number;
}

