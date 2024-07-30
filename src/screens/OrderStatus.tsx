import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useCartContext } from "../contexts/CartContext";
import { useNavigation } from '@react-navigation/native';

const OrderConfirmationScreen = () => {
  const { cart } = useCartContext();
  const navigation = useNavigation<any>();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
  };

  const handleBackToHome = () => {
    navigation.navigate('Product');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pedido Confirmado!</Text>
      <Text style={styles.thankYouMessage}>Obrigado pela sua compra! Aqui estão os detalhes do seu pedido:</Text>
      <View style={styles.orderDetails}>
        {cart.map((item) => (
          <View key={item.product.id} style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.product.title}</Text>
            <Text style={styles.itemPrice}>${item.product.price.toFixed(2)} x {item.quantity}</Text>
          </View>
        ))}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
        </View>
      </View>
      <Button title="Voltar para a Home" onPress={handleBackToHome} />
    </View>
  );
};

export default OrderConfirmationScreen;

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
  thankYouMessage: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  orderDetails: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    color: "#333",
  },
  itemPrice: {
    fontSize: 16,
    color: "#3D737F",
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "right",
  },
});
