import React from 'react';
import {Text} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {margin} from '../styles/base.js';
import {button} from '../styles/cards.js';
import {useNavigation} from '@react-navigation/native';

function SportsCard() {
  const navigation = useNavigation();
  return (
    <Card>
      <Card.Title>Sports News</Card.Title>
      <Card.Divider />
      <Text style={{marginBottom: margin.md}}>
        This contains sports news. Will mainly contain football news as this has
        to be the best sport. #COYG
      </Text>
      <Button
        buttonStyle={button}
        title="VIEW NOW"
        onPress={() => navigation.navigate('Sports')}
      />
    </Card>
  );
}

export default SportsCard;
