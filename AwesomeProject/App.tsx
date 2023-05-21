import React, { useState } from 'react';
import { View, Animated, Button, SafeAreaView } from 'react-native';

const RandomWidthAnimation = () => {
  const [animation] = useState(new Animated.Value(20));
  const [animation1] = useState(new Animated.Value(0));
  const [animation2] = useState(new Animated.Value(0));

  const handleButtonPress1 = () => {
    const randomWidth = Math.floor(Math.random() * 200) + 100;
    const randomWidth2 = Math.floor(Math.random() * 200) + 100;
    Animated.parallel([
      Animated.timing(animation1, {
        toValue: randomWidth,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animation2, {
        toValue: randomWidth2,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const handleButtonPress = () => {
    const randomWidth = Math.floor(Math.random() * 200) + 100;
    Animated.timing(animation, {
      toValue: randomWidth,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView>
      <Animated.View style={{ width: animation, height: 50, backgroundColor: 'blue', borderTopEndRadius: 10, borderBottomEndRadius: 10 }} />
      <Button title="Animate Width" onPress={handleButtonPress} />
      <View>
        <Button title="Move Boxes" onPress={handleButtonPress1} />
        <Animated.View
          style={{
            transform: [{ translateX: animation1 }],
            width: 100,
            height: 100,
            backgroundColor: 'red',
          }}
        />
        <Animated.View
          style={{
            transform: [{ translateX: animation2 }],
            width: 100,
            height: 100,
            backgroundColor: 'blue',
          }}
        />
      </View>

    </SafeAreaView>
  );
};

export default RandomWidthAnimation;
