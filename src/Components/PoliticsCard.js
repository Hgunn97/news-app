import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {margin} from '../styles/base.js';
import {button} from '../styles/cards.js';
import {useNavigation} from '@react-navigation/native';

function PoliticsCard() {
  const navigation = useNavigation();
  return (
    <Card style={{height: styles.height}}>
      <Card.Title>Politics News</Card.Title>
      <Card.Divider />
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
