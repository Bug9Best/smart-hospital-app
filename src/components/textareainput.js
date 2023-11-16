import React from 'react';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';
import { Entypo as Icon } from '@expo/vector-icons';

export default function Textareainput({ icon, error, touched, ...otherProps }) {
  const validationColor = !touched ? '#223e4b' : error ? '#FF5A5F' : '#223e4b';
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        borderRadius: 8,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
      }}
    >
      <View style={{ padding: 8 }}>
        <Icon name={icon} color={validationColor} size={16} />
      </View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid='transparent'
          placeholderTextColor={validationColor}
          {...otherProps}
        />
      </View>
    </View>
  );
}