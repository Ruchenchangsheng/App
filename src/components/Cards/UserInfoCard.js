import { Card, Input } from "@rneui/base";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export default function UserInfoCard() {
  return (
    <Card containerStyle={styles.cardContainer}>
      <View>
        <Input
          label="Email:"
          labelStyle={{ fontSize: 20, fontWeight: "bold" }}
          style={{ marginLeft: 10 }}
          placeholder="Email"
          disabled
        />

        <Input
          label="Password:"
          labelStyle={{ fontSize: 20, fontWeight: "bold" }}
          style={{ marginLeft: 10 }}
          placeholder="Password"
          disabled
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 400,
    marginTop: 50,
    marginBottom: 10,
    borderRadius: 15,
    shadowColor: '#F888888',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    height: 35,
    width: 250,
    borderRadius: 10,
  },
});
