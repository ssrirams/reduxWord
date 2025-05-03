import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


const WebViewScreen = () => {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'http://192.168.0.102:3000/' }} 
        style={styles.webview}
        startInLoadingState={true}
        renderLoading={() => <Text>Loading...</Text>}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.error('WebView error: ', nativeEvent);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make sure the container fills the screen
  },
  webview: {
    flex: 1, // Ensure WebView fills the container
  },
});

export default WebViewScreen;
