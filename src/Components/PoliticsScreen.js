import React from 'react';
import {ScrollView} from 'react-native';

import {getData} from './NewsFunctions';
import {renderNews} from './NewsFunctions';

import {IMAGENAME} from '../res/images';
import {covidImg} from '../res/images';
import {boris1} from '../res/images';

class PoliticsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      feed: [],
      photo: [],
    };
  }
  componentDidMount() {
    this.getNews();
  }
  async getNews() {
    let data = await getData('http://feeds.bbci.co.uk/news/politics/rss.xml');
    let feedData = await this.getPhoto(data);
    this.setState({
      feed: feedData,
    });
  }
  getPhoto(data) {
    data.map((item, i) => {
      let covidTxt = ['Covid', 'Coronavirus'];
      let covidTest = covidTxt.some((el) => item.title.includes(el));
      if (covidTest === true) {
        let indexN = Math.floor(Math.random() * covidImg.length);
        item.photo = covidImg[indexN];
      } else if (item.title.includes('Boris')) {
        item.photo = boris1;
      } else {
        item.photo = IMAGENAME;
      }
    });
    return data;
  }
  render() {
    return <ScrollView>{renderNews(this.state.feed)}</ScrollView>;
  }
}

export default PoliticsScreen;
