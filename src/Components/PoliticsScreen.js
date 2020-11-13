import React from 'react';
import {ScrollView} from 'react-native';

import {getData} from './NewsFunctions';
import {renderNews} from './NewsFunctions';

class PoliticsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      feed: [],
    };
  }
  async componentDidMount() {
    this.getNews();
  }
  getNews() {
    getData('http://feeds.bbci.co.uk/news/politics/rss.xml').then((data) => {
      this.setState({
        feed: data,
      });
    });
  }
  render() {
    return <ScrollView>{renderNews(this.state.feed)}</ScrollView>;
  }
}

export default PoliticsScreen;
