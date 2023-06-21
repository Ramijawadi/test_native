import {Text, FlatList} from 'react-native';
import React from 'react';
import {chats} from '../../Fakedata/FakeChats';
import MessageList from '../MessageList/index';
import { styles } from './style';

const Messages = () => {
  return (
    <FlatList
      data={chats}
      keyExtractor={item => item.id}
      style={styles.root}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return <MessageList item={item} />;
      }}
    />
  );
};

export default Messages;
