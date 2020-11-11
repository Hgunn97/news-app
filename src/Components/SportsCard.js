import React from 'react';
import {Text} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {margin} from '../styles/base.js';
import {button} from '../styles/cards.js';

function SportsCard() {
  return (
    <Card>
      <Card.Title>Sports News</Card.Title>
      <Card.Divider />
      <Text style={{marginBottom: margin.md}}>
        This contains sports news. Will mainly contain football news as this has
        to be the best sport. #COYG
      </Text>
      <Button buttonStyle={button} title="VIEW NOW" />
    </Card>
  );
}

export default SportsCard;
