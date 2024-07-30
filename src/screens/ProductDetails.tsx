import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { ProductDTO } from "../types/Product";

const ProductDetails = () => {
  const route = useRoute<any>();
  const  product = route.params as ProductDTO;
console.log('log details',product)
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    padding: 10,
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 20,
    color: "#3D737F",
    textAlign: "center",
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
});
