import React,{useState,useEffect} from 'react';
import { FlatList } from 'react-native';
import {  useRoute } from '@react-navigation/native';
import { getHotelByTypeApi } from '../../api/HotelApi';
import ThemeHotelCards from '../Cards/ThemeHotelsCard';

export default function ThemeHotels() {
  const [hotels, setHotels] = useState([]);
  const route = useRoute();

  const typeId = Number(route.params?.typeId);

  useEffect(() => {
    // 定义一个异步函数用于获取用户列表
    const fetchThemeHotels = async () => {
      try {
        // 发起GET请求到你的API端点
        const {data} = await getHotelByTypeApi(typeId)
        console.log(data);
        
        // 将API响应中的用户数据设置到状态中
        setHotels(data);
      } catch (error) {
        console.error('Error fetching ThemeHotels:', error);
      }
    };

    // 调用异步函数来获取用户列表
    fetchThemeHotels();
  }, [typeId]); // 传递一个空数组作为第二个参数，确保useEffect只执行一次（在组件挂载时）
  return (

    <FlatList
        data={hotels}
        keyExtractor={(item) => item.hotelId.toString()}
        renderItem={({ item }) => <ThemeHotelCards item={item} />}
      />
  );
}