import React, { useEffect, useRef, useState } from "react";
import { View, FlatList, Animated, Dimensions } from "react-native";
import Onboarding from "../../components/layouts/Onboarding";
import Peginator from "../../components/items/Paginator";
import data from "../../data/OnboardingData";
import auth from "@react-native-firebase/auth";
import style from "./styles";
import MainButton from "../../components/buttons/MainButton";




const Welcome = ({navigation}) => {

  const styles = style();
  const SCREEN_HEIGHT = Dimensions.get("window").height;

  const slidesRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [btnText, setBtnText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    checkSaveUser();
    if (currentIndex < data.length - 1){
      setBtnText("Next")
    }
    else {
      setBtnText("Get Started")
    }
  }, [currentIndex]);

  const checkSaveUser = () => {
    auth().onAuthStateChanged(user => {
      if (user){
        navigation.navigate("BottomNavigation");
        console.log(user.email);
      }
    })
  }

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index)
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;

  const scrollTo = () => {
    if (currentIndex < data.length - 1)
    {
      slidesRef.current.scrollToIndex({index: currentIndex + 1})
    }
    else
    {
      navigation.navigate("Login")
    }
  }


  return(
    <View style={styles.container}>
      <View style={{flex:3}}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{nativeEvent: {contentOffset:{x:scrollX}}}],{
            useNativeDriver:false
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
          renderItem={({item}) =>
            <Onboarding
              image={item.image}
              title={item.title}
              description={item.description}
            />
          }/>
      </View>
      <View style={{position: "absolute", top: "70%"}}>
        <Peginator data={data} scrollX={scrollX}/>
      </View>
      <View style={{marginVertical: SCREEN_HEIGHT * 0.05}}>
        <MainButton
          text={btnText}
          onPress={() => scrollTo()}/>
      </View>
    </View>
  )
}

export default Welcome;
