import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const navigation = useNavigation();

  const handlePayment = () => {
    // Implement your payment logic here
    Alert.alert("Pagamento realizado com sucesso!");
    navigation.navigate("Summary");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pagamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Número do Cartão"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Validade (MM/AA)"
        keyboardType="numeric"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        keyboardType="numeric"
        secureTextEntry
        value={cvv}
        onChangeText={setCvv}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do Titular"
        value={cardHolder}
        onChangeText={setCardHolder}
      />
      <Button title="Efetuar Compra" onPress={handlePayment} />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});
