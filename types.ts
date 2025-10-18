import React from 'react';

export interface Plan {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  // FIX: React.ReactNode requires importing the React module.
  content: React.ReactNode;
  imageAlt: string;
}