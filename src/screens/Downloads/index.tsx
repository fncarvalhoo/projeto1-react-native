import React from "react";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  Foundation,
} from "@expo/vector-icons";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import filmeOnePiece from "../../../src/assets/luffy.png";
import iconPerfil from "../../../src/assets/iconPerfil.png";

export const Downloads = ({ navigation }) => {
  const Voltar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.textTopo}>Downloads</Text>
        <TouchableOpacity>
          <MaterialIcons
            style={styles.iconTopo}
            name="connected-tv"
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            style={styles.iconTopo}
            name="search"
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Voltar()}>
          <Image style={styles.userImage} source={iconPerfil} />
        </TouchableOpacity>
      </View>
      <View style={styles.topo}>
        <TouchableOpacity>
          <FontAwesome
            style={styles.gearIcon}
            name="gear"
            size={24}
            color="#808080"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.subText}>Smart Downloads</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="pencil" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.userArea}>
        <Image style={styles.userImage} source={iconPerfil} />
        <Text style={styles.textTopo}>Fernando</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.topo}>
          <Image source={filmeOnePiece} />
          <View>
            <Text style={styles.tituloFilme}>One Piece: Strong World</Text>
            <Text style={styles.info}>A12 | 644 MB</Text>
          </View>
          <MaterialCommunityIcons
            style={styles.iconCell}
            name="cellphone-check"
            size={24}
            color="white"
          />
        </View>
      </TouchableOpacity>
      <View style={styles.topo}>
        <AntDesign
          style={styles.DownloadIcon}
          name="download"
          size={24}
          color="white"
        />
        <View>
          <Text style={styles.smartDownload}>SMART DOWNLOADS</Text>
          <Text style={styles.DownloadVoce}>Downloads para você</Text>
        </View>
      </View>
      <View>
        <Text style={styles.DownloadInfo}>
          Aqui você verá as séries e filmes que baixamos para você. Volte para
          conferir o que encontramos.
        </Text>
      </View>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Encontre mais titulos para baixar</Text>
      </TouchableOpacity>
      <View style={styles.Navigation}>
        <TouchableOpacity>
          <View style={styles.NavigationBloco}>
            <Foundation name="home" size={24} color="white" />
            <Text style={styles.NavigationText}>Início</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.NavigationBloco}>
            <MaterialCommunityIcons
              name="play-box-multiple"
              size={24}
              color="white"
            />
            <Text style={styles.NavigationText}>Novidades</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.NavigationBloco}>
            <MaterialCommunityIcons
              name="download-circle"
              size={24}
              color="white"
            />
            <Text style={styles.NavigationText}>Downloads</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
