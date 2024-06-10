import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import Button from "../Components/Button";

const Interest = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [Pressedindex, setIndex] = useState(null);
  const HealthData = data.Health;
  useEffect(() => {
    Api();
  }, []);

  const Api = async () => {
    const res = await fetch("https://api9.parentune.com/user/v1/interests", {
      method: "GET",
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
        authtoken:
          "b7abc9ef244c86d60c155df82e98de6235b21da7a9e085b0206637eab3e2f5e6",
        instanceid:
          "d74ea5b6ea5870d475efbb955cc1cb8abbe680caa7f862e80c1d1ce1dd24fc1d",
        origin: "https://www.parentune.com",
        referer: "https://www.parentune.com/",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/124.0.0.0",
      },
    });
    const result = await res.json();
    setData(result.data); // Assuming Health is an array
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => setIndex(index)}>
      <View style={styles.topicButton}>
        <Text>{item.interest_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={require("../assets/Images/backArrow.png")}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Choose Interest</Text>
      </View>
      <View style={styles.infoText}>
        <Text style={styles.text}>
          Select 3 or more topics of interest to personalize your experience.
        </Text>
      </View>
      <Text style={styles.categoryTitle}>Health</Text>
      <FlatList
        numColumns={3}
        data={HealthData}
        renderItem={renderItem}
        keyExtractor={(item) => item.interest_id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.topicContainer}
      />

      <Text style={styles.categoryTitle}>Psychology</Text>
      <View style={styles.topicRow}>
        <View style={[styles.topicButton, styles.selectedTopicButton]}>
          <Text>SelfEsteem</Text>
        </View>
        <View style={styles.topicButton}>
          <Text>MentalHealth</Text>
        </View>
      </View>
      <View style={styles.topicRow}>
        <View style={styles.topicButton}>
          <Text>Understandings</Text>
        </View>
        <View style={styles.topicButton}>
          <Text>Showmore+</Text>
        </View>
      </View>
      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>Didn't find your interest? </Text>
        <Text style={[styles.footerText, styles.underline]}>Click here</Text>
      </View>
      <Button />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: "row",
  },
  backArrow: {
    height: 30,
    width: 30,
    tintColor: "black",
    marginTop: 5,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "500",
  },
  infoText: {
    marginHorizontal: 18,
    marginTop: 18,
  },
  text: {
    color: "black",
    fontWeight: "400",
    fontSize: 17,
  },
  categoryTitle: {
    fontWeight: "700",
    fontSize: 21,
    marginHorizontal: 8,
    marginTop: 10,
  },
  topicContainer: {
    paddingHorizontal: 8,
    marginTop: 5,
  },
  topicRow: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 8,
  },
  topicButton: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: "grey",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    marginRight: 10,
    paddingHorizontal: 20,
  },
  selectedTopicButton: {
    backgroundColor: "#FB7882",
  },
  footerTextContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 25,
  },
  footerText: {
    fontWeight: "700",
  },
  underline: {
    textDecorationLine: "underline",
  },
});

export default Interest;
