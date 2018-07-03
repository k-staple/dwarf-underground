import React, {Component} from 'react';

class ArticleLinks extends Component {
  render() {
    return (
        <div className="article-links">
          <a className="article-link" href="#">
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
          </a>
          <a className="article-link" href="#">
            <i className="fa fa-share"></i>
            <span className="article-link-text">Share Post</span>
          </a>
          <form onSubmit={this.handleSubmit}>
          <label>
            Your thoughts:
           <input type="text"  /> {/*value={this.state.value} onChange={this.handleChange}} */}
          </label>
          <input type="submit" value="Submit" />
      </form>
        </div>
    );
  }
}

export default ArticleLinks