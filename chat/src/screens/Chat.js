import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import moment from 'moment';
import Input from '../components/Input';
import firebase from '../utils/firebase';
import 'firebase/database';

// YellowBox.ignoreWarnings(['Setting a timer']);
LogBox.ignoreLogs(['Setting a timer']);

export default function Chat(props) {
  const { userName } = props;

  const sendMessage = (message) => {
    const time = moment().format('hh:mm a');
    firebase.database().ref('general').push({
      userName: userName,
      text: message,
      time: time,
    });
  };

  return (
    <>
      <View style={styles.content}>
        <Text>CHAT</Text>
        <Input sendMessage={sendMessage} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
