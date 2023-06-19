import {StyleSheet} from 'react-native';
import {COLORS, PADDING} from '../../outils/Constantes';

export const dashboardStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: PADDING.horisontal,
    paddingVertical: PADDING.vertical,
    backgroundColor: 'white',
  },

  userImage: {
    width: 110,
    height: 100,
    borderRadius: 50 / 2,
  },

  userName: {
    fontSize: 25,
  },

  /*style flat list*/
  scrollableList: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },

  title: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },

  title_space_between: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  titleBold: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  image: {
    height: 90,
    width: 130,
  },

  link: {
    color: COLORS.main,
  },

  doctorsContainer: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
  doctorCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 5,
    padding: 10,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    marginBottom:20,
    borderRadius:5, 
   },

   doctorImg : {

width:80,
height:80,
borderRadius:80/2,
marginRight:15,


   },
   doctorInfo :{

flexDirection:'column',
   },

doctorName:{
fontWeight:'bold',
fontSize:16,
color:'#4CB9E8',
marginBottom:15,
},

doctorSpec:{
backgroundColor:'#4CB9E8',
padding:9,
borderRadius:15,
fontSize:14,
color:'white',
paddingHorizontal:PADDING.horizontal,




}

});
