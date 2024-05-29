import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Welcome to our app</Text>
      <Link href={"/about"}>
        <Text style={{ fontSize: 18 }}>Go to about page</Text>
      </Link>
      <Link href={"./blog"} asChild>
        <Button title="Go to blog" />
      </Link>
      <Link href={"/contact"} asChild>
        <Button title="Go to contact page" />
      </Link>
    </View>
  );
};

export default index;
