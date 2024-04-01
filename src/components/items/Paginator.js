import React from "react";
import {View, StyleSheet, Animated, useWindowDimensions} from "react-native";

const Peginator = ({data, scrollX}) => {

  const {width} = useWindowDimensions();


  return(
    <View style={darkStyles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp'
        })

        return <Animated.View style={[darkStyles.dot, {width: dotWidth, opacity}]} key={i.toString()}/>;
      })}
    </View>
  )
}

const darkStyles = StyleSheet.create({
  container:{
    flexDirection:'row',
    height:64
  },
  dot:{
    height:10,
    borderRadius:5,
    backgroundColor:'white',
    marginHorizontal:8
  }
})

export default Peginator;
