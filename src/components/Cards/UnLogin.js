import { Text, View, StyleSheet } from "react-native";

const UnLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No orders found.</Text>
      <Text style={styles.text}>Please log in to your account!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#CCCCCC", // 浅灰色
    textAlign: "center",
  },
});

export default UnLogin;
