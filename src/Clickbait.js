import React, {Component} from 'react';

class Clickbait extends Component {
  
  constructor(){
      super();
      this.state={
         
         articles: [{className:"small-6 medium-3 columns other-article", src:"https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif", alt:"orc", text:"Single orcs in Indianapolis"},
         {className:"small-6 medium-3 columns other-article", src:"https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg", alt:"mountain", 
         text:"You won't believe what's under this mountain"}, 
         {className:"small-6 medium-3 columns other-article", src:"http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg", alt:"gold", text:"Mine 20% more gold with One Weird Trick"},
         {className:"small-6 medium-3 columns other-article", src:"http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg", alt:"hobbit", text:"Surprise for Indiana Hobbits born before 1999"}]
        
      }
  }
  render() {
    return (
        <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>


            {this.state.articles.map( article => (
              <div className={article.className}>
              <a href="#">
                <img src={article.src} alt={article.alt} />
                <p>{article.text}</p>
              </a>  
              </div>
              )
            )};
           
           
        </div>
    );
  }
}

export default Clickbait