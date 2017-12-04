import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

function Button ({iconName, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} >
      <FontAwesome name={iconName} size={100} color='white' />
    </TouchableOpacity>
  )
}

export default Button