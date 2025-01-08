import { View, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";

export default function Profile() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  const handleOnPress = () => {
    toggleHasOnboarded();
  };
  return (
    <View style={styles.container}>
      <Button title="Back to onboarding" onPress={handleOnPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
});
