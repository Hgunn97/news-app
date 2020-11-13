import React from 'react';
import {ScrollView} from 'react-native';

import {getData} from './NewsFunctions.js';
import {renderNews} from './NewsFunctions.js';

class SportsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
    };
  }
  async componentDidMount() {
    this.getNews();
  }
  async getNews() {
    getData('http://feeds.bbci.co.uk/sport/football/rss.xml').then((data) => {
      this.setState({
        feed: data,
      });
    });
  }
  render() {
    return <ScrollView>{renderNews(this.state.feed)}</ScrollView>;
  }
}

export default SportsScreen;
