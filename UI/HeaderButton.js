import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import {
    HeaderButtons,
    HeaderButton,
    Item
  } from 'react-navigation-header-buttons';

import Colors from '../constants/colors'
import { Platform } from 'react-native'

const CustomHeaderButton = props => {
    return (
    <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={28}
    color = 'white'
    />
    )
}
export default CustomHeaderButton