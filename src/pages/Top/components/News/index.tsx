import {
  View,
  Pressable,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const dummyNewsList = [
  "新刊『○○○○○○○○』が発売されました！",
  "受験指南 第90回が投稿されました",
  "受験指南 第89回が投稿されました",
  "新刊『○○○○○○○○』が発売されます！",
  "web講座「古典文法をマスターする」が開催されます",
];

const width = Dimensions.get("window").width;

export const News = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>新着情報</Text>
      <View style={styles.horizontalLine} />
      <ScrollView contentContainerStyle={styles.newsItemList}>
        {dummyNewsList.map((news, index) => {
          return (
            <Text numberOfLines={1} style={styles.newsItem} key={index}>
              ・{news}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#101010",
    borderRadius: 20,
    borderWidth: 2,
    width: width * 0.8,
    height: 200,
  },
  horizontalLine: {
    borderBottomColor: "#101010",
    borderBottomWidth: 2,
    width: width * 0.8,
  },
  title: {
    color: "#20232a",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  newsItem: {
    color: "#20232a",
    fontSize: 16,
  },
  newsItemList: {
    flex: 1,
    gap: 10,
  },
});
