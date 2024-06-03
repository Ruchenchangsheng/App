import React,{useState,useEffect} from 'react';
import { FlatList } from 'react-native';
import {  useRoute } from '@react-navigation/native';
import { getCategoriesApi } from '../../api/HotelApi';
import CategoriesCard from '../../components/Cards/CategoriesCard';

export default function CategoriesScreen(){
    const [type, setTypes] = useState([]);
    const route = useRoute();
    // const typeId = route.params?.typeId;
    const typeId = Number(route.params?.typeId);
  
    useEffect(() => {
      // 定义一个异步函数用于获取用户列表
      const fetchTypes = async () => {
        try {
          // 发起GET请求到你的API端点
          const {data} = await getCategoriesApi(typeId)
          console.log(data);
          
          // 将API响应中的用户数据设置到状态中
          setTypes(data);
        } catch (error) {
          console.error('Error fetching roomList:', error);
        }
      };
  
      // 调用异步函数来获取用户列表
      fetchTypes();
    }, [typeId]); // 传递一个空数组作为第二个参数，确保useEffect只执行一次（在组件挂载时）
    return (
  
      <FlatList
          data={type}
          keyExtractor={(item) => item.typeId.toString()}
          renderItem={({ item }) => <CategoriesCard item={item} />}
        />
    );
}