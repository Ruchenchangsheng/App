import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getOrderListApi } from "../../api/UserApi";
import OrderCard from "../../components/Cards/OrderCard";
import UnLogin from "../../components/Cards/UnLogin";
import { getOrders } from "../../redux/actions/userActions";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OrderScreen() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.user.orders);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn); // Check if user is logged in
  const token = useSelector((state) => state.user.token);

  const fetchOrders = async () => {
    const uid = await AsyncStorage.getItem('userId');
    try {

      const {data} = await getOrderListApi(uid);
      dispatch(getOrders(data));
      console.log(data);

    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      // Fetch orders only if the user is logged in
      if (isLoggedIn) {
        fetchOrders();
      }
    }, [dispatch, token, isLoggedIn])
  );

  // Conditional rendering based on user login status
  return isLoggedIn ? (
    <FlatList
      data={orders}
      // keyExtractor={(item) => item.uuid.toString()}
      renderItem={({ item }) => <OrderCard item={item} />}
    />
  ) : (
    <UnLogin />
  );
}
