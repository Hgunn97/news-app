import React from 'react';
import * as rssParser from 'react-native-rss-parser';
import {View, Text, Image, Linking} from 'react-native';
import {Button} from 'react-native-elements';
import {
  Card,
  CardItem,
  Body,
  Content,
  Thumbnail,
  Icon,
  Left,
  Right,
} from 'native-base';
import {colours, fontSize, margin} from '../res/styles/base';
import {button} from '../res/styles/cards';

import {IMAGENAME} from '../res/images';

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
            <CardItem>
              <Left>
                <Body>
                  <Text style={{fontSize: fontSize.md}}>{item.title}</Text>
                  <Text note>{item.description}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={item.photo}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button
                  buttonStyle={button}
                  title="View Story"
                  onPress={() => Linking.openURL(item.id)}
                />
              </Left>
              <Right>
                <Text>{item.published}</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </View>
    );
  });
}
