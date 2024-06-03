// UserCard.js

import React,{useEffect} from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { Avatar } from "@rneui/themed";
import { Button, Icon, ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";
import { logoutUserApi } from "../../api/UserApi"; // Import the logoutUserApi
import { FAB } from "@rneui/base";

export default function UserCard() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userName = useSelector((state) => state.user.userName);

  const handleLogout = async () => {
    try {
      // Call the backend API to logout
      await logoutUserApi();

      // Dispatch the logout action
      dispatch(logoutUser());

      // Navigate to the login screen
      navigation.navigate("UserScreen");

      // 打印退出登录成功消息
      console.log("Logout Successful.");
    } catch (error) {
      console.error("Logout error:", error);

      // 打印退出登录失败消息
      console.log("Logout failed.");
    }
  };

  useEffect(() => {
    // 在 isLoggedIn 状态变化后进行导航
    if (isLoggedIn) {
      navigation.navigate('UserScreen');
    }
  }, [isLoggedIn, navigation]);


  return (
    <ScrollView style={styles.Container}>
      <ListItem bottomDivider>
        {isLoggedIn ? (
          // If logged in, show user information
          <ListItem.Content style={{ flexDirection: 'row' }}>
            <Avatar
              size={60}
              rounded
              source={{ uri: "https://i.imgs.ovh/2023/12/20/WVfWR.png" }}
              containerStyle={{ backgroundColor: "#c2c2c2" , }}
            />
            <ListItem.Title style={styles.LoginAndRegister}>
              <Text>{userName}</Text>
            </ListItem.Title>
          </ListItem.Content>
        ) : (
          // If not logged in, show login button
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <ListItem.Content style={{ flexDirection: 'row' }}>
              <Avatar
                rounded
                size={60}
                icon={{
                  name: "person-sharp",
                  type: "ionicon",
                  size: 60,
                }}
                containerStyle={{ backgroundColor: "#c2c2c2" }}
              />
              <ListItem.Title style={styles.LoginAndRegister}>
                <Text>Sign In/Register</Text>
              </ListItem.Title>
            </ListItem.Content>
          </TouchableOpacity>
        )}
      </ListItem>

      <ListItem style={styles.ListContainer}>
        <View>
          {/* <TouchableOpacity 
          // onPress={() => navigation.navigate("Account")}
          > */}
            <ListItem>
              <Icon name="person-sharp" type="ionicon" />
              <ListItem.Title>Account</ListItem.Title>
              <Icon
                name="chevron-forward-sharp"
                type="ionicon"
                style={{ marginLeft: 160 }}
              />
            </ListItem>
          {/* </TouchableOpacity> */}

          <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
            <ListItem>
              <Icon name="information-sharp" type="ionicon" />
              <ListItem.Content>
                <ListItem.Title>About Us</ListItem.Title>
              </ListItem.Content>
              <Icon name="chevron-forward-sharp" type="ionicon" />
            </ListItem>
          </TouchableOpacity>
        </View>
      </ListItem>

      {isLoggedIn && (
        <View style={styles.LogOut}>
          {/* <Button title="Logout" onPress={handleLogout} /> */}
          <FAB 
          title="Logout"
          buttonStyle={{ width: 250 }}
          onPress={handleLogout}
        />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 20,
    padding: 20,
    margin: "auto",
  },
  ListContainer: {
    marginTop: 20,
    textAlign: "center",
    margin: "auto",
  },
  LoginAndRegister: {
    color: "#57a1f4",
    fontSize:25,
    marginTop:15,
    marginLeft:15,
  },
  LogOut:{
    marginTop:40,
  }
});
