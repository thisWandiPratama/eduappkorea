import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Modal,
  Dimensions,
  TextInput,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';

var { width } = Dimensions.get('window');

import { getDataRole, getService, getDataUserID, postService } from "../service/apiTemplate"

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userRole: "",
      userId: "",
      ismodal: false,
      isloading: false,
      alphabets_korea: "",
      consonants: "",
      alphabets_indonesia: ""
    };
  }

  async componentDidMount() {
    const categori = await getService("all")
    const userRole = await getDataRole()
    const userId = await getDataUserID()
    this.setState({ data: categori.data, userRole: userRole, userId: userId })
  }

  async getDataNew() {
    const categori = await getService("all")
    const userRole = await getDataRole()
    const userId = await getDataUserID()
    this.setState({ data: categori.data, userRole: userRole, userId: userId })
  }

  renderItem = () => {
    if(this.state.userRole=="admin"){
      return this.state.data.map((value, index) => {
        return (
          <TouchableOpacity
            onLongPress={() => this.deleteAlphabet(value.id)}
            key={index} style={{
              backgroundColor: "#DCDCDC",
              width: 150,
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 12,
              borderRadius: 15
            }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000", textAlign: "center", flexWrap: "wrap" }}>{value.alphabets_korea}</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "red", textAlign: "center", flexWrap: "wrap" }}>{value.consonants}</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000", flexWrap: "wrap", textAlign: "center" }} >{value.alphabets_indonesia}</Text>
          </TouchableOpacity>
        )
      })
    }else{
      return this.state.data.map((value, index) => {
        return (
          <View
            key={index} style={{
              backgroundColor: "#DCDCDC",
              width: 150,
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 12,
              borderRadius: 15
            }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000", textAlign: "center", flexWrap: "wrap" }}>{value.alphabets_korea}</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "red", textAlign: "center", flexWrap: "wrap" }}>{value.consonants}</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000", flexWrap: "wrap", textAlign: "center" }} >{value.alphabets_indonesia}</Text>
          </View>
        )
      })
    }
  }


  simpanAlphabet = async () => {
    if (this.state.alphabets_korea.length == 0 || this.state.consonants.length == 0 || this.state.alphabets_indonesia.length == 0) {
      Alert.alert("Alert Alphabet", "Semua Wajib Diisi")
    } else {
      this.setState({
        isloading: !this.state.isloading
      })
      const datasend = {
        "alphabets_korea": this.state.alphabets_korea,
        "consonants": this.state.consonants,
        "alphabets_indonesia": this.state.alphabets_indonesia
      }

      const sendAlphabet = await postService(datasend, "save")
      console.log(sendAlphabet)
      if (sendAlphabet.meta.code == 200 && sendAlphabet.meta.status == "success") {
        ToastAndroid.show(`${sendAlphabet.meta.message}`, ToastAndroid.LONG);
        setTimeout(() => {
          this.setState({
            isloading: !this.state.isloading,
            ismodal: !this.state.ismodal
          })
          this.getDataNew()
        }, 2000);
      } else {
        ToastAndroid.show(`${sendAlphabet.meta.message}`, ToastAndroid.LONG);
      }
    }
  }

  deleteAlphabet = async (id) => {
    const datasend = {
      "id": id,
    }
    const deleteAlphabet = await postService(datasend, "delete")
    if (deleteAlphabet.meta.code == 200 && deleteAlphabet.meta.status == "success") {
      ToastAndroid.show(`${deleteAlphabet.meta.message}`, ToastAndroid.LONG);
      this.getDataNew()
    } else {
      ToastAndroid.show(`${deleteAlphabet.meta.message}`, ToastAndroid.LONG);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          height: 50,
          width: "100%",
          flexDirection: "row",
          alignItems: "center"
        }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              source={{ uri: "https://i.ibb.co/LzvDgxV/arrow.png" }}
              style={{
                height: 40,
                width: 40,
                marginRight: 20,
                marginLeft: 10
              }}
            />
          </TouchableOpacity>
          <Text>Menu Alphabet</Text>
        </View>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
            {this.renderItem()}
          </View>
        </ScrollView>
        {this.state.userRole == "admin" ?
          <TouchableOpacity
            onPress={() => this.setState({
              ismodal: !this.state.ismodal
            })}
            style={{
              height: 80,
              width: 80,
              backgroundColor: "#AEE9B6",
              position: "absolute",
              right: 10,
              bottom: 10,
              borderRadius: 40,
              alignItems: "center",
              justifyContent: "center"
            }}>
            <Text style={{ fontSize: 40, color: "red" }}>+</Text>
          </TouchableOpacity>
          :
          null
        }
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.ismodal}
          onRequestClose={() => {
            this.setState({ ismodal: !this.state.ismodal });
          }}
        >
          <ScrollView>
            <View style={{
              flex: 1,
              backgroundColor: "transparent",
              alignItems: "center",
              marginTop: "50%"
            }}>
              <View style={{ height: "100%", width: "80%", backgroundColor: "white", borderRadius: 20, padding: 20, alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      ismodal: !this.state.ismodal,
                    })
                    this.renderItem()
                  }}
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: "white",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                    position: "absolute",
                    right: -15,
                    top: -15
                  }}>
                  <Text style={{
                    fontSize: 30,
                    color: "red",
                    fontWeight: "bold"
                  }} >X</Text>
                </TouchableOpacity>
                <View style={{
                  height: "100%",
                  width: "100%",
                }}>
                  <Text style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#000",
                    textAlign: "center"
                  }}>Tambahkan Alphabet</Text>
                  <View style={{
                    marginTop: 20
                  }}>
                    <Text style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000"
                    }}>Alphabet Korea</Text>
                    <TextInput
                      placeholder='Contoh: ㄱ'
                      onChangeText={(input) => this.setState({
                        alphabets_korea: input
                      })}
                      style={{
                        height: 50,
                        width: "100%",
                        borderBottomColor: "#aeaeae",
                        borderBottomWidth: 1
                      }}
                    />
                  </View>
                  <View style={{
                    marginTop: 20
                  }}>
                    <Text style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000"
                    }}>Consonants</Text>
                    <TextInput
                      placeholder='Contoh: 기역'
                      onChangeText={(input) => this.setState({
                        consonants: input
                      })}
                      style={{
                        height: 50,
                        width: "100%",
                        borderBottomColor: "#aeaeae",
                        borderBottomWidth: 1
                      }}
                    />
                  </View>
                  <View style={{
                    marginTop: 20
                  }}>
                    <Text style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000"
                    }}>Alphabet Indonesia</Text>
                    <TextInput
                      placeholder='Contoh: giyeok'
                      onChangeText={(input) => this.setState({
                        alphabets_indonesia: input
                      })}
                      style={{
                        height: 50,
                        width: "100%",
                        borderBottomColor: "#aeaeae",
                        borderBottomWidth: 1
                      }}
                    />
                  </View>
                  <View style={{
                    alignItems: "center"
                  }}>
                    <TouchableOpacity
                      onPress={() => this.simpanAlphabet()}
                      style={{
                        marginTop: 20,
                        height: 50,
                        width: "90%",
                        backgroundColor: "#AEE9B6",
                        alignItems: 'center',
                        justifyContent: "center",
                        borderRadius: 20
                      }}>
                      {this.state.isloading == false ?
                        <Text style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "red"
                        }}>Simpan</Text>
                        :
                        <ActivityIndicator />}
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </Modal>
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
