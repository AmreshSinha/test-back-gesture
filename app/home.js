import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
    const router = useRouter();

  return(
    <View style={styles.container}>
        <Text style={{ fontSize: 48, fontWeight: 700 }}>Home page</Text>
        <Pressable onPress={() => router.back()} style={{ borderWidth: 0.5, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 16 }}>
            <Text style={{ fontSize: 24 }}>Go Back</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    }
});
