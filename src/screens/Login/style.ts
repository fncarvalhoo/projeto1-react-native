import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    padding: 20,
  },
  topo: {
    flexDirection: "row",
  },
  seta: {
    marginTop: 24,
  },
  logo: {
    marginTop: 10,
    display: "flex",
    height: 50,
    width: 150,
    marginBottom: 200,
  },
  input: {
    backgroundColor: "#3c3c3c",
    color: "#fff",
    fontSize: 17,
    padding: Platform.OS === "ios" ? 15 : 10,
    height: 65,
    borderRadius: 9,
    width: "100%",
    marginBottom: 15,
    primary: "#E50914",
    background: "#3c3c3c",
  },
  botao: {
    marginTop: 10,
    marginBottom: 25,
    color: "#fff",
    backgroundColor: "#000",
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#fff",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  textoBotaoSecundario: {
    fontSize: 14,
    marginBottom: 25,
    color: "rgba(255, 255, 255,0.6)",
    paddingLeft: 127,
  },
  textoBotaoTeste: {
    fontSize: 16,
    marginBottom: 25,
    color: "rgba(255, 255, 255, 0.9)",
    paddingLeft: 56,
    fontWeight: "bold",
  },
  text: {
    color: "rgba(2555, 255, 255, 0.6)",
    textAlign: "center",
    marginTop: 30,
  },
  mostrar: {
    zIndex: 10,
    width: 80,
    alignItems: "center",
    position: "absolute",
    marginLeft: 280,
    marginTop: 22,
  },
  mostrarTexto: {
    color: "#808080",
    fontSize: 15,
  },
  saibaMais: {
    color: "#808080",
    fontWeight: "bold",
  },
});
