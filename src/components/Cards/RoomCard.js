import React from "react";
import { Card } from "react-native-elements";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { Image } from '@rneui/themed';

export default function RoomsCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={item.roomId}
      onPress={() => {
        console.log("Navigating to RoomDetail with roomId:", item.roomId,"HotelId:",item.hotelId);
        navigation.navigate("RoomDetail", { roomId: item.roomId,hotelId:item.hotelId });
      }}
    >
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image source={{ uri: item.photo}} style={styles.cardImage} />
          <View style={styles.infoContainer}>
            <View style={styles.textContainer}>
              <Text h2 style={styles.roomName}>
              <Text>Room Type:</Text>{item.type}
              </Text>
            </View>
            <View style={styles.textContainer}>
              <Text h4 style={styles.roomDescription}>
                <Text>Maximum occupancy:</Text>{item.numOfGuests}
              </Text>
              <Text h4 style={styles.roomDescription}>
              <Text>Size :</Text>{item.size}m²
              </Text>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text h4 style={styles.roomPrice}>
              {item.price}¥
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
    borderRadius: 15,
    shadowColor: "#F888888",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    marginLeft: 10,
    marginRight: 5,
    flex: 1, 
  },
  textContainer: {
    flex: 1, 
  },
  roomName: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: "bold",
  },
  roomDescription: {
    fontSize: 10,
    color: "#888888",
  },
  priceContainer: {
    marginLeft: "auto", 
  },
  roomPrice: {
    fontSize: 14, 
    color: "#ff0000", 
    fontWeight: "bold", 
  },
  backButton: {
    marginLeft: 10, 
  },
});
