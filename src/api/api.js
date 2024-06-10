import { StyleSheet, View } from "react-native";

const Api = async () => {
  const res = await fetch("https://api9.parentune.com/user/v1/interests");
  const Result = await res.json();
};

const styles = StyleSheet.create({});

export default Api;
