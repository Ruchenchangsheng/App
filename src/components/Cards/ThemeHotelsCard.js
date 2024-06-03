import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function ThemeHotelCards({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={item.typeId}
      onPress={() => {
    console.log("Navigating to Rooms with hotelId:", item.hotelId);
    navigation.navigate("Rooms", { hotelId: item.hotelId });
  }}
    >
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image source={{ uri: item.hotelImg }} style={styles.cardImage} />
          <View style={styles.textContainer}>
            <Text h4 style={styles.hotelName}>
              {item.hotelName}
            </Text>
            <Text h6>{item.address}</Text>
            <Text>{item.cityName}</Text>
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
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  hotelName: {
    marginBottom: 5,
  },
});
