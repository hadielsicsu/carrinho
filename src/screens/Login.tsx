import { StyleSheet, TextInput, Text, TouchableOpacity, Image, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const { handleLogin } = useContext(UserContext);

  const [email, setEmail] = useState("karn.yong@melivecode.com");
  const [password, setPassword] = useState("melivecode");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: "https://img.freepik.com/fotos-gratis/renderizacao-3d-de-menino-com-oculos-e-camisa-azul_1142-50994.jpg?w=1380&t=st=1720134055~exp=1720134655~hmac=0ae1c4a58ffc484ccaddd09a6a35585a63e2568ba60f98f08242e875ee830997" }} // Substitua pela URL da imagem do perfil do usuário
        />
      </View>
      <Text style={styles.title}>Bem-vindo de volta!</Text>
      <Text style={styles.subtitle}>Faça login para continuar suas compras</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        placeholder="Insira seu email"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Insira sua senha"
        placeholderTextColor="#666"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLogin(email, password)}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    padding: 20,
  },
  profileContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#3D737F",
  },
  title: {
    color: "#333",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "#666",
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    color: "#333",
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#3D737F",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Login;
