import React from 'react';
import ArticlesList from '../components/articlesList';
import articleContent from './article-content';

const ArticlesListPage = () => (
    <>
    <h1>Articles</h1>
    <ArticlesList articles={articleContent} />
    </>
);

export default ArticlesListPage;