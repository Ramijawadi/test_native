import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import SVG from "../../Assets/images/undraw_medicine_b-1-ol.svg"


const ActivityItem = () => {
  return (
    <TouchableOpacity style={dashboardStyle.scrollableItem}>
    <SVG width={60} height={60} />
  <Text  style={dashboardStyle.nameText}>{item.Name}</Text>
  <Text style={dashboardStyle.activityText}>{item.activity}</Text>
</TouchableOpacity>
  )
}

export default ActivityItem