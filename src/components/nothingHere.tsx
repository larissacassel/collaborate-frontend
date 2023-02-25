import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

import nothinHere from '../assets/nothing_here_animation.json';

export default function NothingHere() {
  return (
    <View style={styles.container}>
      <LottieView
        source={nothinHere}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation: {
    backgroundColor: "transparent",
    width: 300,
    height: 300
  }
});