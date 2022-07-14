import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Modal,
  Alert,
  TextInput,
  ToastAndroid
} from 'react-native';

var { width } = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';


import { getDataRole, getService, getDataUserID, postService } from "../service/apiTemplate"

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      answer: [],
      user_id: 1,
      quiz_satu: "",
      quiz_dua: "",
      quiz_tiga: "",
      quiz_empat: "",
      quiz_lima: "",
      quiz_enam: "",
      quiz_tujuh: "",
      quiz_lapan: "",
      quiz_sembilan: "",
      quiz_sepuluh: "",
      answer_satu: 1,
      answer_dua: 2,
      answer_tiga: 3,
      answer_empat: 4,
      answer_lima: 5,
      answer_enam: 6,
      answer_tujuh: 7,
      answer_lapan: 8,
      answer_sembilan: 9,
      answer_sepuluh: 10,
      answer_array: [],
      check_answer: [],
      isloading: false,
      ismodal: false,
      answer_currect: [],

      //admin 
      userRole: "",
      userId: "",
      ismodaladd: false,
      isloadingadd: false,

      // add 
      quiz: "",
      a: "",
      b: "",
      c: "",
      d: "",
      currect: "",
    };
  }



  async componentDidMount() {
    const categori = await getService("all_quiz")
    console.log(categori.data)
    this.setState({ data: categori.data })
    const id = await AsyncStorage.getItem('id')
    const userRole = await getDataRole()
    const userId = await getDataUserID()
    this.setState({ id: id, userRole: userRole, userId: userId })
  }

  async refresh() {
    const categori = await getService("all_quiz")
    console.log(categori.data)
    this.setState({ data: categori.data })
    const id = await AsyncStorage.getItem('id')
    const userRole = await getDataRole()
    const userId = await getDataUserID()
    this.setState({ id: id, userRole: userRole, userId: userId })
  }

  renderItem = () => {
    if (this.state.userRole == "admin") {
      return this.state.data.map((value, index) => {
        return (
          <View key={index} style={{
            backgroundColor: "#DCDCDC",
            width: "90%",
            height: 180,
            margin: 12,
            borderRadius: 10,
            padding: 10
          }}>
            <Text style={{ fontSize: 13, fontWeight: "bold", color: "#000" }}>{index + 1}. {value.quiz}</Text>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => {
                  if (index + 1 == 1) {
                    this.setState({
                      quiz_satu: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 1,
                      answer: "a"
                    })
                  } else if (index + 1 == 2) {
                    this.setState({
                      quiz_dua: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 2,
                      answer: "a"
                    })
                  } else if (index + 1 == 3) {
                    this.setState({
                      quiz_tiga: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 3,
                      answer: "a"
                    })
                  } else if (index + 1 == 4) {
                    this.setState({
                      quiz_empat: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 4,
                      answer: "a"
                    })
                  } else if (index + 1 == 5) {
                    this.setState({
                      quiz_lima: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 5,
                      answer: "a"
                    })
                  } else if (index + 1 == 6) {
                    this.setState({
                      quiz_enam: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 6,
                      answer: "a"
                    })
                  } else if (index + 1 == 7) {
                    this.setState({
                      quiz_tujuh: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 7,
                      answer: "a"
                    })
                  } else if (index + 1 == 8) {
                    this.setState({
                      quiz_lapan: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 8,
                      answer: "a"
                    })
                  } else if (index + 1 == 9) {
                    this.setState({
                      quiz_sembilan: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 9,
                      answer: "a"
                    })
                  } else if (index + 1 == 10) {
                    this.setState({
                      quiz_sepuluh: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 10,
                      answer: "a"
                    })
                  }
                }}

                style={{
                  width: "50%", height: 30, marginTop: 10
                }}>
                <Text style={{
                  fontSize: 13, fontWeight: "bold", color: "#000"
                }}>a. {value.a}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (index + 1 == 1) {
                    this.setState({
                      quiz_satu: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 1,
                      answer: "c"
                    })
                  } else if (index + 1 == 2) {
                    this.setState({
                      quiz_dua: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 2,
                      answer: "c"
                    })
                  } else if (index + 1 == 3) {
                    this.setState({
                      quiz_tiga: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 3,
                      answer: "c"
                    })
                  } else if (index + 1 == 4) {
                    this.setState({
                      quiz_empat: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 4,
                      answer: "c"
                    })
                  } else if (index + 1 == 5) {
                    this.setState({
                      quiz_lima: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 5,
                      answer: "c"
                    })
                  } else if (index + 1 == 6) {
                    this.setState({
                      quiz_enam: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 6,
                      answer: "c"
                    })
                  } else if (index + 1 == 7) {
                    this.setState({
                      quiz_tujuh: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 7,
                      answer: "c"
                    })
                  } else if (index + 1 == 8) {
                    this.setState({
                      quiz_lapan: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 8,
                      answer: "c"
                    })
                  } else if (index + 1 == 9) {
                    this.setState({
                      quiz_sembilan: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 9,
                      answer: "c"
                    })
                  } else if (index + 1 == 10) {
                    this.setState({
                      quiz_sepuluh: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 10,
                      answer: "c"
                    })
                  }
                }}
                style={{ width: "50%", height: 30, marginTop: 10 }}>
                <Text style={{ fontSize: 13, fontWeight: "bold", color: "#000" }}>c. {value.c}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => {
                  if (index + 1 == 1) {
                    this.setState({
                      quiz_satu: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 1,
                      answer: "b"
                    })
                  } else if (index + 1 == 2) {
                    this.setState({
                      quiz_dua: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 2,
                      answer: "b"
                    })
                  } else if (index + 1 == 3) {
                    this.setState({
                      quiz_tiga: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 3,
                      answer: "b"
                    })
                  } else if (index + 1 == 4) {
                    this.setState({
                      quiz_empat: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 4,
                      answer: "b"
                    })
                  } else if (index + 1 == 5) {
                    this.setState({
                      quiz_lima: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 5,
                      answer: "b"
                    })
                  } else if (index + 1 == 6) {
                    this.setState({
                      quiz_enam: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 6,
                      answer: "b"
                    })
                  } else if (index + 1 == 7) {
                    this.setState({
                      quiz_tujuh: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 7,
                      answer: "b"
                    })
                  } else if (index + 1 == 8) {
                    this.setState({
                      quiz_lapan: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 8,
                      answer: "b"
                    })
                  } else if (index + 1 == 9) {
                    this.setState({
                      quiz_sembilan: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 9,
                      answer: "b"
                    })
                  } else if (index + 1 == 10) {
                    this.setState({
                      quiz_sepuluh: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 10,
                      answer: "b"
                    })
                  }
                }}
                style={{ width: "50%", height: 30, marginTop: 10 }}>
                <Text style={{ fontSize: 13, fontWeight: "bold", color: "#000" }}>b. {value.b}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (index + 1 == 1) {
                    this.setState({
                      quiz_satu: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 1,
                      answer: "d"
                    })
                  } else if (index + 1 == 2) {
                    this.setState({
                      quiz_dua: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 2,
                      answer: "d"
                    })
                  } else if (index + 1 == 3) {
                    this.setState({
                      quiz_tiga: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 3,
                      answer: "d"
                    })
                  } else if (index + 1 == 4) {
                    this.setState({
                      quiz_empat: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 4,
                      answer: "d"
                    })
                  } else if (index + 1 == 5) {
                    this.setState({
                      quiz_lima: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 5,
                      answer: "d"
                    })
                  } else if (index + 1 == 6) {
                    this.setState({
                      quiz_enam: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 6,
                      answer: "d"
                    })
                  } else if (index + 1 == 7) {
                    this.setState({
                      quiz_tujuh: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 7,
                      answer: "d"
                    })
                  } else if (index + 1 == 8) {
                    this.setState({
                      quiz_lapan: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 8,
                      answer: "d"
                    })
                  } else if (index + 1 == 9) {
                    this.setState({
                      quiz_sembilan: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 9,
                      answer: "d"
                    })
                  } else if (index + 1 == 10) {
                    this.setState({
                      quiz_sepuluh: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 10,
                      answer: "d"
                    })
                  }
                }}
                style={{ width: "50%", height: 30, marginTop: 10 }}>
                <Text style={{ fontSize: 13, fontWeight: "bold", color: "#000" }}>d. {value.d}</Text>
              </TouchableOpacity>
            </View>

            <Text style={{
              fontSize: 15,
              color: "red",
              fontWeight: "bold"
            }}>Answer No {index + 1}: {index + 1 == 1 ? this.state.quiz_satu : "" || index + 1 == 2 ? this.state.quiz_dua : "" || index + 1 == 3 ? this.state.quiz_tiga : "" || index + 1 == 4 ? this.state.quiz_empat : "" || index + 1 == 5 ? this.state.quiz_lima : "" || index + 1 == 6 ? this.state.quiz_enam : "" || index + 1 == 7 ? this.state.quiz_tujuh : "" || index + 1 == 8 ? this.state.quiz_lapan : "" || index + 1 == 9 ? this.state.quiz_sembilan : "" || index + 1 == 10 ? this.state.quiz_sepuluh : ""}</Text>

            {this.state.userRole == "admin" ?
              <View style={{
                alignItems: "center",
                height: 50,
                justifyContent: "center"
              }}>
                <TouchableOpacity
                  onPress={() => this.deleteQuiz(value.id)}
                  style={{
                    height: 40,
                    width: "80%",
                    backgroundColor: "#8DE699",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20
                  }}>
                  <Text style={{
                    color: "red",
                    fontSize: 16,
                    fontWeight: "bold"
                  }}>Delete</Text>
                </TouchableOpacity>
              </View> : null}
          </View>
        )
      })
    } else {
      return this.state.data.map((value, index) => {
        return (
          <View key={index} style={{
            backgroundColor: "#DCDCDC",
            width: "90%",
            height: 150,
            margin: 12,
            borderRadius: 10,
            padding: 10
          }}>
            <Text style={{ fontSize: 13, fontWeight: "bold", color: "#000" }}>{index + 1}. {value.quiz}</Text>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => {
                  if (index + 1 == 1) {
                    this.setState({
                      quiz_satu: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 1,
                      answer: "a"
                    })
                  } else if (index + 1 == 2) {
                    this.setState({
                      quiz_dua: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 2,
                      answer: "a"
                    })
                  } else if (index + 1 == 3) {
                    this.setState({
                      quiz_tiga: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 3,
                      answer: "a"
                    })
                  } else if (index + 1 == 4) {
                    this.setState({
                      quiz_empat: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 4,
                      answer: "a"
                    })
                  } else if (index + 1 == 5) {
                    this.setState({
                      quiz_lima: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 5,
                      answer: "a"
                    })
                  } else if (index + 1 == 6) {
                    this.setState({
                      quiz_enam: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 6,
                      answer: "a"
                    })
                  } else if (index + 1 == 7) {
                    this.setState({
                      quiz_tujuh: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 7,
                      answer: "a"
                    })
                  } else if (index + 1 == 8) {
                    this.setState({
                      quiz_lapan: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 8,
                      answer: "a"
                    })
                  } else if (index + 1 == 9) {
                    this.setState({
                      quiz_sembilan: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 9,
                      answer: "a"
                    })
                  } else if (index + 1 == 10) {
                    this.setState({
                      quiz_sepuluh: "a"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 10,
                      answer: "a"
                    })
                  }
                }}

                style={{
                  width: "50%", height: 30, marginTop: 10
                }}>
                <Text style={{
                  fontSize: 13, fontWeight: "bold", color: "#000"
                }}>a. {value.a}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (index + 1 == 1) {
                    this.setState({
                      quiz_satu: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 1,
                      answer: "c"
                    })
                  } else if (index + 1 == 2) {
                    this.setState({
                      quiz_dua: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 2,
                      answer: "c"
                    })
                  } else if (index + 1 == 3) {
                    this.setState({
                      quiz_tiga: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 3,
                      answer: "c"
                    })
                  } else if (index + 1 == 4) {
                    this.setState({
                      quiz_empat: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 4,
                      answer: "c"
                    })
                  } else if (index + 1 == 5) {
                    this.setState({
                      quiz_lima: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 5,
                      answer: "c"
                    })
                  } else if (index + 1 == 6) {
                    this.setState({
                      quiz_enam: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 6,
                      answer: "c"
                    })
                  } else if (index + 1 == 7) {
                    this.setState({
                      quiz_tujuh: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 7,
                      answer: "c"
                    })
                  } else if (index + 1 == 8) {
                    this.setState({
                      quiz_lapan: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 8,
                      answer: "c"
                    })
                  } else if (index + 1 == 9) {
                    this.setState({
                      quiz_sembilan: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 9,
                      answer: "c"
                    })
                  } else if (index + 1 == 10) {
                    this.setState({
                      quiz_sepuluh: "c"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 10,
                      answer: "c"
                    })
                  }
                }}
                style={{ width: "50%", height: 30, marginTop: 10 }}>
                <Text style={{ fontSize: 13, fontWeight: "bold", color: "#000" }}>c. {value.c}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => {
                  if (index + 1 == 1) {
                    this.setState({
                      quiz_satu: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 1,
                      answer: "b"
                    })
                  } else if (index + 1 == 2) {
                    this.setState({
                      quiz_dua: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 2,
                      answer: "b"
                    })
                  } else if (index + 1 == 3) {
                    this.setState({
                      quiz_tiga: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 3,
                      answer: "b"
                    })
                  } else if (index + 1 == 4) {
                    this.setState({
                      quiz_empat: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 4,
                      answer: "b"
                    })
                  } else if (index + 1 == 5) {
                    this.setState({
                      quiz_lima: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 5,
                      answer: "b"
                    })
                  } else if (index + 1 == 6) {
                    this.setState({
                      quiz_enam: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 6,
                      answer: "b"
                    })
                  } else if (index + 1 == 7) {
                    this.setState({
                      quiz_tujuh: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 7,
                      answer: "b"
                    })
                  } else if (index + 1 == 8) {
                    this.setState({
                      quiz_lapan: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 8,
                      answer: "b"
                    })
                  } else if (index + 1 == 9) {
                    this.setState({
                      quiz_sembilan: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 9,
                      answer: "b"
                    })
                  } else if (index + 1 == 10) {
                    this.setState({
                      quiz_sepuluh: "b"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 10,
                      answer: "b"
                    })
                  }
                }}
                style={{ width: "50%", height: 30, marginTop: 10 }}>
                <Text style={{ fontSize: 13, fontWeight: "bold", color: "#000" }}>b. {value.b}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (index + 1 == 1) {
                    this.setState({
                      quiz_satu: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 1,
                      answer: "d"
                    })
                  } else if (index + 1 == 2) {
                    this.setState({
                      quiz_dua: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 2,
                      answer: "d"
                    })
                  } else if (index + 1 == 3) {
                    this.setState({
                      quiz_tiga: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 3,
                      answer: "d"
                    })
                  } else if (index + 1 == 4) {
                    this.setState({
                      quiz_empat: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 4,
                      answer: "d"
                    })
                  } else if (index + 1 == 5) {
                    this.setState({
                      quiz_lima: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 5,
                      answer: "d"
                    })
                  } else if (index + 1 == 6) {
                    this.setState({
                      quiz_enam: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 6,
                      answer: "d"
                    })
                  } else if (index + 1 == 7) {
                    this.setState({
                      quiz_tujuh: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 7,
                      answer: "d"
                    })
                  } else if (index + 1 == 8) {
                    this.setState({
                      quiz_lapan: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 8,
                      answer: "d"
                    })
                  } else if (index + 1 == 9) {
                    this.setState({
                      quiz_sembilan: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 9,
                      answer: "d"
                    })
                  } else if (index + 1 == 10) {
                    this.setState({
                      quiz_sepuluh: "d"
                    })
                    this.state.answer_array.push({
                      user_id: this.state.user_id,
                      no_quiz: 10,
                      answer: "d"
                    })
                  }
                }}
                style={{ width: "50%", height: 30, marginTop: 10 }}>
                <Text style={{ fontSize: 13, fontWeight: "bold", color: "#000" }}>d. {value.d}</Text>
              </TouchableOpacity>
            </View>

            <Text style={{
              fontSize: 15,
              color: "red",
              fontWeight: "bold"
            }}>Answer No {index + 1}: {index + 1 == 1 ? this.state.quiz_satu : "" || index + 1 == 2 ? this.state.quiz_dua : "" || index + 1 == 3 ? this.state.quiz_tiga : "" || index + 1 == 4 ? this.state.quiz_empat : "" || index + 1 == 5 ? this.state.quiz_lima : "" || index + 1 == 6 ? this.state.quiz_enam : "" || index + 1 == 7 ? this.state.quiz_tujuh : "" || index + 1 == 8 ? this.state.quiz_lapan : "" || index + 1 == 9 ? this.state.quiz_sembilan : "" || index + 1 == 10 ? this.state.quiz_sepuluh : ""}</Text>
          </View>
        )
      })
    }
  }

  kirim_answer = async () => {
    for (let index = 0; index < this.state.answer_array.length; index++) {

      const data = {
        "user_id": this.state.answer_array[index].user_id,
        "no_quiz": this.state.answer_array[index].no_quiz,
        "answer": this.state.answer_array[index].answer
      }
      const answer = await postService(data, "save_answer")
      console.log(answer)
    }
  }

  finalCurrect = () => {
    if (this.state.answer_array.length == 0) {
      Alert.alert("Alert Answer", "Kamu belum menjawab soal satupun")
    } else {
      this.setState({ isloading: true })
      this.check_answer()
      this.shownilai()
    }
  }


  check_answer = () => {
    return this.state.data.map((value, index) => {
      this.validasi(value.currect)
    })
  }

  validasi = (current) => {
    this.state.answer_array.map((value, index) => {
      if (current == value.answer) {
        this.state.check_answer.push({
          no_quiz: value.no_quiz,
          currect: value.answer
        })
      }
    })
  }

  shownilai = () => {
    const uniqueArray = this.state.check_answer.filter((value, index) => {
      const _value = JSON.stringify(value);
      return index === this.state.check_answer.findIndex(obj => {
        return JSON.stringify(obj) === _value;
      });
    });
    setTimeout(() => {
      console.log(uniqueArray)
      this.setState({
        answer_currect: uniqueArray,
        isloading: false,
        ismodal: !this.state.ismodal
      })
    }, 5000);

  }

  simpanQuiz = async () => {
    if (this.state.quiz.length == 0 || this.state.a.length == 0 || this.state.b.length == 0 || this.state.c.length == 0 || this.state.d.length == 0 || this.state.currect.length == 0) {
      Alert.alert("Alert Quiz", "Semua Wajib Diisi")
    } else {
      this.setState({
        isloading: !this.state.isloading
      })
      const datasend = {
        "quiz": this.state.quiz,
        "a": this.state.a,
        "b": this.state.b,
        "c": this.state.c,
        "d": this.state.d,
        "currect": this.state.currect
      }

      const sendQuiz = await postService(datasend, "save_quiz")
      if (sendQuiz.meta.code == 200 && sendQuiz.meta.status == "success") {
        ToastAndroid.show(`${sendQuiz.meta.message}`, ToastAndroid.LONG);
        setTimeout(() => {
          this.setState({
            isloading: !this.state.isloading,
            ismodaladd: !this.state.ismodaladd
          })
          this.refresh()
        }, 2000);
      } else {
        ToastAndroid.show(`${sendQuiz.meta.message}`, ToastAndroid.LONG);
      }
    }
  }

  deleteQuiz = async (id) => {
    const datasend = {
      "id": id,
    }
    const deleteKamus = await postService(datasend, "delete_quiz")
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
          <Text>Menu Quiz</Text>
        </View>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
            {this.renderItem()}
            <TouchableOpacity
              onPress={() => this.finalCurrect()}
              style={{
                height: 50,
                width: "80%",
                backgroundColor: "yellowgreen",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                marginBottom: 20
              }}>
              {this.state.isloading ? <ActivityIndicator /> :
                <Text style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: 20
                }}>Check Answer</Text>
              }
            </TouchableOpacity>
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
          <View style={{
            flex: 1,
            backgroundColor: "transparent",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <View style={{ height: 480, width: "80%", backgroundColor: "white", borderRadius: 20, padding: 20, alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    answer_array: [],
                    check_answer: [],
                    answer_currect: [],
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
              {this.state.answer_currect.length < 6 ?
                <View style={{ alignItems: 'center' }}>
                  <Image
                    source={require("../assets/progress.png")}
                    style={{
                      height: 200,
                      width: 200,
                      resizeMode: "contain"
                    }}
                  />
                  <View style={{height:200}}>
                    <Text style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "red"
                    }}>Terus Semangat, Semuanya Perlu Perjuangan</Text>
                    <Text style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "red",
                      marginTop: 30
                    }}>Nilai Quiz Kamu</Text>

                    <Text style={{
                      textAlign: "center",
                      fontSize: 50,
                      fontWeight: "bold",
                      color: "red",
                      marginTop: 20
                    }}>{this.state.answer_currect.length * 10}
                    </Text>
                  </View>
                </View>
                :
                <View style={{alignItems:"center"}}>
                  <Image
                    source={require("../assets/currect.png")}
                    style={{
                      height: 200,
                      width: 200,
                      resizeMode: "contain"
                    }}
                  />
                  <View style={{height:200}}>
                  <Text style={{
                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "#00E01E",
                    marginTop: 20
                  }}>Keren!! Selamat Nilai</Text>
                  <Text style={{
                    textAlign: "center",
                    fontSize: 80,
                    fontWeight: "bold",
                    color: "#07AC1E",
                    marginTop: 20
                  }}>{this.state.answer_currect.length * 10}</Text>
                </View>
                </View>
              }
            </View>
          </View>
        </Modal>

        {this.state.userRole == "admin" ?
          <TouchableOpacity
            onPress={() => this.setState({
              ismodaladd: !this.state.ismodaladd
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
          visible={this.state.ismodaladd}
          onRequestClose={() => {
            this.setState({ ismodaladd: !this.state.ismodaladd });
          }}
        >
          <ScrollView>
            <View style={{
              flex: 1,
              backgroundColor: "transparent",
              alignItems: "center",
              marginTop: "20%",
            }}>
              <View style={{ height: "100%", width: "80%", backgroundColor: "white", borderRadius: 20, padding: 20, alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      ismodaladd: !this.state.ismodaladd,
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
                  }}>Tambahkan Quiz</Text>
                  <View style={{
                    marginTop: 20
                  }}>
                    <Text style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000"
                    }}>Soal Quiz</Text>
                    <TextInput
                      placeholder='Masukan soal quiz'
                      onChangeText={(input) => this.setState({
                        quiz: input
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
                    }}>Option A</Text>
                    <TextInput
                      placeholder='Option A'
                      onChangeText={(input) => this.setState({
                        a: input
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
                    }}>Option B</Text>
                    <TextInput
                      placeholder='Option B'
                      onChangeText={(input) => this.setState({
                        b: input
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
                    }}>Option C</Text>
                    <TextInput
                      placeholder='Options C'
                      onChangeText={(input) => this.setState({
                        c: input
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
                    }}>Option D</Text>
                    <TextInput
                      placeholder='Option D'
                      onChangeText={(input) => this.setState({
                        d: input
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
                    }}>Jawaban Benar</Text>
                    <TextInput
                      placeholder='c'
                      onChangeText={(input) => this.setState({
                        currect: input.toLocaleLowerCase()
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
                      onPress={() => this.simpanQuiz()}
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
