import React,{useState,useEffect} from 'react';
import {FlatList } from 'react-native';
import { getBookingRoomByRoomId } from '../../api/HotelApi';
import {  useRoute } from '@react-navigation/native';
import BookingCard from '../Cards/BookingCard.js';

export default function Book(){
    const [book, setBook] = useState([]);
    const route = useRoute();
    const roomId = Number(route.params?.roomId);

    useEffect(() => {
      // 定义一个异步函数用于获取用户列表
      const fetchBookRoomInfo = async () => {
        try {
          // 发起GET请求到你的API端点
          const {data} = await getBookingRoomByRoomId(roomId)
          console.log(data);
          
          // 将API响应中的用户数据设置到状态中
          setBook(data);
        } catch (error) {
          console.error('Error fetching roomList:', error);
        }
      };
  
      // 调用异步函数来获取用户列表
      fetchBookRoomInfo();
    }, [roomId]); // 传递一个空数组作为第二个参数，确保useEffect只执行一次（在组件挂载时）

    return(
        <FlatList
        data={book}
        keyExtractor={(item) => item.roomId.toString()}
        renderItem={({ item }) => <BookingCard item={item}/>}
      />
    );
}