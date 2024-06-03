import AsyncStorage from '@react-native-async-storage/async-storage';


export const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      return !!token; // 返回是否存在 token，true 表示用户已登录，false 表示用户未登录
    } catch (error) {
      console.error('Error checking login status:', error);
      return false; // 如果出现错误，默认将用户状态设置为未登录
    }
  };
  
export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting item:', error);
  }
};

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting item:', error);
    return null;
  }
};

export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing item:', error);
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
};
