// import {View, Text, ScrollView, Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {dashboardStyle} from './style';
// import { List } from '../../Fakedata/FakeData';
// import SVG from "../../Assets/images/undraw_medicine_b-1-ol.svg"



// var styles = StyleSheet.create({
// image: {
//   width: 200,
//   height: 220
// },

// })

// const HomeScreen = () => {
//   return (
//     <ScrollView>
     
//       <View style={dashboardStyle.header}>
//         <Text style={dashboardStyle.userName}> Mark zukerberg </Text>
//         <Image
//           size={2}
//           source={require('../../Assets/mark.jpg')}
//           style={dashboardStyle.userImage}
//         />
//       </View>

//       {/* list des activitèe*/}


// <FlatList  data={List}
// keyExtractor={item => item.id}
// horizontal={true}
// style={dashboardStyle.scrollableList}
// showsHorizontalScrollIndicator={false}
// renderItem={({item}) => {
// return(

// );
 
// }}
// />
//       {/* fin des activitèe*/}
// </ScrollView>
//   );
// };

// export default HomeScreen;


import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'red',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default App;