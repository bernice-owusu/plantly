import { View, StyleSheet } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import PrimaryButton from "@/components/PrimaryButton";

export default function Profile() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  const handleOnPress = () => {
    toggleHasOnboarded();
  };
  return (
    <View style={styles.container}>
      <PrimaryButton title="Back to onboarding" onPress={handleOnPress} />
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
