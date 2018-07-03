import React, {Component} from 'react';
import ArticleBody from './ArticleBody';
import ArticleTitle from './ArticleTitle';
import ArticleLinks from './ArticleLinks';

class ArticleOverall extends Component {
  render() {
    return (
      <div className="large-8 medium-12 columns article">
        <ArticleTitle />
        <ArticleBody />
        <ArticleLinks />
      </div>
    );
  }
}

export default ArticleOverall