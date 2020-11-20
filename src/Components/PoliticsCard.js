import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {margin} from '../res/styles/base.js';
import {button} from '../res/styles/cards.js';
import {useNavigation} from '@react-navigation/native';

import {IMAGENAME} from '../res/images';

function PoliticsCard() {
  const navigation = useNavigation();
  return (
    <Card style={{height: styles.height}}>
      <Card.Title>Politics News</Card.Title>
      <Card.Divider />
      {/* <Image source={IMAGENAME} style={{height: 200, width: 350}} /> */}
      <Text style={{marginBottom: margin.md}}>
        Home of all things politics. Mainly focusing on the wonderful world of
        UK politics. #BrexitMeansBrexit
      </Text>
      <Button
        buttonStyle={button}
        title="VIEW NOW"
        onPress={() => navigation.navigate('Politics')}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  height: 400,
});

export default PoliticsCard;
