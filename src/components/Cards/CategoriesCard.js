import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Card, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function CategoriesCard({ item }) {
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 10 }}>
      <TouchableOpacity
        key={item.typeId}
        onPress={() => {
          console.log("Navigating to Rooms with typeId:", item.typeId);
          navigation.navigate("ThemeHotels", { typeId: item.typeId });
        }}
      >
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.cardContent}>
            <View style={styles.textContainer}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.typeName}
              </Text>
            </View>
            <Icon name="caret-forward-outline" type="ionicon" />
          </View>
        </Card>
      </TouchableOpacity>
    </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  textContainer: {
    alignItems: "flex-start",
  },
});
