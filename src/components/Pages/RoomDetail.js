import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";
import { getRoomDetailApi } from "../../api/HotelApi";
import RoomDetailCard from "../Cards/RoomDetailCard";

export default function RoomDetail() {
  const [roomdetails, setRoomDetails] = useState([]);
  const route = useRoute();
  const roomId = Number(route.params?.roomId);

  useEffect(() => {
    // 定义一个异步函数用于获取用户列表
    const fetchRoomDetails = async () => {
      try {
        // 发起GET请求到你的API端点
        const { data } = await getRoomDetailApi(roomId);
        console.log(data);

        // 将API响应中的用户数据设置到状态中
        setRoomDetails(data);
      } catch (error) {
        console.error("Error fetching roomDetails:", error);
      }
    };

    // 调用异步函数来获取用户列表
    fetchRoomDetails();
  }, [roomId]); // 传递一个空数组作为第二个参数，确保useEffect只执行一次（在组件挂载时）

  return (
    <FlatList
      data={roomdetails}
      keyExtractor={(item) => item.roomId.toString()}
      renderItem={({ item }) => <RoomDetailCard item={item} />}
    />
  );
}
