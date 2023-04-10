import { View, Pressable, Text, StyleSheet } from "react-native";
import { News } from "./components/News";

export const Top = () => {
  return (
    <View style={styles.container}>
      <News />
      <Pressable>
        <Text>新古文単語</Text>
      </Pressable>
      <Pressable>
        <Text>ゴロゴブックス</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
