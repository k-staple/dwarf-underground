import React, {Component} from 'react';
import ArticleOverall from './ArticleOverall';
import Paid from './Paid';

class Main extends Component {
  render() {
    return (
    <main className="expanded row">
      <ArticleOverall />
      <Paid />
    </main>
    );
  }
}

export default Main