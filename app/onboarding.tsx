import PlantlyImage from "@/components/PlantlyImage";
import PrimaryButton from "@/components/PrimaryButton";
import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

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
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}> Keep Your Plants Hydrated and Happy</Text>
      </View>
      <PlantlyImage />
      <PrimaryButton title="Let me in!" onPress={handleOnboarding} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
    paddingHorizontal: 8,
  },

  heading: {
    fontSize: 42,
    color: theme.colorWhite,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  tagline: {
    fontSize: 34,
    color: theme.colorWhite,
    textAlign: "center",
    fontFamily: "Caveat_400Regular",
  },
});
