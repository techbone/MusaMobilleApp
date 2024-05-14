import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const router = useRouter();

const contact = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Contact Page</Text>
      <Button onPress={() => router.back()} title="go back"></Button>
    </View>
  );
};

export default contact;
