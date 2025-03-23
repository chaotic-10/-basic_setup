import { View, Text } from 'react-native'
import React from 'react'

const getToken = () => {

  const token= localStorage.getItem('loginToken');
  return (
    {token}
  )
}

export default getToken