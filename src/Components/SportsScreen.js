import React from 'react';
import {ScrollView} from 'react-native';

import {getData} from './NewsFunctions.js';
import {renderNews} from './NewsFunctions.js';

import {IMAGENAME2} from '../res/images';

class SportsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
    };
  }
  componentDidMount() {
    this.getNews();
  }
  async getNews() {
    let data = await getData('http://feeds.bbci.co.uk/sport/football/rss.xml')
    let feedData = await this.getPhoto(data);
    this.setState({
      feed: feedData,
    });
  }
  getPhoto(data) {
    data.map((item, i) => {
      item.photo = IMAGENAME2;
    });
    return data;
  }
  render() {
    return <ScrollView>{renderNews(this.state.feed)}</ScrollView>;
  }
}

export default SportsScreen;
