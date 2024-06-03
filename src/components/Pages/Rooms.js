import React,{useState,useEffect} from 'react';
import { FlatList } from 'react-native';
import {  useRoute } from '@react-navigation/native';
import { getRoomsApi } from '../../api/HotelApi';
import RoomsCard from '../Cards/RoomCard';

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const route = useRoute();
  const hotelId = Number(route.params?.hotelId);

  useEffect(() => {
    // 定义一个异步函数用于获取用户列表
    const fetchRooms = async () => {
      try {
        // 发起GET请求到你的API端点
        const {data} = await getRoomsApi(hotelId)
        console.log(data);
        
        // 将API响应中的用户数据设置到状态中
        setRooms(data);
      } catch (error) {
        console.error('Error fetching roomList:', error);
      }
    };

    // 调用异步函数来获取用户列表
    fetchRooms();
  }, [hotelId]); // 传递一个空数组作为第二个参数，确保useEffect只执行一次（在组件挂载时）
  return (
    <FlatList
        data={rooms}
        keyExtractor={(item) => item.roomId.toString()}
        renderItem={({ item }) => <RoomsCard item={item} />}
      />
  );
}