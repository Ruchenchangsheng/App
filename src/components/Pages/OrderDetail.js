// OrderDetail.js
import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";
import OrderDetailCard from "../Cards/OrderDetailCard";
import { getOrderDetailApi } from "../../api/UserApi";
import { setOrderDetail } from "../../redux/actions/userActions"; // 导入 action

export default function OrderDetail() {
  const dispatch = useDispatch();
  const orderDetail = useSelector((state) => state.user.orderDetail);
  const token = useSelector((state) => state.user.token);
  const route = useRoute();
  const orderId = route.params?.orderId;

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        // const { data } = await getOrderDetailApi(orderId,
        //   {headers: { Authorization: `${token}` },
        // });
        // dispatch(setOrderDetail(data)); // 使用 Redux 存储订单详情数据

        const { data } = await getOrderDetailApi(orderId);
        dispatch(setOrderDetail(data)); // 使用 Redux 存储订单详情数据
        console.log(data);

      } catch (error) {
        console.error("Error fetching OrderDetail:", error);
      }
    };

    fetchOrderDetail();
  }, [dispatch, orderId, token]);

  return (
    <FlatList
      data={orderDetail}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <OrderDetailCard item={item} />}
    />
  );
}
