import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {dashboardStyle} from './style';
import {List} from '../../Fakedata/FakeData';

import ActivityItem from '../ActivityItem';
import SymptomItem from '../Symptomes';
import {Symptomes} from '../../Fakedata/FakeSymtome';
import { Docteurs } from '../../Fakedata/FakeDocteur';

var styles = StyleSheet.create({
  image: {
    width: 200,
    height: 220,
  },
});

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={dashboardStyle.header}>
        <Text style={dashboardStyle.userName}> Mark zukerberg </Text>
        <Image
          size={2}
          source={require('../../Assets/mark.jpg')}
          style={dashboardStyle.userImage}
        />
      </View>

      {/* list des activitèe*/}

      <FlatList
        data={List}
        keyExtractor={item => item.id}
        horizontal={true}
        style={dashboardStyle.scrollableList}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return <ActivityItem item={item} />;
        }}
      />
      {/* fin des activitèe*/}

      {/* list symptomes */}

      <View style={dashboardStyle.title}>
        <Text style={dashboardStyle.titleBold}>
          {' '}
          Quel symptomes avez-vous ?{' '}
        </Text>
      </View>

      <FlatList
        data={Symptomes}
        keyExtractor={item => item.id}
        horizontal={true}
        style={dashboardStyle.scrollableList}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return <SymptomItem item={item} />;
        }}
      />

      {/* fin liste des symptomes */}

      {/* debut liste des docteurs */}

      <View style={dashboardStyle.title_space_between}>
        <Text style={dashboardStyle.titleBold}>Nos docteurs</Text>

        <TouchableOpacity>



          <Text style={dashboardStyle.link}> Afficher tous </Text>
        </TouchableOpacity>
      </View>


<View style={dashboardStyle.doctorsContainer}> 

{Docteurs.splice(0, 3).map((doctor, index)=> {

return(
<TouchableOpacity  key={doctor.id} style={dashboardStyle.doctorCard} >
<Image source={{uri: `${doctor.img}`}} style={dashboardStyle.doctorImg} />

<View style={dashboardStyle.doctorInfo}>
<Text style={dashboardStyle.doctorName} >{doctor.fullname}</Text>  
<Text style={dashboardStyle.doctorSpec}>{doctor.speciality}</Text>   
</View>



</TouchableOpacity>

)

})


}


</View>
      {/* fin liste des docteurs */}
    </ScrollView>
  );
};

export default HomeScreen;

// import React from 'react';
// import {View, Text, Image, ScrollView, TextInput} from 'react-native';

// const App = () => {
//   return (
//     <ScrollView>
//       /* Debut de header*/
//       <View style={styles.header}>
//         <Text style={styles.UserName} >Rami jawadi</Text>
//         <Image
//           source={{
//             uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
//           }}
//           style={{width: 200, height: 200}}
//         />
//       </View>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'red',
//           borderWidth: 1,
//         }}
//         defaultValue="You can type in me"
//       />
//     </ScrollView>
//   );
// };

// export default App;
