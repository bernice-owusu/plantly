import { FlatList, StyleSheet, View } from "react-native";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { PlantCard } from "@/components/PlantCard";
import { usePlantStore } from "@/store/plantStore";
import PrimaryButton from "@/components/PrimaryButton";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const router = useRouter();
  const plants = usePlantStore((state) => state.plants);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={plants}
        renderItem={({ item }) => <PlantCard plant={item} />}
        ListEmptyComponent={
          <PrimaryButton
            title="Add your first plant"
            onPress={() => {
              router.navigate("/new");
            }}
          />
        }
      />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    padding: 12,
  },
});
