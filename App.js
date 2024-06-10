import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Routes from "./src/Navigations/Routes";

const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
