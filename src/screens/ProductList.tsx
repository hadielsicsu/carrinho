import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { useCartContext } from "../contexts/CartContext";
import { ProductDTO } from "../types/Product";

const ProductList = () => {
  const {addProduct, cart} = useCartContext();
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const navigation = useNavigation<any>();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);



  const renderItem = ( item: ProductDTO ) => {
    console.log('ptem', item)
    return(
    <View style={styles.productContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </TouchableOpacity>
      <Button title="Incluir no carrinho" onPress={() =>  addProduct(item)} />
    </View>);}
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Electronics</Text>
      <FlatList
        data={products}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity 
        style={styles.cartButton}
        onPress={() => navigation.navigate('CartDetail')}
      >
        <Text style={styles.cartButtonText}>Ir para o carrinho ({cart.length})</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductList;

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
  productContainer: {
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
  productImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 16,
    color: "#3D737F",
  },
  cartButton: {
    backgroundColor: "#3D737F",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  cartButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
