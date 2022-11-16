import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    padding: 10,
    marginTop: 30,
    height: "100%",
  },
  topo: {
    flexDirection: "row",
    marginBottom: 30,
  },
  textTopo: {
    color: "#fff",
    marginRight: 175,
    fontWeight: "bold",
    fontSize: 20,
  },
  iconTopo: {
    marginTop: 3,
    marginRight: 15,
    fontSize: 25,
  },
  subText: {
    color: "#808080",
    marginRight: 212,
  },
  gearIcon: {
    marginRight: 10,
  },
  userArea: {
    flexDirection: "row",
    marginBottom: 5,
  },
  tituloFilme: {
    color: "#fff",
    marginLeft: 10,
    marginTop: 25,
    fontWeight: "bold",
  },
  info: {
    color: "#808080",
    marginLeft: 10,
  },
  iconCell: {
    marginTop: 35,
    marginLeft: 20,
    fontSize: 30,
  },
  userImage: {
    marginRight: 10,
  },
  smartDownload: {
    fontSize: 10,
    color: "#808080",
    marginLeft: 15,
  },
  DownloadVoce: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 15,
  },
  DownloadIcon: {
    marginTop: 10,
  },
  DownloadInfo: {
    color: "#808080",
    marginTop: 20,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#808080",
    borderStyle: "dashed",
    padding: 20,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  botao: {
    marginTop: 190,
    marginLeft: 45,
    marginBottom: 25,
    color: "#fff",
    backgroundColor: "#3c3c3c",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  Navigation: {
    marginLeft: -20,
    marginRight: -20,
    paddingTop: 10,
    paddingBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#151515",
    fontSize: 25,
  },
  NavigationText: {
    color: "#fff",
    fontSize: 15,
  },
  NavigationBloco: {
    alignItems: "center",
    width: 85,
  },
});
