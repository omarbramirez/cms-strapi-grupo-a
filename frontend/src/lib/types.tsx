
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

export interface StrapiEventCategory {
    id: number;
    documentId: string;
    name: string;
}

export interface StrapiEvent {
    id: number;
    documentId: string;
    datetime: string;
    title: string;
    slug: string;
    category: StrapiEventCategory;
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

export interface StrapiArticle {
id: number;
documentId: string;
title: string;
slug: string;
description: string;
createdAt: string;
cover: {
url: string;
};
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
