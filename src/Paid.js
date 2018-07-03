import React, {Component} from 'react';
import Clickbait from './Clickbait'
import Advert from './Advert'

class Paid extends Component {
  render() {
    return (
        <div>
            <Advert />
            <Clickbait />
        </div>

    );
  }
}

export default Paid