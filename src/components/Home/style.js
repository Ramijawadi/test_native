import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/Constantes";



export const dashboardStyle = StyleSheet.create({

header:{

flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
paddingHorizontal:PADDING.horisontal,
paddingVertical:PADDING.vertical,
backgroundColor:'white',
},

userImage:{

    width: 110,
     height: 100,
     borderRadius:50 / 2,
},


userName:{
fontSize:25,
},


/*style flat list*/ 
scrollableList :{

    paddingHorizontal:PADDING.horisontal,
    paddingVertical:PADDING.vertical,
},

scrollableItem :{
      flexDirection:"column",
    paddingHorizontal:15,
    paddingVertical:15,
    marginRight :15,
    backgroundColor:'white',
    elevation:1,
},

nameText:{
fontWeight:500,
fontSize: 20


},
activityText : {
    fontWeight:400,
marginTop:3,
fontSize:15

}


});