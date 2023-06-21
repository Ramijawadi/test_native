import { View, Text } from 'react-native'
import React from 'react'
import Acceuil from './src/components/Acceuil'
import Routes from './src/Navigation/Routes/Routes'

const App = () => {


  return (
    <View style={{flex: 1}}>
      <Routes />
  {/* <Acceuil /> */}
    </View>
  )
}

export default App;