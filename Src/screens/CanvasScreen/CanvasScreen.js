import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Canvas from 'react-native-canvas';

const CanvasScreen = () => {
  const canvasRef = useRef(null);
  let ctx;

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
  }, []);

  const handleTouchStart = (event) => {
    const { pageX, pageY } = event.touches[0];
    ctx.beginPath();
    ctx.moveTo(pageX, pageY);
  };

  const handleTouchMove = (event) => {
    const { pageX, pageY } = event.touches[0];
    ctx.lineTo(pageX, pageY);
    ctx.stroke();
  };

  return (
    <View style={styles.container}>
      <Canvas
        ref={canvasRef}
        style={styles.canvas}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvas: {
    width: '80%',
    height: '80%',
  },
});

export default CanvasScreen;
