import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Alert,
  Pressable,
  Text,
  NativeEventEmitter,
} from 'react-native';
import { Path, Svg } from 'react-native-svg';
import ViewShot, { captureRef } from 'react-native-view-shot';
import CustomButton from '../../components/CustomButton/CustomButton';
const { height, width } = Dimensions.get('window');

export default function App() {
  const [currentPath, setCurrentPath] = useState([]);
  const [paths, setPaths] = useState([]);
  const [lien, setLien] = useState('');

  // ref for snapshot
  const ref = useRef(null);

  const onTouchMove = (event) => {
    const newPath = [...currentPath];

    // get current user touches position
    const locationX = event.nativeEvent.locationX;
    const locationY = event.nativeEvent.locationY;

    // create new point
    const newPoint = `${
      newPath.length === 0 ? 'M' : ''
    }${locationX.toFixed(0)},${locationY.toFixed(0)} `;

    // add the point to older points
    newPath.push(newPoint);
    setCurrentPath(newPath);
  };

  const onTouchEnd = () => {
    const currentPaths = [...paths];
    const newPath = [...currentPath];

    // push new path with old path and clean current path state
    currentPaths.push(newPath);
    setPaths(currentPaths);
    setCurrentPath([]);
  };

  const next = () => {
    captureRef(ref, {
      format: 'jpg',
      quality: 0.8,
    }).then(
      (uri) => {setLien(uri);
        Alert.alert('file saved in', uri);
        navigation.navigate("ResultNumber");},
      (error) => console.error('Oops, snapshot failed', error)
    );
  };
  const reset = () => {
    setPaths([]);
    setCurrentPath([]);

  }


  return (
    <View style={styles.container}>
      <Text style={{fontSize:20,fontWeight:'bold',marginBottom:20}}>Draw the number</Text>
      <View
        style={styles.svgContainer}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <ViewShot
          ref={ref}
          options={{
            format: 'jpg',
            quality: 1,
          }}
        >
          <Svg height={height * 0.7} width={width}>
            <Path
              d={currentPath.join('')}
              stroke={'black'}
              fill={'transparent'}
              strokeWidth={8}
            />

            {paths.length > 0 &&
              paths.map((item, index) => (
                <Path
                  key={`path-${index}`}
                  d={item.join('')}
                  stroke={'black'}
                  strokeWidth={8}
                  fill={'transparent'}
                />
              ))}
          </Svg>
        </ViewShot>
      </View>
      <CustomButton  text="Next" onPress={next} type="PRIMARY"/>
      <CustomButton  text="Reset" onPress={reset} type="SECONDARY"/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:60,
  },
  svgContainer: {
    height: height * 0.7,
    width: width * 0.99,
    borderColor: '#3B71F3',
    backgroundColor: 'white',
    borderWidth: 1,
  },
  },
);
