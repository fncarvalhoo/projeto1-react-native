import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import netflix from "../../../src/assets/netflix.png";
import { AntDesign } from "@expo/vector-icons";

export const Login = ({ navigation }) => {
  const [mostrar, setMostrar] = useState("");
  const [ocultar, setOcultar] = useState(true);

  const Entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Downloads" }],
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          style={styles.seta}
        />
        <Image style={styles.logo} source={netflix} />
      </View>
      <TextInput
        placeholder="Email ou número de telefone"
        placeholderTextColor="#fff"
        style={styles.input}
        selectionColor={"#E50914"}
      />
      <View>
        <TextInput
          secureTextEntry={ocultar}
          placeholder="Senha"
          placeholderTextColor="#fff"
          style={styles.input}
          selectionColor={"#E50914"}
        />
        <TouchableOpacity
          style={styles.mostrar}
          onPress={() => setOcultar(!ocultar)}
        >
          {ocultar ? (
            <Text style={styles.mostrarTexto}>MOSTRAR</Text>
          ) : (
            <Text style={styles.mostrarTexto}>OCULTAR</Text>
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.botao} onPress={() => Entrar()}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textoBotaoSecundario}>Precisa de ajuda?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textoBotaoTeste}>
          Novo por aqui? Inscreva-se agora.
        </Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        O acesso está protegido pelo Google reCAPTCHA para garantir que você não
        é um robô.<Text style={styles.saibaMais}> Saiba mais.</Text>
      </Text>
    </View>
  );
};
