import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const BookScreen = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          paddingHorizontal: 20,
        }}
      >
        <Ionicons name="md-arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>

      <View>
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 20,
            margin: 18,
          }}
        >
          <View
            style={{
              padding: 20,
            }}
          >
            <Image
              source={{ uri: item.imageLink }}
              height={450}
              style={{
                borderRadius: 20,
                marginBottom: 10,
              }}
            />
            <View
              style={{
                marginVertical: 5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Rating
                </Text>
                <Text>Icon</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Reviews
                </Text>
                <Text
                  style={{
                    color: "#B2B2B2",
                  }}
                >
                  ({item.reviews})
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Price
                </Text>
                <Text
                  style={{
                    color: "#B2B2B2",
                  }}
                >
                  ${item.price}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "600",
            lineHeight: 33,
            marginBottom: 5,
          }}
        >
          {item.title}
        </Text>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              lineHeight: 24,
            }}
          >
            <Text
              style={{
                fontWeight: "500",
              }}
            >
              Author
            </Text>
            : {item.author}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              lineHeight: 24,
            }}
          >
            <Text
              style={{
                fontWeight: "500",
              }}
            >
              Country
            </Text>{" "}
            : {item.country}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              lineHeight: 24,
            }}
          >
            <Text
              style={{
                fontWeight: "500",
              }}
            >
              Language
            </Text>
            : {item.language}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              lineHeight: 24,
            }}
          >
            <Text
              style={{
                fontWeight: "500",
              }}
            >
              Year
            </Text>{" "}
            : {item.year}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              lineHeight: 24,
            }}
          >
            <Text
              style={{
                fontWeight: "500",
              }}
            >
              Pages
            </Text>
            : {item.pages}
          </Text>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: "#004D6D",
          // marginVertical: 20,
          marginTop: 20,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: 12,
          }}
        >
          <Text
            style={{
              marginRight: 10,
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            View Details
          </Text>
          <SimpleLineIcons name="share-alt" size={24} color="#fff" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({});
