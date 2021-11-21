import React, { Component } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const StyledButton = (props) => {
  
  // original standard way of declaring variables and assigning values from props
  // const type = props.type;
  // const content = props.content; 
  // const onPress = props.onPress;

  // new way of declaring variables and assigning values from props 
  const { type, content, onPress }  = props; 


  // const backgroundColor = type === 'primary' ? 'black': 'white';
  // const textColor = type === 'primary' ? 'white': 'black';
 
  const backgroundColor = type === 'primary' ? '#171A20CC': '#FFFFFFA6';
  const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

  return (
    <View style={styles.container}>
      <Pressable 
        style={[styles.button, 
          {backgroundColor: backgroundColor}]}
        // onPress={() => { console.warn( "Hey Surjeet there!") }}   // without prop
        //  onPress={ onPress }  // this syntax also works 
        onPress = { () => onPress() }
      > 
        <Text style={[styles.text, {color: textColor}]}> {content}}</Text>   
      </Pressable>
    </View>
  )

}

export default StyledButton;

