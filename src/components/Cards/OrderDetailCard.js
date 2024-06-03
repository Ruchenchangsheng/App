import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

export default function OrderDetailCard({ item }) {
  // 将时间戳转换为日期时间格式，如果timestamp为null，则返回空字符串
  const formatTimestamp = (timestamp, preciseToSecond) => {
    if (!timestamp) return ""; // 处理时间戳为null的情况
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
    <Card containerStyle={styles.cardContainer}>
      <View style={styles.textContainer}>
        <View style={styles.orderInfoContainer}>
          <Text style={styles.orderInfoText}>Order ID: {item.id}</Text>
          <Text style={styles.orderInfoText}>Hotel Name: {item.hotelName}</Text>

          <Text style={styles.orderInfoText}>
            createTime: {formatTimestamp(item.createTime, true)}
          </Text>
          <Text style={styles.orderInfoText}>
            Check-in Date:{" "}
            {item.checkinTime ? formatTimestamp(item.checkinTime, true) : "N/A"}
          </Text>
          <Text style={styles.orderInfoText}>
            Check-out Date:{" "}
            {item.checkoutTime
              ? formatTimestamp(item.checkoutTime, true)
              : "N/A"}
          </Text>
          <Text style={styles.orderInfoText}>
            Start Date: {formatTimestamp(item.startDate, false)}
          </Text>
          <Text style={styles.orderInfoText}>
            End Date: {formatTimestamp(item.endDate, false)}
          </Text>

          {/* <Text style={styles.orderInfoText}>
            createTime:{formatTimestamp(item.createTime)}
          </Text>
          <Text style={styles.orderInfoText}>
            Check-in Date: {formatTimestamp(item.checkinTime)}
          </Text>
          <Text style={styles.orderInfoText}>
            Check-out Date: {formatTimestamp(item.checkoutTime)}
          </Text>
          <Text style={styles.orderInfoText}>
            Start Date: {formatTimestamp(item.startDate)}
          </Text>
          <Text style={styles.orderInfoText}>
            End Date: {formatTimestamp(item.EndDate)}
          </Text> */}
          <Text style={styles.orderInfoText}>Address: {item.address}</Text>
          <Text style={styles.orderInfoText}>Price: {item.price}$</Text>
          <Text style={styles.orderInfoText}>Size:{item.size}m²</Text>
          <Text style={styles.orderInfoText}>Room Type: {item.type}</Text>
          <Text style={styles.orderInfoText}>
            Maximum occupancy:{item.numOfGuests}
          </Text>

          <Text style={styles.orderInfoText}>
            Status:
            <Text style={[styles.StatusText, getStatusStyle(item.status)]}>
              {getStatusText(item.status)}
            </Text>
          </Text>

          {/* <Text style={styles.orderInfoText}>City: {item.cityName}</Text> */}
          {/* <Text style={styles.orderInfoText}>Type: {item.typeName}</Text> */}
          {/* <View style={styles.paymentStatusContainer}>
            <Text style={styles.paymentStatusText}>
              {item.paymentStatus === 1 ? "Paid" : "Unpaid"}
            </Text>
          </View> */}
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    borderRadius: 15,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderInfoContainer: {
    flex: 1,
    padding: 15,
  },
  orderInfoText: {
    marginBottom: 8,
    fontSize: 16,
  },
  paymentStatusContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  paymentStatusText: {
    alignSelf: "flex-end",
    fontSize: 20,
    color: "#AD1357",
    fontWeight: "bold",
  },
  pending: {
    // 待审阅样式
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: 25,
  },
  failed: {
    // 不通过样式
    color: "#EE2C2C",
    fontWeight: "bold",
    fontSize: 25,
  },
  success: {
    color: "#7FFF00",
    fontWeight: "bold",
    fontSize: 25,
  },
});
