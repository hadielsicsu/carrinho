import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

const SummaryScreen = () => {
  const navigation = useNavigation<any>();

  const handleBackToProducts = () => {
    navigation.navigate("Product");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resumo da Venda</Text>
      <Text style={styles.summaryText}>Obrigado pela sua compra!</Text>
      <Button title="Voltar aos Produtos" onPress={handleBackToProducts} />
    </View>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  summaryText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
});
