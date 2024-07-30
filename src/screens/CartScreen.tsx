import { StyleSheet, Text, View, FlatList, Image, Button } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { useCartContext } from "../contexts/CartContext";
import { ICartItem } from "../types/Product";

const CartScreen = () => {
  const { cart, getCart, removeProduct } = useCartContext();
  const navigation = useNavigation<any>();

  useEffect(() => {
    getCart();
  }, []);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
  };

  const handleRemoveItem = (id) => {
    removeProduct(id);
  };

  const RenderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.product.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.product.title}</Text>
        <Text style={styles.itemPrice}>${item.product.price.toFixed(2)}</Text>
        <Text style={styles.itemQuantity}>Quantidade: {item.quantity}</Text>
        <Button title="Excluir" onPress={() => handleRemoveItem(item.product.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carrinho</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={item => item.product.id.toString()}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Total: ${calculateTotal()}</Text>
        <Button 
          title="Ir para Pagamento" 
          onPress={() => navigation.navigate('Payment')} 
        />
      </View>
    </View>
  );
};

export default CartScreen;

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
    marginBottom: 10,
    textAlign: "center",
  },
  list: {
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: "90%",
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: "#3D737F",
  },
  itemQuantity: {
    fontSize: 14,
    color: "#666",
  },
  summary: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
