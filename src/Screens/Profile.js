import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";
import Button from "../Components/Button";
import { useState } from "react";

const Profile = ({ navigation }) => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("https://api9.parentune.com/user/v1/interests")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <ScrollView style={{ marginHorizontal: 5 }}>
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 10,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Interest")}>
          <Image
            source={require("../assets/Images/backArrow.png")}
            style={{
              height: 30,
              width: 30,
              tintColor: "black",

              marginTop: 5,
              marginBottom: 10,
            }}
          />
        </TouchableOpacity>

        <Text style={{ fontSize: 30, fontWeight: 500 }}>Profile Summary</Text>
      </View>
      <View style={{ marginTop: 10, alignSelf: "center" }}>
        <Text style={{ fontWeight: 500 }}>
          Awesome! Your profile is set up. You are all set for
        </Text>
        <Text style={{ fontWeight: 500 }}> a personalized experience now</Text>
      </View>
      <View style={{ marginTop: 90, alignItems: "center" }}>
        <Image
          style={{ height: 118, width: 118, marginBottom: 15 }}
          source={require("../assets/Images/profile_.png")}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 18, color: "black", fontWeight: 500 }}>
          {" "}
          Komal Pandey{" "}
        </Text>
        <Text style={{ fontSize: 16, color: "grey" }}>
          Mom to 15 month old Sagar & 7 year old
        </Text>
        <Text style={{ color: "grey" }}>Swati</Text>
      </View>
      <Text
        style={{ fontSize: 14, fontWeight: 500, color: "black", marginTop: 15 }}
      >
        Your Interest
      </Text>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            width: 64,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 18,
            marginRight: 10,
          }}
        >
          <Text>Food</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            width: 80,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 18,
            marginRight: 10,
            paddingHorizontal: 10,
          }}
        >
          <Text>Genetics</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            width: 80,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 18,
            marginRight: 10,
            paddingHorizontal: 10,
          }}
        >
          <Text>Allergies</Text>
        </View>
      </View>
      <Button />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Profile;
