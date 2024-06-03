//QuerySettingsScreen.js
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import { setQueryData } from "../../redux/actions/queryActions";

export default function QuerySettingsScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [address, setAddress] = useState("");
  const [numOfGuests, setNumOfGuests] = useState("");
  const [isStartDatePickerVisible, setStartDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const showStartDatePicker = () => {
    setStartDatePickerVisible(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisible(false);
  };

  // const handleStartDateConfirm = (date) => {
  //   setStartDate(date.toLocaleDateString());
  //   hideStartDatePicker();
  // };
  const handleStartDateConfirm = (date) => {
    const formattedDate = date.toLocaleDateString("ch-ZN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    setStartDate(formattedDate);
    hideStartDatePicker();
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisible(true);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisible(false);
  };

  const handleEndDateConfirm = (date) => {
    const formattedDate = date.toLocaleDateString("ch-ZN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    setEndDate(formattedDate);
    hideEndDatePicker();
  };

  const handleSearch = () => {
    // 检查查询条件是否为空
    if (!startDate || !endDate || !numOfGuests || !address) {
      // 显示警告弹出框
      setShowAlert(true);
      console.log("All search criteria must be filled.");
      return;
    }
    // 清空之前的查询数据
    dispatch(setQueryData({}));

    const searchDatas = {
      startDate,
      endDate,
      numOfGuests,
      address,
    };

    dispatch(setQueryData(searchDatas));
    navigation.navigate("HomeScreen");

    console.log("QuerySettingsScreen--->", searchDatas);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Start Date:</Text>
          <TextInput
            style={styles.input}
            placeholder="Select start date"
            value={startDate}
            editable={false}
            onTouchStart={showStartDatePicker}
          />
          <DateTimePickerModal
            isVisible={isStartDatePickerVisible}
            mode="date"
            minimumDate={new Date()} //不能选择过去的时间
            onConfirm={handleStartDateConfirm}
            onCancel={hideStartDatePicker}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>End Date:</Text>
          <TextInput
            style={styles.input}
            placeholder="Select end date"
            value={endDate}
            editable={false}
            onTouchStart={showEndDatePicker}
          />
          <DateTimePickerModal
            isVisible={isEndDatePickerVisible}
            mode="date"
            minimumDate={new Date()} // 不能选择过去的时间
            onConfirm={handleEndDateConfirm}
            onCancel={hideEndDatePicker}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
          returnKeyType="done"
        />
        <TextInput
          style={styles.input}
          placeholder="Number of Guests"
          value={numOfGuests}
          onChangeText={setNumOfGuests}
          keyboardType="numeric"
          returnKeyType="done"
        />
        <Button title="Search" onPress={handleSearch} />

        {/* 自定义警告弹出框 */}
        <Modal isVisible={showAlert}>
          <View style={styles.alertContainer}>
            <Text style={styles.alertText}>
              Query conditions cannot be empty
            </Text>
            <Button title="OK" onPress={() => setShowAlert(false)} />
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  // 自定义警告弹出框样式
  alertContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  alertText: {
    marginBottom: 20,
    fontSize: 18,
  },
});
