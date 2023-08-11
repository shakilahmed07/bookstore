import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BookList from "../components/BookList";
import { EvilIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const [bookData, setBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getUserData = async () => {
    const url = "https://books-list-api.vercel.app/books";
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": "#b0@6hX8YasCq6^unOaPw1tqR",
    };
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });
      const bookData = await response.json();
      setBookData(bookData);
      setIsLoading(false);
      // console.log("data --->", bookData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <SafeAreaView>
      <Header />
      <View
        style={{
          marginHorizontal: 10,
          padding: 15,
          borderRadius: 50,
          marginBottom: 20,
          backgroundColor: "#D3D3D3",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <EvilIcons
            name="search"
            size={26}
            color="black"
            style={{
              marginRight: 10,
            }}
          />
          <TextInput
            onChangeText={setSearch}
            value={search}
            placeholder="Search"
            style={{
              fontSize: 16,
              lineHeight: 21,
              fontWeight: 400,
              paddingRight: 30,
            }}
          />
        </View>
      </View>
      <View>
        {isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#004D6D" />
          </View>
        ) : (
          <FlatList
            data={bookData?.data.filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )}
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 12,
                }}
              >
                <BookList item={item} />
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  loader: {
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});
