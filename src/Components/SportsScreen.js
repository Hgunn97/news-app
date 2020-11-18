import React from 'react';
import {ScrollView} from 'react-native';

import {getData} from './NewsFunctions.js';
import {renderNews} from './NewsFunctions.js';

import {IMAGENAME2} from '../images';

class SportsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      photo: '',
    };
  }
  async componentDidMount() {
    this.getNews();
  }
  async getNews() {
    getData('http://feeds.bbci.co.uk/sport/football/rss.xml').then((data) => {
      this.setState({
        feed: data,
        photo: IMAGENAME2,
      });
    });
  }
  render() {
    return (
      <ScrollView>{renderNews(this.state.feed, this.state.photo)}</ScrollView>
    );
  }
}

export default SportsScreen;
