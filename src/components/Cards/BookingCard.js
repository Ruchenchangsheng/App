import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Card, Input } from "react-native-elements";
import { Icon } from "@rneui/base";
import { FAB } from "@rneui/themed";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { createOrderApi } from "../../api/UserApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function BookingCard({ item }) {
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);

  const showPaymentAlert = () => {
    if (!selectedDate || !selectedEndDate) {
      Alert.alert("Warning", "Please select both start and end dates.");
      return;
    }

    Alert.alert(
      "Confirm Payment",
      "",
      [
        { text: "Cancel", onPress: handlePaymentCancel, style: "cancel" },
        { text: "Pay", onPress: handlePaymentConfirm },
      ],
      { cancelable: false }
    );
  };

  const handlePaymentConfirm = async () => {
    if (isLoggedIn) {
      try {
        const storedUserId = await AsyncStorage.getItem("userId");
        const response = await createOrderApi({
          userId: storedUserId,
          hotelId: item.hotelId,
          startDate: selectedDate.toISOString(),
          endDate: selectedEndDate.toISOString(),
          roomId: item.roomId,
        });

        // Handle backend response based on actual scenario
        console.log("Backend API Response:", response);

        // Handle logic for successful order creation
        setPaymentModalVisible(false);
      } catch (error) {
        // Handle error scenarios
        console.error("Error occurred while creating the order:", error);
      }
    } else {
      console.log("User not logged in");
    }
  };

  const handlePaymentCancel = () => {
    setPaymentModalVisible(false);
  };

  return (
    <Card containerStyle={styles.cardContainer}>
      <View>
        <View style={styles.bookingInfoContainer}>
          <Card.Image source={{ uri: item.roomImg }} style={styles.roomImage} />
          <Text style={styles.hotelName}>{item.hotelName}</Text>
          <Text style={styles.roomName}>{item.name}</Text>
          <Text style={styles.price}>Price: {item.price} $</Text>
        </View>
        <View style={styles.dates}>
          <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
            <Icon
              name="calendar-sharp"
              type="ionicon"
              size={40}
              containerStyle={{ marginRight: 30 }}
            />
            <Text style={styles.StartDateText}>
              {selectedDate ? selectedDate.toLocaleDateString() : "Start"}
            </Text>
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            minimumDate={new Date()}
            onConfirm={(startDate) => {
              setSelectedDate(startDate);
              setDatePickerVisible(false);
            }}
            onCancel={() => setDatePickerVisible(false)}
          />
          <Icon
            name="arrow-forward-sharp"
            type="ionicon"
            containerStyle={{ marginBottom: 20 }}
          />
          <TouchableOpacity onPress={() => setEndDatePickerVisible(true)}>
            <Icon
              name="calendar-sharp"
              type="ionicon"
              size={40}
              containerStyle={{ marginLeft: 30 }}
            />
            <Text style={styles.EndDateText}>
              {selectedEndDate ? selectedEndDate.toLocaleDateString() : "End"}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isEndDatePickerVisible}
            mode="date"
            minimumDate={selectedDate || new Date()}
            onConfirm={(endDate) => {
              setSelectedEndDate(endDate);
              setEndDatePickerVisible(false);
            }}
            onCancel={() => setEndDatePickerVisible(false)}
          />
        </View>
      </View>
      <View style={{ marginTop: 40 }}>
        <FAB
          title="Book"
          buttonStyle={{ width: 250 }}
          onPress={showPaymentAlert}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 50,
    marginBottom: 10,
    borderRadius: 15,
    shadowColor: "#F888888",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    height: 35,
    width: 250,
    borderRadius: 10,
  },
  dates: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  StartDateText: {
    textAlign: "center",
    marginTop: 10,
    marginRight: 30,
  },
  EndDateText: {
    textAlign: "center",
    marginTop: 10,
    paddingLeft: 30,
  },
  roomImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  hotelName: {
    marginBottom: 5,
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
  },
  roomName: {
    marginBottom: 5,
    fontSize: 18,
    color: "gray",
    marginTop: 10,
  },
  price: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 25,
    color: "#ff0000",
    fontWeight: "bold",
  },
});

