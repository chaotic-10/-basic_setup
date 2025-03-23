import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router';

const TabsIcon=({icon,color,name,focused})=>{
    return (
        <View>
            <Image/>
        </View>
    )
}

const Tabslayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="home" options={{
            title:'Home',
             headerShown:false,
             tabBarIcon:({color,focused})=>{

             }
        }}>

        </Tabs.Screen>

      </Tabs>
    </>
  )
}

export default Tabslayout