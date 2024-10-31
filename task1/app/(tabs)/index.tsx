import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      {/* Top Red Box */}
      <View style={styles.topRedBox}>
        <Text style={styles.text}>RÖD</Text>
      </View>

      {/* Middle Row with Green and Yellow Boxes */}
      <View style={styles.middleRow}>
        <View style={styles.greenBox}>
          <Text style={styles.text}>GRÖN</Text>
        </View>
        <View style={styles.yellowBox} />
      </View>

      {/* Lower Row with Small Red and Black Boxes */}
      <View style={styles.lowerRow}>
        <View style={styles.smallRedBox} />
        <View style={styles.smallBlackBox} />
      </View>

      {/* Large Blue Box */}
      <View style={styles.largeBlueBox} />

      {/* Bottom Orange Box */}
      <View style={styles.bottomOrangeBox}>
        <Text style={styles.text}>ORANGE</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB', // Light blue border color
  },

  topRedBox: {
    flex: 2,
    backgroundColor: '#FF6347', // Red color
    justifyContent: 'center',
    alignItems: 'center',
  },

  middleRow: {
    flexDirection: 'row',
    flex: 1,
  },

  greenBox: {
    flex: 1,
    backgroundColor: '#32CD32', // Green color
    justifyContent: 'center',
    alignItems: 'center',
  },

  yellowBox: {
    flex: 1,
    backgroundColor: '#FFD700', // Yellow color
  },

  lowerRow: {
    flexDirection: 'row',
    flex: 0.5,
  },

  smallRedBox: {
    flex: 3,
    backgroundColor: '#FF6347', // Red color
  },

  smallBlackBox: {
    flex: 1,
    backgroundColor: '#000', // Black color
  },

  largeBlueBox: {
    flex: 5,
    backgroundColor: '#87CEEB', // Large blue box color
  },

  bottomOrangeBox: {
    flex: 0.5,
    backgroundColor: '#FFA500', // Orange color
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontWeight: 'bold',
    color: '#000',
  },
});

 
  
 

