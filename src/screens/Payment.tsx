// PaymentScreen.js
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [boletoNumber, setBoletoNumber] = useState('');
  const [pixKey, setPixKey] = useState('');
  const navigation = useNavigation<any>();

  const handlePayment = () => {
    const paymentDetails = {
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
      cardHolder,
      boletoNumber,
      pixKey,
    };
    navigation.navigate('OrderStatus', paymentDetails);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pagamento</Text>
      <View style={styles.paymentMethods}>
        <TouchableOpacity 
          style={[styles.paymentMethod, paymentMethod === 'creditCard' && styles.selectedMethod]} 
          onPress={() => setPaymentMethod('creditCard')}
        >
          <Text style={styles.paymentMethodText}>Cartão de Crédito</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.paymentMethod, paymentMethod === 'boleto' && styles.selectedMethod]} 
          onPress={() => setPaymentMethod('boleto')}
        >
          <Text style={styles.paymentMethodText}>Boleto</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.paymentMethod, paymentMethod === 'pix' && styles.selectedMethod]} 
          onPress={() => setPaymentMethod('pix')}
        >
          <Text style={styles.paymentMethodText}>PIX</Text>
        </TouchableOpacity>
      </View>

      {paymentMethod === 'creditCard' && (
        <View style={styles.cardDetails}>
          <TextInput
            style={styles.input}
            placeholder="Número do Cartão"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Data de Validade (MM/AA)"
            value={expiryDate}
            onChangeText={setExpiryDate}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            value={cvv}
            onChangeText={setCvv}
            secureTextEntry
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Nome do Titular"
            value={cardHolder}
            onChangeText={setCardHolder}
          />
        </View>
      )}

      {paymentMethod === 'boleto' && (
        <View style={styles.cardDetails}>
          <TextInput
            style={styles.input}
            placeholder="Número do Boleto"
            value={boletoNumber}
            onChangeText={setBoletoNumber}
            keyboardType="numeric"
          />
        </View>
      )}

      {paymentMethod === 'pix' && (
        <View style={styles.cardDetails}>
          <TextInput
            style={styles.input}
            placeholder="Chave PIX"
            value={pixKey}
            onChangeText={setPixKey}
          />
        </View>
      )}

      <Button title="Efetuar Pagamento" onPress={handlePayment} />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  paymentMethods: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  paymentMethod: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  selectedMethod: {
    backgroundColor: "#3D737F",
  },
  paymentMethodText: {
    color: "#333",
    fontWeight: "bold",
  },
  cardDetails: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});
