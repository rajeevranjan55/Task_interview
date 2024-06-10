import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import Button from "../Components/Button";

const Profile = ({ navigation }) => {
  const [data, setData] = useState([]);

  console.log(data.Health);

  useEffect(() => {
    fetch("https://api9.parentune.com/user/v1/interests", {
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
    })
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch(console.error);
  }, []);

  const renderItem = ({ item, index }) => (
    <TouchableOpacity>
      <View style={styles.topicButton}>
        <Text>{item.interest_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Interest")}>
          <Image
            source={require("../assets/Images/backArrow.png")}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile Summary</Text>
      </View>
      <View style={styles.centerText}>
        <Text style={styles.boldText}>
          Awesome! Your profile is set up. You are all set for
        </Text>
        <Text style={styles.boldText}>a personalized experience now</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Images/profile_.png")}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.centerText}>
        <Text style={styles.profileName}>Komal Pandey</Text>
        <Text style={styles.greyText}>
          Mom to 15 month old Sagar & 7 year old
        </Text>
        <Text style={styles.greyText}>Swati</Text>
      </View>
      <Text style={styles.interestText}>Your Interest</Text>
      <FlatList
        numColumns={3}
        data={data.Health}
        renderItem={renderItem}
        keyExtractor={(item) => item.interest_id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.topicContainer}
      />

      <Button />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 5 },
  header: { marginHorizontal: 10, marginTop: 10, flexDirection: "row" },
  backArrow: {
    height: 30,
    width: 30,
    tintColor: "black",
    marginTop: 5,
    marginBottom: 10,
  },
  headerText: { fontSize: 30, fontWeight: "500" },
  centerText: { marginTop: 10, alignSelf: "center" },
  boldText: { fontWeight: "500" },
  imageContainer: { marginTop: 90, alignItems: "center" },
  profileImage: { height: 118, width: 118, marginBottom: 15 },
  profileName: {
    fontSize: 18,
    color: "black",
    fontWeight: "500",
    alignSelf: "center",
  },
  greyText: { fontSize: 16, color: "grey" },
  interestText: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
    marginTop: 15,
    marginLeft: 15,
  },
  topicContainer: { paddingHorizontal: 8 },
  topicButton: {
    borderWidth: 1,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    margin: 10,
    flex: 1,
    minWidth: 100,
    paddingHorizontal: 20,
    height: 80,
    padding: 5,
  },
  topicRow: { flexDirection: "row", marginTop: 10 },
  topicItem: { width: 80, height: 35 },
});

export default Profile;

