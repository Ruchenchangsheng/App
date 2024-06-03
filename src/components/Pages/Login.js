import React, { useState, useEffect } from 'react';
import { Card, Input } from 'react-native-elements';
import { FAB } from '@rneui/themed';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUserApi } from '../../api/UserApi';
import { loginUser } from '../../redux/actions/userActions';
// import {checkLoginStatus} from '../../util/AsyncStorageUtil'

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
    setIsPasswordFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsUsernameFocused(false);
    setIsPasswordFocused(true);
  };

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const handleLoginPress = async () => {
    if (!username || !password) {
      console.log('Username and password are both required.');
      return;
    }

    setLoading(true);

    const userData = {
      username: username,
      password: password,
    };

    try {
      const response = await loginUserApi(userData);
      const result = response.data;

      console.log(result);

      if (result && result.code === 200) {

        const { token, username,userId } = result.data;

        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('username', username);
        AsyncStorage.setItem('userId',userId.toString());

        dispatch(loginUser({ userName: username, token:token,userId:userId }));
        console.log('Login successful, userName:',username);
        console.log('Login successful, token:', token);

      } else {
        console.error('Login failed -1:', result ? result.message : 'Unknown error');
      }
    } catch (error) {
      console.error('Login failed - 2:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Navigate after isLoggedIn state changes
    if (isLoggedIn) {
      navigation.navigate('UserScreen');
    }
  }, [isLoggedIn, navigation]);

  // useEffect(() => {
  //   // Navigate after isLoggedIn state changes
  //   if (isLogin()) {
  //     navigation.navigate('UserScreen');
  //   }
  // }, [navigation]);

  return (
    <Card containerStyle={styles.cardContainer}>
      <View>
        <Input
          inputContainerStyle={{
            ...styles.input,
            borderColor: isUsernameFocused ? 'blue' : 'grey',
          }}
          label="Username:"
          labelStyle={{ fontSize: 20, fontWeight: 'bold' }}
          style={{ marginLeft: 10 }}
          placeholder="Username"
          onFocus={handleUsernameFocus}
          onBlur={() => setIsUsernameFocused(false)}
          onChangeText={handleUsernameChange}
        />

        <Input
          inputContainerStyle={{
            ...styles.input,
            borderColor: isPasswordFocused ? 'blue' : 'grey',
          }}
          label="Password:"
          labelStyle={{ fontSize: 20, fontWeight: 'bold' }}
          style={{ marginLeft: 10 }}
          placeholder="Password"
          secureTextEntry
          onFocus={handlePasswordFocus}
          onBlur={() => setIsPasswordFocused(false)}
          onChangeText={handlePasswordChange}
        />
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: 'blue', marginLeft: 140 }}>Don't have an account? Click here to register</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 40 }}>
        <FAB
          title={loading ? 'Logging in...' : 'Login'}
          buttonStyle={{ width: 250 }}
          onPress={handleLoginPress}
          disabled={loading}
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