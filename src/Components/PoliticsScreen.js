import React from 'react';
import {View, Text, Linking, ScrollView} from 'react-native';
import * as rssParser from 'react-native-rss-parser';

class PoliticsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      feed: [],
    };
  }
  async componentDidMount() {
    fetch('http://feeds.bbci.co.uk/news/politics/rss.xml')
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((feed) => {
        console.log(feed.items[1]);
        this.setState({feed: feed.items});
        console.log(`State is: ${this.state.feed[1].title}`);
        console.log(`State is: ${this.state.feed[1].description}`);
        console.log(`Link is ${this.state.feed[1].links[0].url}`);
      });
  }
  renderNews() {
    return this.state.feed.map((item, i) => {
      return (
        <View key={i}>
          <Text style={{fontSize: 22}}>{item.title}</Text>
          <Text>{item.description}</Text>
          <Text
            style={{color: 'blue'}}
            onPress={() => Linking.openURL(item.links[0].url)}>
            Click Here!
          </Text>
        </View>
      );
    });
  }
  render() {
    return <ScrollView>{this.renderNews()}</ScrollView>;
  }
}

export default PoliticsScreen;
