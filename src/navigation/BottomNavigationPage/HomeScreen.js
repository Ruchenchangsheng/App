import React, { useState, useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { searchHotel } from "../../api/HotelApi";
import { useSelector } from "react-redux";
import HotelCards from "../../components/Cards/HotelCards";

export default function HomeScreen({ route }) {
  const searchDatas = useSelector((state) => state.query);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("HomeScreen--->", searchDatas);

      try {
        const response = await searchHotel(searchDatas);
        if (response.data && response.data.length > 0) {
          setHotels(response.data);
        } else {
          setError("No hotels found");
        }
      } catch (error) {
        console.error("Error searching hotels:", error);
        setError("Error searching hotels");
      } finally {
        setLoading(false);
      }
    };

    if (Object.keys(searchDatas).length > 0) {
      setLoading(true);
      fetchData();
    }
  }, [searchDatas]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={{textAlign:'center',fontSize:40,fontWeight:'bold',color:'gray'}}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text  style={{textAlign:'center',fontSize:40,fontWeight:'bold',color:'gray'}}>Error: </Text>
        <Text  style={{textAlign:'center',fontSize:40,fontWeight:'bold',color:'gray'}}>{error}</Text>
      </View>
    );
  }

  if (hotels.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={{textAlign:'center',fontSize:40,fontWeight:'bold',color:'gray'}}>No suitable hotels found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={hotels}
      keyExtractor={(item) => item.hotelId.toString()}
      renderItem={({ item }) => <HotelCards item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
