import { View, Text, Button } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "blue",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerRight: () => (
            <Button
              title="contact"
              onPress={() => {
                router.push("/contact");
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      <Stack.Screen
        name="blog/index"
        options={{ headerTitle: "All Blog Posts" }}
      />
    </Stack>
  );
};

export default _layout;
