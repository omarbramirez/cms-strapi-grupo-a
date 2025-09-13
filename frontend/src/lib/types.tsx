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
