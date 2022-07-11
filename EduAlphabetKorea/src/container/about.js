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

import { getDataRole, getService, getDataUserID, postService } from "../service/apiTemplate"


export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: "",
      userRole: "",
      userId: "",
      ismodal: false,
      isloading: false,
      abouts_text: "",
      abouts_text_change: "",
      abouts_text_id: ""
    };
  }

  async componentDidMount() {
    const about = await getService("getabout")
    const userRole = await getDataRole()
    const userId = await getDataUserID()
    this.setState({ data: about.data.abouts_text, abouts_text: about.data.abouts_text, abouts_text_id: about.data.id, userRole: userRole, userId: userId })
  }

  async refresh() {
    const about = await getService("getabout")
    this.setState({ data: about.data.abouts_text, abouts_text: about.data.abouts_text })
  }

  updateAbout = async () => {
    this.setState({
      isloading: !this.state.isloading
    })
    const datasend = {
      "id": this.state.abouts_text_id,
      "abouts_text": this.state.abouts_text_change
    }

    const updateAbouts = await postService(datasend, "about")
    console.log(updateAbouts)
    if (updateAbouts.meta.code == 200 && updateAbouts.meta.status == "success") {
      ToastAndroid.show(`${updateAbouts.meta.message}`, ToastAndroid.LONG);
      setTimeout(() => {
        this.setState({
          isloading: !this.state.isloading,
          ismodal: !this.state.ismodal
        })
        this.refresh()
      }, 2000);
    } else {
      ToastAndroid.show(`${updateAbouts.meta.message}`, ToastAndroid.LONG);
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
          <Text>Tentang Aplikasi</Text>
        </View>
        <ScrollView>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ fontSize: 15, marginTop: 15, margin: 5, textAlign: "justify", paddingLeft: 15, paddingRight: 15, color: "#000" }}>{this.state.data}</Text>
          </View>
        </ScrollView>
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
                    this.refresh()
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
                  }}>Update About </Text>
                  <TextInput
                    value={this.state.abouts_text_change == "" ? this.state.abouts_text : this.state.abouts_text_change}
                    placeholder='Masukkan about aplikasi'
                    multiline={true}
                    style={{
                      height: 300,
                      width: "100%",
                      textAlignVertical: "top",
                      fontSize: 15,
                      backgroundColor: "#aeaeae"
                    }}
                    onChangeText={input => this.setState({ abouts_text_change: input })}
                  />
                  <View style={{
                    alignItems: "center"
                  }}>
                    <TouchableOpacity
                      onPress={() => this.updateAbout()}
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

        {this.state.userRole == "admin" ?
          <TouchableOpacity
            onPress={() => this.setState({
              ismodal: !this.state.ismodal
            })}
            style={{
              height: 80,
              width: 80,
              position: "absolute",
              right: 10,
              bottom: 10,
              borderRadius: 40,
              alignItems: "center",
              justifyContent: "center"
            }}>
            <Image
              source={{
                uri: "https://i.ibb.co/K9wjvN8/pencil.png"
              }}

              style={{
                height: 40,
                width: 40
              }}
            />
          </TouchableOpacity>
          :
          null
        }
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
