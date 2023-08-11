import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const BookList = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Book", {
          item: item,
        })
      }
      style={
        {
          // backgroundColor: "red",
        }
      }
    >
      <Image
        source={{ uri: item.imageLink }}
        height={300}
        style={{
          borderRadius: 10,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          lineHeight: 20,
          color: "#000000",
          marginVertical: 12,
        }}
      >
        {item.title}
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            marginRight: 5,
          }}
        >
          rating
        </Text>
        <Text
          style={{
            color: "#B2B2B2",
          }}
        >
          ({item.reviews})
        </Text>
      </View>
      <Text
        style={{
          marginVertical: 10,
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        ${item.price}
      </Text>
    </Pressable>
  );
};

export default BookList;

const styles = StyleSheet.create({});
