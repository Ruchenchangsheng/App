import React from "react";
import { Card, FAB } from "react-native-elements";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RoomDetailCard({ item }) {
  const navigation = useNavigation();

  

  return (
    <Card containerStyle={styles.container} >
      <Card.Image source={{ uri: item.roomImg }} style={styles.roomImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.roomName}><Text>Room Type:</Text>{item.typeName}</Text>
        <Text style={styles.roomDescription}><Text>Size :</Text>{item.size}m²</Text>
        <Text style={styles.amenities}><Text>Amenities:</Text>{item.facilityDescriptions}</Text>
        <Text
          style={styles.maxOccupancy}
        ><Text>Maximum occupancy:</Text>{item.numOfGuests}</Text>
        {/* <Text
          style={styles.additionalServices}
        >{`Additional Services: ${item.additionalServices}`}</Text>
        <Text
          style={styles.specialFeatures}
        >{`Special Features: ${item.specialFeatures}`}</Text> */}
        <Text style={styles.price}>{`Price:${item.price}¥`}</Text>
      </View>
      <View>
          <FAB
            title="Book Now!"
            placement="right"
            color="#AD1357" // 设置为红色
            style={styles.fab}
            key={item.roomId}
            onPress={() => {
              console.log("Navigating to Rooms with roomId:", item.roomId,"HotelId:", item.hotelId);
              navigation.navigate("Book", { roomId: item.roomId ,hotelId: item.hotelId});
            }}
          />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: "#F888888",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: "#fff",
    elevation: 5,
  },
  roomImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  contentContainer: {
    padding: 10, 
    marginTop: 30,
  },
  roomName: {
    marginBottom: 5,
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
  },
  roomDescription: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 10,
    marginBottom: 10,
  },
  amenities: {
    fontSize: 18,
    color: "#333333",
    marginBottom: 5,
  },
  maxOccupancy: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  additionalServices: {
    fontSize: 20,
    color: "gray",
    fontWeight: "bold",
    marginBottom: 5,
  },
  specialFeatures: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "800",
    // color: "#333333",
    marginBottom: 20,
  },
  price: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 25,
    color: "#ff0000",
    fontWeight: "bold",
  },
  fab: {
    margin: 16,
  },
});
