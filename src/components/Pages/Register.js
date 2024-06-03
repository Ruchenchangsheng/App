import { Card, Input } from "react-native-elements";
import { FAB } from "@rneui/themed";
import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
// import uuid from "react-native-uuid";
import { registerUserApi } from "../../api/UserApi";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isRepeatPasswordFocused, setIsRepeatPasswordFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameFocus = () => {
    setIsNameFocused(true);
    setIsPasswordFocused(false);
    setIsRepeatPasswordFocused(false);
    setIsEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsNameFocused(false);
    setIsPasswordFocused(true);
    setIsRepeatPasswordFocused(false);
    setIsEmailFocused(false);
  };

  const handleRepeatPasswordFocus = () => {
    setIsNameFocused(false);
    setIsPasswordFocused(false);
    setIsRepeatPasswordFocused(true);
    setIsEmailFocused(false);
  };

  const handleEmailFocus = () => {
    setIsNameFocused(false);
    setIsPasswordFocused(false);
    setIsRepeatPasswordFocused(false);
    setIsEmailFocused(true);
  };

  const handleNameChange = (newUserName) => {
    setUsername(newUserName);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    if (repeatPassword !== "" && newPassword !== repeatPassword) {
      setPasswordMatchError("The password does not match.");
    } else {
      setPasswordMatchError("");
    }
  };

  const handleRepeatPasswordChange = (newRepeatPassword) => {
    setRepeatPassword(newRepeatPassword);
    if (password !== "" && newRepeatPassword !== password) {
      setPasswordMatchError("The password does not match.");
    } else {
      setPasswordMatchError("");
    }
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handleFabPress = async () => {
    console.log("Submit:", username, password, email);

    if (password !== repeatPassword) {
      setPasswordMatchError("The password does not match.");
      return;
    }

    if (!username || !email || !password || !repeatPassword) {
      console.log("All fields are required.");
      return;
    }

    setLoading(true);

    const userData = {
      userName: username,
      password: password,
      email: email,
      // uuid: uuid.v4(),
    };

    try {
      const { result } = await registerUserApi(userData);
      console.log("Registration result:", result);

      if (result.success) {
        navigation.navigate("Login");
      } else {
        console.error("Registration failed:", result.error);

        if (result.error === "PasswordMismatchError") {
          setPasswordMatchError("The password does not match.");
        } else {
          // 处理其他特定错误
        }
      }
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card containerStyle={styles.cardContainer}>
      <View>
        <Input
          inputContainerStyle={{
            ...styles.input,
            borderColor: isNameFocused ? "blue" : "grey",
          }}
          label="UserName:"
          labelStyle={{ fontSize: 20, fontWeight: "bold" }}
          style={{ marginLeft: 10 }}
          placeholder="UserName"
          onFocus={handleNameFocus}
          onBlur={() => setIsNameFocused(false)}
          onChangeText={handleNameChange}
        />
        <Input
          inputContainerStyle={{
            ...styles.input,
            borderColor: isPasswordFocused ? "blue" : "grey",
          }}
          label="Password:"
          labelStyle={{ fontSize: 20, fontWeight: "bold" }}
          style={{ marginLeft: 10 }}
          placeholder="Password"
          secureTextEntry
          onFocus={handlePasswordFocus}
          onBlur={() => setIsPasswordFocused(false)}
          onChangeText={handlePasswordChange}
        />
        <Input
          inputContainerStyle={{
            ...styles.input,
            borderColor: isRepeatPasswordFocused ? "blue" : "grey",
          }}
          label="RepeatPassword:"
          labelStyle={{ fontSize: 20, fontWeight: "bold" }}
          style={{ marginLeft: 10 }}
          placeholder="RepeatPassword"
          secureTextEntry
          onFocus={handleRepeatPasswordFocus}
          onBlur={() => setIsRepeatPasswordFocused(false)}
          onChangeText={handleRepeatPasswordChange}
        />
        {passwordMatchError !== "" && (
          <Text style={{ color: "red" }}>{passwordMatchError}</Text>
        )}
        <Input
          inputContainerStyle={{
            ...styles.input,
            borderColor: isEmailFocused ? "blue" : "grey",
          }}
          label="Email:"
          labelStyle={{ fontSize: 20, fontWeight: "bold" }}
          style={{ marginLeft: 10 }}
          placeholder="Email"
          onFocus={handleEmailFocus}
          onBlur={() => setIsEmailFocused(false)}
          onChangeText={handleEmailChange}
        />
      </View>

      <View style={{ marginTop: 60 }}>
        <FAB
          title={loading ? "Registering..." : "Register"}
          buttonStyle={{ width: 250 }}
          onPress={handleFabPress}
          disabled={loading}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 580,
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
});
