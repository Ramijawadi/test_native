import {Image, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import { styles } from './style';

const MessageList = ({item}) => {
  return (
    <TouchableOpacity style={styles.messagesContainer}>
      <Image
        style={styles.messageImg}
        source={{
          uri: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        }}
      />
      <View style={styles.messageInfo}>
        <View style={styles.date_name}>
          <Text style={styles.name}>{item.fullname}</Text>
          {/* <Text>dayjs().format()</Text> */}
        </View>
        <Text> {item.last_message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessageList;
