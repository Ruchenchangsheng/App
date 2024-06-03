// UserScreen.js

import React, { useState, useEffect } from 'react';
import UserCard from '../../components/Cards/UserCards';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserScreen() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // 从 AsyncStorage 中读取用户名
    const fetchUsername = async () => {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername) {
        setUserName(storedUsername);
      }
    };

    fetchUsername();
  }, []); // 注意这里的空数组表示仅在组件挂载时执行一次

  return (
    <UserCard userName={userName} />
  );
}
