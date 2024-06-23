import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const router = useRouter();

const about = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>About-Page</Text>
      <Button onPress={() => router.back()} title="go back home"></Button>
      <Button onPress={() => router.back()}></Button>
    </View>
  );
};

export default about;
