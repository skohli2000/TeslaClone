import React, { Component } from 'react'
import {  Text, View, FlatList, Dimensions } from 'react-native'
import styles from './styles'
import cars from './cars'
import CarItem from '../CarItem'

const CarsList = (props) => {
  // console.log("Console Log from CarItem!!")
  return (
    // <View> 
    //   <Text> This is not just Dev. </Text> 
    // </View>
    <View style={styles.container} >
      <FlatList 
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      /> 
    </View>
  );
};

export default CarsList;
