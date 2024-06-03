import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function OrderCard({ item }) {
  const navigation = useNavigation();

// 将时间戳转换为日期时间格式，如果timestamp为null，则返回空字符串
const formatTimestamp = (timestamp, preciseToSecond) => {
  if (!timestamp) return ''; // 处理时间戳为null的情况
  const date = new Date(timestamp);
  if (preciseToSecond) {
    return date.toLocaleString(); // 精确到秒
  } else {
    return date.toLocaleDateString(); // 精确到日
  }
};

  // 根据不同的状态返回对应的样式
  const getStatusStyle = (status) => {
    switch (status) {
      case null:
        return styles.pending; // 待审阅
      case false:
        return styles.failed; // 不通过
      case true:
        return styles.success; // 通过
      default:
        return {}; // 默认样式
    }
  };

  // 根据不同的状态返回对应的文本
  const getStatusText = (status) => {
    switch (status) {
      case null:
        return "Pending"; // 待审阅
      case false:
        return "Failed"; // 预约失败
      case true:
        return "Success"; // 预约成功
      default:
        return ""; // 默认文本
    }
  };

  return (
    <TouchableOpacity
      // key={item.uuid}
      onPress={() => {
        console.log("Navigating to OrderDetail with orderId:", item.id);
        navigation.navigate("OrderDetail", { orderId: item.id });
      }}
    >
      <Card
        containerStyle={{
          ...styles.cardContainer,
          ...getStatusStyle(item.status),
        }}
      >
        <View style={styles.textContainer}>
          <View style={styles.orderIdContainer}>
            <Text style={styles.orderId}>orderId:{item.id}</Text>
            <Text style={styles.hotelName}>hotelName:{item.hotelName}</Text>
            <Text style={styles.orderDate}>
            createTime:{formatTimestamp(item.createTime, true)}
            </Text>
            <Text style={styles.price}>startDate:{formatTimestamp(item.startDate, false)}</Text>
            <Text style={styles.price}>endDate:{formatTimestamp(item.endDate, false)}</Text>

          </View>

          <View style={styles.StatusContainer}>
            <Text style={[styles.StatusText, getStatusStyle(item.status)]}>
            {getStatusText(item.status)}
            </Text>
          </View>

        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
    borderRadius: 15,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textContainer: {
    flexDirection: "row", // 设置为水平布局
    alignItems: "center", // 垂直居中对齐
  },
  StatusContainer: {
    flex: 1, // 占据剩余空间
    alignItems: "flex-end", // 右对齐
  },
  StatusText: {
    fontSize: 20,
    color: "#AD1357",
    fontWeight: "bold",
  },
  orderId: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 15,
  },

  hotelName: {
    marginBottom: 5,
    fontSize: 12,
  },
  orderDate: {
    marginBottom: 5,
    fontSize: 12,
  },
  price: {
    marginBottom: 5,
    fontSize: 15,
  },
  pending: {
    // 待审阅样式
    color:"#FFD700",
    fontWeight: "bold",
    fontSize: 25,
  },
  failed: {
    // 不通过样式
    color:"#EE2C2C",
    fontWeight: "bold",
    fontSize: 25,
  },
  success: {
    color:"#7FFF00",
    fontWeight: "bold",
    fontSize: 25,
  },
});
