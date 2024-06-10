import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Button = () => {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: "#377E8B",
          width: 350,
          height: 45,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
          alignSelf: "center",
        }}
      >
        <Text>Next</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Button;
