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

var { height, width } = Dimensions.get('window');

import { getService, postService, getDataRole, getDataUserID } from "../service/apiTemplate"


export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userRole: "",
      userId: "",
      isloading: false,
      ismodal: false,
      word_korea: "",
      consonants: "",
      word_indonesia: ""
    };
    this.arrayholder = this.state.data;
  }

  searchFilterFunction = text => {
    const newData = this.state.data.filter(item => {
      const itemData = `${item.word_indonesia.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    console.log(newData)
    this.setState({ data: newData });
  };


  async componentDidMount() {
    const categori = await getService("all_kamus")
    const userRole = await getDataRole()
    const userId = await getDataUserID()
    console.log(categori.data)
    this.setState({ data: categori.data, userRole: userRole, userId: userId })
  }


  async refresh() {
    const categori = await getService("all_kamus")
    console.log(categori.data)
    this.setState({ data: categori.data })
  }



  renderItem = () => {
    if (this.state.userRole == "admin") {
      return this.state.data.map((value, index) => {
        return (
          <TouchableOpacity key={index}
            onLongPress={() => this.deleteKamus(value.id)}
            style={{
              backgroundColor: "#DCDCDC",
              width: "90%",
              height: 100,
              justifyContent: 'center',
              margin: 12,
              borderRadius: 15,
              paddingLeft: 10
            }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>Kata Korea :{value.word_korea}</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>Consonants : {value.consonants}</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }} >Bahasa Indonesia : {value.word_indonesia}</Text>
          </TouchableOpacity>
        )
      })
    } else {
      return this.state.data.map((value, index) => {
        return (
          <View key={index}
            style={{
              backgroundColor: "#DCDCDC",
              width: "90%",
              height: 100,
              justifyContent: 'center',
              margin: 12,
              borderRadius: 15,
              paddingLeft: 10
            }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>Kata Korea :{value.word_korea}</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>Consonants : {value.consonants}</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }} >Bahasa Indonesia : {value.word_indonesia}</Text>
          </View>
        )
      })
    }
  }

  search = async () => {
    const data = {
      "search": this.state.search
    }
    const categori = await postService(data, "search_kamus")
    console.log(categori.data)
    this.setState({ data: categori.data })
  }




  simpanKamus = async () => {
    if (this.state.word_korea.length == 0 || this.state.consonants.length == 0 || this.state.word_indonesia.length == 0) {
      Alert.alert("Alert Kamus", "Semua Wajib Diisi")
    } else {
      this.setState({
        isloading: !this.state.isloading
      })
      const datasend = {
        "word_korea": this.state.word_korea,
        "consonants": this.state.consonants,
        "word_indonesia": this.state.word_indonesia
      }

      const sendKamus = await postService(datasend, "save_kamus")
      console.log(sendKamus)
      if (sendKamus.meta.code == 200 && sendKamus.meta.status == "success") {
        ToastAndroid.show(`${sendKamus.meta.message}`, ToastAndroid.LONG);
        setTimeout(() => {
          this.setState({
            isloading: !this.state.isloading,
            ismodal: !this.state.ismodal
          })
          this.refresh()
        }, 2000);
      } else {
        ToastAndroid.show(`${sendKamus.meta.message}`, ToastAndroid.LONG);
      }
    }
  }

  deleteKamus = async (id) => {
    const datasend = {
      "id": id,
    }
    const deleteKamus = await postService(datasend, "delete_kamus")
    if (deleteKamus.meta.code == 200 && deleteKamus.meta.status == "success") {
      ToastAndroid.show(`${deleteKamus.meta.message}`, ToastAndroid.LONG);
      this.refresh()
    } else {
      ToastAndroid.show(`${deleteKamus.meta.message}`, ToastAndroid.LONG);
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
          <Text>Kamus Korea</Text>
        </View>
        <View style={{
          height: 100,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <TextInput
            placeholder='Search Kata Indonesia'
            onChangeText={text => this.searchFilterFunction(text)}
            style={{
              shadowColor: '#474747',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,

              elevation: 12,
              backgroundColor: "#e2e2e2",
              height: 50,
              width: "70%"
            }}

          />
          <TouchableOpacity onPress={() => this.refresh()} style={{
            height: 50, width: 100,
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "red"
            }}>Refresh</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ flex: 1, alignItems: "center" }}>
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
                  }}>Tambahkan Word Kamus</Text>
                  <View style={{
                    marginTop: 20
                  }}>
                    <Text style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000"
                    }}>Word Korea</Text>
                    <TextInput
                      placeholder='Contoh: ㄱ'
                      onChangeText={(input) => this.setState({
                        word_korea: input
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
                    }}>Word Indonesia</Text>
                    <TextInput
                      placeholder='Contoh: giyeok'
                      onChangeText={(input) => this.setState({
                        word_indonesia: input
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
                      onPress={() => this.simpanKamus()}
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
                        <ActivityIndicator />
                      }
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
