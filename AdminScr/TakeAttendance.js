import React from 'react';

import { CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Badge, Icon } from 'react-native-elements';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert , Modal} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
class TakeAttendance extends React.Component {
  state = {
    data: [],
    Ldata: [],
    ids: [],
    status: '',
    date: '',
    checked: [],
    Leave: false,
    leave_status: '',
    modalVisible: false,
  }


  toggleModal(visible) {
    this.setState({ modalVisible: visible });
 }


  isChecked = (itemId) => {
    const isThere = this.state.ids.includes(itemId);
    return isThere;
  };




  toggleChecked = (itemId) => {

    const ids = [...this.state.ids, itemId];

    if (this.isChecked(itemId)) {
      this.setState({
        ...this.state,
        ids: this.state.ids.filter((id) => id !== itemId),
      });
    } else {
      this.setState({
        ...this.state,
        ids,
      });
    }
    console.log(this.state.ids);
  };

  myfun = () => {
    if (this.state.Leave == true) {
      alert('hi')
    } else {
      console.log("Muqeet")
    }
  }
  renderItemModel = ({ item, index }) => {
    const { navigate } = this.props.navigation;
    let { checked } = this.state;
    return (
      <View style={styles.listItem}>
       <Image source={{ uri: 'data:image/jpeg;base64,' + item1[3] }} style={{ width: 60, height: 60, borderRadius: 30 }} />
      
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{item1[1]}</Text>

        <Text>{item1[2]}</Text>
      </View>
      </View>
    );
  }



  renderItem = ({ item, index }) => {
    const { navigate } = this.props.navigation;
    let { checked } = this.state;
    return (
      <View style={styles.listItem}>
        <Image source={{ uri: 'data:image/jpeg;base64,' + item[3] }} style={{ width: 60, height: 60, borderRadius: 30 }} />
      
        <View style={{ alignItems: "center", flex: 1 }}>
          <Text style={{ fontWeight: "bold" }}>{item[1]}</Text>

          <Text>{item[2]}</Text>
        </View>

        <CheckBox
  checked={this.state.checked}
/>

        <View>{ this.state.Leave==true ? 
        <Image style={{width: 50 , height: 50}}
              source={require('../icons/process2.png')}>
            </Image>
            <CheckBox
          center
          iconType="material"
          // checkedIcon="clear"
          uncheckedIcon={<Image style={{ width: 45, height: 45 }} source={require('../assets/unchecked.png')} />}
          checkedIcon={<Image style={{ width: 60, height: 50 }} source={require('../assets/checked.png')} />}
          //checkedIcon="add"
          // checkedColor="red"
          uncheckedColor="blue"
          size={30}
          
          checked={this.isChecked(item.emp_id)}
          onPress={() => this.toggleChecked(item.emp_id)}
          
        />
        }
        </View>

      </View>
    );
  }

  Submit = () => {

    fetch('http://'+ global.IP +'/BIIT_HR/api/attendances/postattendence', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        date: this.state.date,
        csv: this.state.ids.toString(),
      })
    })
      .then(Response => Response.json())
      .then(responseData => {
        alert("Attendances Submitted!!", responseData)
        console.log(responseData)
        this.props.navigation.navigate("AdmHome")

      })
      .catch(error => console.log(error))
  }

  webCall = () => {
    fetch('http://' + global.IP + '/BIIT_HR/api/employees/AllEmployeeAttendence', {
      method: "get",
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          isLoading: true,
          data: data,
          //leave_status: data.leave_status

        })
        console.log('Data hai' + data)
        console.log(this.state.data);
      })
  }

  OnLeave = () => {
    fetch('http://' + global.IP + '/BIIT_HR/api/employees/AllEmployeeLeaveCheck', {
      method: "get",
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          isLoading: true,
          Ldata: data,
          //leave_status: data.leave_status

        })
        console.log('Data hai' + data)
        console.log(this.state.data);
      })
  }

  componentDidMount() {
    this.webCall();
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    that.setState({
      date:
        year + '-' + month + '-' + date,
    });
  }

  handleChange = (index) => {
    let checked = [...this.state.checked];
    checked[index] = !checked[index];
    this.setState({ checked });
  }
  render() {
    // let {checked} = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center' }}>
         
         <View>
         <Modal animationType={"fade"} transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => { console.log("Modal has been closed.") }}>

                            <View style={styles.modal}>

                                {/* <Icon style={{marginRight:10}} type="ionicon" name="clear" size={40} color='black' onPress={() => navigation.navigate("")} /> */}
                                <View>
                                    <View style={{ marginLeft: ('85%') }}>
                                        <Icon name="close" size={30} color="#900" onPress={() => { this.toggleModal(!this.state.modalVisible) }} />
                                    </View>
                                    <Text style={{ marginLeft: ('25%'), fontSize: 20 }}>Hello</Text>
                                    
                                    <ScrollView>
                    <FlatList
                      style={{ flex: 1 }}
                      extraData={this.state}
                      data={this.state.Ldata}
                      renderItem={this.renderItemModel}

                      keyExtractor={item1 => item1}

        />
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
         </View>
         {/* <TouchableOpacity style={{ marginLeft: ('33%'), borderWidth: 2, borderColor: 'green', borderRadius: 10, width: 140, height: 25 }} onPress={() => { this.toggleModal(true) }}>
                            <Text style={styles.Remaintext}>   Attendence Status</Text>
                        </TouchableOpacity> */}
          {/* <DatePicker
            style={{ width: wp('53%'), paddingLeft: 30, marginRight: 50, marginLeft: 50 }}
            date={this.state.date}
            mode="date"
            placeholder="Leave From"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2022-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 2
              },
              dateInput: {
                marginLeft: 36,
                //borderWidth: 0,

              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { this.setState({ date: date }) }}

          /> */}
        </View>
        <FlatList
           style={{ flex: 1 }}
          extraData={this.state}
          data={this.state.data}
          renderItem={this.renderItem}

          keyExtractor={item =>item}

        />
        <View>
          <TouchableOpacity style={styles.signinbutton} onPress={this.Submit} >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

export default TakeAttendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 20
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "90%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  },

  TouchableOpacityStyle: {

    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {

    resizeMode: 'contain',
    width: 60,
    height: 60,
    borderRadius: 35
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    justifyContent: 'center',
    color: '#fff',
    marginTop: 5

  },
  signinbutton: {
    backgroundColor: '#E66E2F',
    borderColor: '#E66E2F',
    borderWidth: 1,
    //width: '50%',
    height: 45,
    borderRadius: 45,
    alignItems: "center",
    marginLeft: ('20%'),
    marginRight: ('20%'),
    marginBottom: ('3%')

  },
  modal: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#E66E2F',
    padding: 0,
    //margin: 70,
    marginTop: ('20%'),
    marginLeft: ('10%'),
    marginRight: ('10%'),
    marginBottom: ('20%'),
    borderWidth: 2,
    borderRadius: 20
},
text: {
    color: '#3f2949',
    marginTop: 10
},
});