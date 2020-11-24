import React from 'react';
import {ScrollView} from 'react-native';

import {getData} from './NewsFunctions';
import {renderNews} from './NewsFunctions';

import {brexitImg} from '../res/images';
import {covidImg} from '../res/images';
import {borisImg} from '../res/images';
import {starmerImg} from '../res/images';
import {toryImg} from '../res/images';
import {labourImg} from '../res/images';
import {otherImg} from '../res/images';


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
      let indexN = Math.floor(Math.random() * 5);
      let covidTxt = ['Covid', 'Coronavirus'];
      let covidTest = covidTxt.some((el) => item.title.includes(el));
      if (covidTest === true) {
        item.photo = covidImg[indexN];
      } else if (item.title.includes('Boris')) {
        item.photo = borisImg[indexN];
      } else if (item.title.includes('Brexit')) {
        item.photo = brexitImg[indexN];
      } else if (item.title.includes('Starmer')) {
        item.photo = starmerImg[indexN];
      } else if (item.title.includes('Tory')) {
        item.photo = toryImg[indexN];
      } else if (item.title.includes('Labour')) {
        item.photo = labourImg[indexN];
      } else {
        item.photo = otherImg;
      }
    });
    return data;
  }
  render() {
    return <ScrollView>{renderNews(this.state.feed)}</ScrollView>;
  }
}

export default PoliticsScreen;
