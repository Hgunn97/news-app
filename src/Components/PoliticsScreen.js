import React from 'react';
import {ScrollView} from 'react-native';

import {getData} from './NewsFunctions';
import {renderNews} from './NewsFunctions';

import {IMAGENAME} from '../images';

class PoliticsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      feed: [],
      photo: '',
    };
  }
  async componentDidMount() {
    this.getNews();
  }
  getNews() {
    getData('http://feeds.bbci.co.uk/news/politics/rss.xml').then((data) => {
      this.setState({
        feed: data,
        photo: IMAGENAME,
      });
    });
  }
  render() {
    return (
      <ScrollView>{renderNews(this.state.feed, this.state.photo)}</ScrollView>
    );
  }
}

export default PoliticsScreen;
