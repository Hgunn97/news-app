import React from 'react';
import * as rssParser from 'react-native-rss-parser';
import {View, Text, Linking} from 'react-native';

export async function getData(url) {
  let response = await fetch(url);
  console.log(url);
  if (response.ok) {
    let responseData = await response.text();
    let feed = await rssParser.parse(responseData);
    return feed.items;
  } else {
    console.error(`Error: ${response.status}`);
  }
}

export function renderNews(feed) {
  return feed.map((item, i) => {
    return (
      <View key={i}>
        <Text style={{fontSize: 22}}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text style={{color: 'blue'}} onPress={() => Linking.openURL(item.id)}>
          Click Here!
        </Text>
      </View>
    );
  });
}
