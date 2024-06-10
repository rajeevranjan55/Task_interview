import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Button from "../Components/Button";

const Interest = ({ navigation }) => {
  const Api = async () => {
    const res = await fetch("https://api9.parentune.com/user/v1/interests");
    const Result = await res.json();
    console.log(Result);
  };
  return (
    <ScrollView>
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 10,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={require("../assets/Images/backArrow.png")}
            style={{
              height: 30,
              width: 30,
              tintColor: "black",

              marginTop: 5,
            }}
          />
        </TouchableOpacity>

        <Text style={{ fontSize: 30, fontWeight: 500 }}>Choose Interest</Text>
      </View>
      <View style={{ marginHorizontal: 18, marginTop: 18 }}>
        <Text style={{ color: "black", fontWeight: 400, fontSize: 17 }}>
          Select 3 or more topics of interest to{" "}
        </Text>
        <Text style={{ color: "black", fontWeight: 400, fontSize: 17 }}>
          personalize your experience.
        </Text>
      </View>
      <Text
        style={{
          fontWeight: 700,
          fontSize: 21,
          marginHorizontal: 8,
          marginTop: 10,
        }}
      >
        Health
      </Text>
      <View
        style={{ flexDirection: "row", marginHorizontal: 8, marginTop: 10 }}
      >
        {" "}
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
            backgroundColor: "#FB7882",
          }}
        >
          <Text>Food</Text>
        </View>
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
            paddingHorizontal: 50,
            backgroundColor: "#FB7882",
          }}
        >
          <Text>Genetics</Text>
        </View>
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
            paddingHorizontal: 50,
          }}
        >
          <Text>Allergies</Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", marginTop: 10, marginHorizontal: 5 }}
      >
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
            paddingHorizontal: 50,
          }}
        >
          <Text>Infections</Text>
        </View>
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
            paddingHorizontal: 50,
          }}
        >
          <Text>Infections</Text>
        </View>
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
            paddingHorizontal: 50,
          }}
        >
          <Text>Infections</Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", marginTop: 10, marginHorizontal: 5 }}
      >
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
            paddingHorizontal: 50,
          }}
        >
          <Text>Infections</Text>
        </View>
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
            paddingHorizontal: 50,
          }}
        >
          <Text>Infections</Text>
        </View>
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
            paddingHorizontal: 50,
          }}
        >
          <Text>Infections</Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", marginTop: 10, marginHorizontal: 5 }}
      >
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
            paddingHorizontal: 50,
          }}
        >
          <Text>Infections</Text>
        </View>
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
            paddingHorizontal: 50,
          }}
        >
          <Text>Infections</Text>
        </View>
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
            paddingHorizontal: 50,
          }}
        >
          <Text>Infections</Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", marginTop: 10, marginHorizontal: 5 }}
      >
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
            paddingHorizontal: 50,
          }}
        >
          <Text>Infections</Text>
        </View>
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
            paddingHorizontal: 50,
          }}
        >
          <Text>Infections</Text>
        </View>
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
            paddingHorizontal: 50,
          }}
        >
          <Text>Infections</Text>
        </View>
      </View>
      <Text
        style={{
          fontWeight: 700,
          fontSize: 21,
          marginHorizontal: 8,
          marginTop: 10,
        }}
      >
        Psychology
      </Text>
      <View
        style={{ flexDirection: "row", marginTop: 15, marginHorizontal: 5 }}
      >
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
            paddingHorizontal: 50,
            backgroundColor: "#FB7882",
          }}
        >
          <Text>SelfEsteem</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            width: 130,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 18,
            marginRight: 10,
            paddingHorizontal: 50,
          }}
        >
          <Text>MentalHealth</Text>
        </View>
      </View>
      <View
        style={{ marginTop: 10, flexDirection: "row", marginHorizontal: 5 }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            width: 130,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 18,
            marginRight: 10,
            paddingHorizontal: 50,
          }}
        >
          <Text>Understandings</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            width: 130,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 18,
            marginRight: 10,
            paddingHorizontal: 50,
          }}
        >
          <Text>Showmore+</Text>
        </View>
      </View>
      <Text
        style={{
          fontWeight: 700,
          fontSize: 21,
          marginHorizontal: 8,
          marginTop: 10,
        }}
      >
        Hygiene
      </Text>
      <View
        style={{ flexDirection: "row", marginTop: 15, marginHorizontal: 5 }}
      >
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
            paddingHorizontal: 50,
          }}
        >
          <Text>SelfEsteem</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            width: 130,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 18,
            marginRight: 10,
            paddingHorizontal: 50,
            backgroundColor: "#FB7882",
          }}
        >
          <Text>Organization</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            width: 130,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 18,
            marginRight: 10,
            paddingHorizontal: 50,
          }}
        >
          <Text>Allergies</Text>
        </View>
      </View>
      <View
        style={{ marginTop: 10, flexDirection: "row", marginHorizontal: 5 }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            width: 130,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 18,
            marginRight: 10,
            paddingHorizontal: 50,
          }}
        >
          <Text>Cleanliness</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            width: 130,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 18,
            marginRight: 10,
          }}
        >
          <Text>Showmore+</Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", alignSelf: "center", marginTop: 25 }}
      >
        <Text style={{ fontWeight: 700 }}>Didn't find your interest? </Text>
        <Text style={{ textDecorationLine: "underline" }}> Click here</Text>
      </View>
      <Button />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Interest;
