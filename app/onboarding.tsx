import PrimaryButton from "@/components/PrimaryButton";
import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export default function Onboarding() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  const handleOnboarding = () => {
    toggleHasOnboarded();
    router.replace("/");
  };
  return (
    <LinearGradient
      start={{ x: 0, y: 0.1 }}
      end={{ x: 1, y: 1 }}
      colors={[theme.colorGreen, theme.colorLimeGreen, theme.colorAppleGreen]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <PrimaryButton title="Let me in!" onPress={handleOnboarding} />
    </LinearGradient>
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
