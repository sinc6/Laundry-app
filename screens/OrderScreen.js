import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        source={require("../assets/thumbs.json")}
        style={{
          height: 360,
          width: 300,
          alignSelf: "center",
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />

      <Text
        style={{
          marginTop: 40,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Your order has been placed
      </Text>

      <LottieView
        source={require("../assets/sparkle.json")}
        style={{
          height: 300,
          position: "absolute",
          top: 100,
          width: 300,
          alignSelf: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />

      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={{
          marginTop: 60,
          backgroundColor: "#088F8F",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>Go to Home</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
