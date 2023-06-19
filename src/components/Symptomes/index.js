import {View, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import {SymptomesStyle} from './style';

const SymptomItem = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={SymptomesStyle.item}>
        <Image
          style={SymptomesStyle.image}
          source={require(`./../../Assets/img.jpg`)}
        />
        <Text>{item.libelle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SymptomItem;
