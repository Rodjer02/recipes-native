import { Image, StyleSheet, Text, View } from "react-native";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import { colors } from "../assets/constants/colors";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useEffect } from "react";

const WelcomeScreen = ({ navigation }) => {
  const ringOnePadding = useSharedValue(0);
  const ringTwoPadding = useSharedValue(0);

  useEffect(() => {
    setTimeout(() => {
      ringOnePadding.value = withSpring(60);
      ringTwoPadding.value = withSpring(45);
    }, 1000);
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.bigCircle, { padding: ringOnePadding }]}>
        <Animated.View
          style={[styles.smallCircle, { padding: ringTwoPadding }]}
        >
          <Image
            style={styles.welcomeImage}
            source={require("../assets/images/welcome.png")}
          />
        </Animated.View>
      </Animated.View>
      <View>
        <Text style={styles.title}>Foody</Text>
        <Text style={styles.subTitle}>Food is always right</Text>
      </View>
    </SafeAreaView>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  subTitle: {
    color: "#fff",
  },
  title: {
    fontSize: 48,
    fontWeight: "600",
    color: "#fff",
  },
  bigCircle: {
    justifyContent: "center",
    alignItems: "center",
    // padding: 35,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 999,
  },
  smallCircle: {
    justifyContent: "center",
    alignItems: "center",
    // padding: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 999,
  },
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: colors.amber900,
  },
  welcomeImage: {
    width: 150,
    height: 150,
  },
});
