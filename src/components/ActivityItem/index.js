import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SVG from '../../Assets/images/medecin.svg';
import {styles} from './style';
 const ActivityItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.scrollableItem}>
      <SVG width={60} height={60} />
      <Text style={styles.nameText}>{item.Name}</Text>
      <Text style={styles.activityText}>{item.activity}</Text>
    </TouchableOpacity>
  );
};

export default ActivityItem;
