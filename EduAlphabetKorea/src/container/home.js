import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  Dimensions
} from 'react-native';
var { height, width } = Dimensions.get('window');
import { removeToken } from '../service/token/token'


export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: "Menu Pembelajaran", color: "#FF4500", image: "https://img.icons8.com/color/70/000000/classroom.png" },
        { id: 2, title: "Menu Quiz", color: "#87CEEB", image: "https://img.icons8.com/color/70/000000/classroom.png" },
        { id: 3, title: "Tentang Aplikasi", color: "#4682B4", image: "https://img.icons8.com/dusk/70/000000/globe-earth.png" },
      ]
    };
  }

  clickEventListener(item) {
    Alert.alert(item.title)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          height: 50,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Text style={{
            fontSize: 25,
            color: "#000",
            fontWeight: "bold"
          }}>Selamat Datang</Text>
          <TouchableOpacity onPress={() => {
            removeToken()
            this.props.navigation.replace("Login")
          }} >
            <Text style={{
              fontSize: 25,
              color: "#000",
              fontWeight: "bold",
              paddingRight: 10
            }}>Logout</Text>
          </TouchableOpacity>
        </View>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]} onPress={() => {
                if (item.id == 1) {
                  this.props.navigation.navigate("Pembelajaran")
                } else if (item.id == 2) {
                  this.props.navigation.navigate("Quiz")
                } else {
                  this.props.navigation.navigate("About")
                }
              }}>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            )
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },

  /******** card **************/
  card: {
    width: width,
    height: 150,
    flexDirection: 'row',
    padding: 20,

    justifyContent: 'center',
    alignItems: 'center'
  },
  cardImage: {
    height: 70,
    width: 70,
  },
  title: {
    fontSize: 28,
    flex: 1,
    color: "#FFFFFF",
    fontWeight: 'bold',
    marginLeft: 40
  },
  subTitle: {
    fontSize: 12,
    flex: 1,
    color: "#FFFFFF",
  },
  icon: {
    height: 20,
    width: 20,
  }
});     
