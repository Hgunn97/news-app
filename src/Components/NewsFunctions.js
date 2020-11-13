import React from 'react';
import * as rssParser from 'react-native-rss-parser';
import {View, Text, Linking} from 'react-native';
import {Button} from 'react-native-elements';
import {Card, CardItem, Body, Content} from 'native-base';
import {colours, fontSize, margin} from '../styles/base';
import {button} from '../styles/cards';

export async function getData(url) {
  let response = await fetch(url);
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
        <Content style={{marginHorizontal: margin.sm}}>
          <Card>
            <CardItem header>
              <Text style={{fontSize: fontSize.md}}>{item.title}</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{item.description}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Button
                buttonStyle={button}
                title="View Story"
                onPress={() => Linking.openURL(item.id)}
              />
            </CardItem>
          </Card>
        </Content>
      </View>
    );
  });
}
