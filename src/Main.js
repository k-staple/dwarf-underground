import React, {Component} from 'react';
import Clickbait from './Clickbait'
import Advert from './Advert'
import ArticleBody from './ArticleBody';
import ArticleTitle from './ArticleTitle';
import ArticleLinks from './ArticleLinks';

class Main extends Component {
  render() {
    return (
    <main className="expanded row">
      <div className="large-8 medium-12 columns article">
        <ArticleTitle />
        <ArticleBody />
        <ArticleLinks />
      </div>
      <Advert />

      <Clickbait />
    </main>
    );
  }
}

export default Main