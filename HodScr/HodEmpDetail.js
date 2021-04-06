

import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Picker, Image, TouchableOpacity, 
    Button, ImageBackground, Modal } from 'react-native';
    import {DataTable} from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import { Badge, Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Body } from 'native-base';
import Moment from 'moment'
class HodEmployeeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            avatarSource: null,
            base64string: '',
            Picture: null,
            dataSource: [],
            PostArray: [],
            date: '',
            modalVisible: false,
            data: []
        }
    }

    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }


    renderItem = ({ item })=> {
        const { navigate } = this.props.navigation;
      
        return (
          <View style={styles.listItem}>
            
            <Text style={{marginLeft: ('1%')}}>{item.attendance_id}</Text>
            <View style={{ alignItems: "center", flex: 1 }}>
              <Text style={{ fontWeight: "bold" }}>{Moment(item.date).format("Do  MMM  YYYY")}</Text>
            </View>
            <View>
            <Text style={{ fontWeight: "bold", marginRight:('0%') }}>{item.status}</Text>
            </View>   
          </View>
        );
      }
      
      
      webCall = () => {
        const { emp_id } = this.props.route.params;
        fetch('http://'+global.IP+'/BIIT_HR/api/Attendances/OneAttendence?emp_id='+ emp_id+ '', {
          method: "get",
        }).then(res => res.json())
          .then(data => {
            console.log(data)
            this.setState({
              isLoading: true,
              data: data
            
            })
            console.log('Data hai' + data)
          })
      }
      
      renderSeperator =() => {
        return(
          <View 
             style={{
               height: 1,
               width: ('90%'),
              backgroundColor: '#E66E2F',
              marginLeft: ('3%'),
              marginRight: ('3%')
             }}
          />
        )
      }

    PostData = async () => {
        this.state.PostArray.push({
            'name': this.state.name,
            'cnic': this.state.cnic_txt,
            'contact_no': this.state.contact_no,
            'email': this.state.email,
            'password': this.state.password,
            'designation': this.state.position,
            'picture': this.state.base64string,
            'date': this.state.date,
        });
        this.setState({ dialogVisible: false });
        fetch('http://192.168.137.1/BIIT_HR/api/employees/registeremployee', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(this.state.PostArray[0])


        })
            .then((Response) => Response.json())
            .then((responseData) => {
                alert("Record Safe Successfully!", responseData)
                console.log(responseData)
                this.props.navigation.replace("AllEmployee")
                this.componentDidMount()
            })
            .catch(error => console.log(error))
    }


    componentDidMount() {
        this.webCall()
    }




    render() {
        let { image } = this.state;
        const { dp } = this.props.route.params;
        const { name } = this.props.route.params;
        const { email } = this.props.route.params;
        const { designation } = this.props.route.params;
        const { contact_no } = this.props.route.params;
        const { cnic } = this.props.route.params;
        const { emp_id } = this.props.route.params;
        const { password } = this.props.route.params;
        const { date } = this.props.route.params;

         console.log("Picture aa rahi hai", dp);
         console.log(cnic)
        return (
            <View style={styles.container}>
                <ScrollView style={styles.View2}>

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: ('0%') }}>

                        <TouchableOpacity onPress={this._pickImage}>
                            <View style={{
                                // borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',

                                backgroundColor: 'rgba(0,0,0,0.35)',
                                borderRadius: 80,

                            }}>

                                <Image source={{ uri: 'data:image/jpeg;base64,' + dp }} style={{
                                    width: 150,
                                    height: 150,
                                    borderRadius: 60
                                }} />

                            </View>
                        </TouchableOpacity>
                        {/* </ImageBackground> */}

                    </View>





                    <View style={{ flexDirection: 'row', marginTop: 10, fontSize: 20 }}>


                        <Modal animationType={"fade"} transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => { console.log("Modal has been closed.") }}>

                            <View style={styles.modal}>

                                {/* <Icon style={{marginRight:10}} type="ionicon" name="clear" size={40} color='black' onPress={() => navigation.navigate("")} /> */}
                               <View>
                                <View style={{ marginLeft: ('85%') }}>
                                    <Icon name="close" size={30} color="#900" onPress={() => { this.toggleModal(!this.state.modalVisible) }} />
                                    </View>
                            <Text style={{marginLeft:('25%'), fontSize: 20}}>{name}</Text>
                                    <DataTable>
         <DataTable.Header style={styles.headertxtDT}>
           <DataTable.Title style={styles.titleDTC1}>#</DataTable.Title>
           <DataTable.Title style={styles.titleDTC2}>Date</DataTable.Title>
           <DataTable.Title style={styles.titleDTC3}>Status</DataTable.Title>
         </DataTable.Header>
       </DataTable>
       <ScrollView>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.attendance_id}
          ItemSeparatorComponent={this.renderSeperator}
        />
       </ScrollView>
                                </View>
                            </View>
                        </Modal>

                        <TouchableOpacity style={{ marginLeft:('33%'), borderWidth: 2, borderColor: 'green', borderRadius: 10, width: 140, height:  25}} onPress={() => { this.toggleModal(true) }}>
                            <Text style={styles.Remaintext}>   Attendence Status</Text>
                        </TouchableOpacity>
                    </View>




                    <View style={{ marginLeft: 20 }}>

                        <View style={styles.bodytext}>

                            {/* <Text style={styles.textstyle}>:           </Text> */}
                            <Text style={styles.textstyle}>Name:{'                 '}{name}</Text>

                        </View>

                        <View style={styles.bodytext}>
                            {/* <Text style={styles.textstyle}>Email:            </Text> */}
                            <Text style={styles.textstyle}>Email:{'                  '}{email}</Text>

                        </View>

                        <View style={styles.bodytext}>
                            {/* <Text style={styles.textstyle}>contact no:     </Text> */}
                            <Text style={styles.textstyle}>contact no:{'         '}{contact_no}</Text>

                        </View>

                        <View style={styles.bodytext}>

                            <Text style={styles.textstyle}>CNnnIC#{'                  '}{cnic}</Text>

                        </View>

                        <View style={styles.bodytext}>

                            <Text style={styles.textstyle}>Designation:{'        '}{designation}</Text>

                        </View>

                        <View style={styles.bodytext}>

                            <Text style={styles.textstyle}>password:{'            '}{password}</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.signupbutton}>
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupbutton} onPress={() => this.props.navigation.navigate("UpdateEmployeeHod", {
                        emp_id: emp_id,
                        name: name,
                        dp: dp,
                        cnic: cnic,
                        email: email,
                        password: password,
                        designation: designation,
                        dateJ: date,
                        contact_no: contact_no

                    })

                    } >
                        <Text style={styles.buttonText} >Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default HodEmployeeDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop: ('3%')
    },
    View2: {
        marginTop: ('0%')
    },
    textInputstyle: {
        marginTop: hp('2%'),
        marginLeft: wp('4%'),

        marginRight: wp('4%'),
    },
    textstyle: {
        color: 'black',
        // marginLeft: hp('5%'),
        // marginRight: hp('10%'),
        fontSize: 18,
        marginTop: 5

    },
    buttonContainer: {

        margin: ('5%'),


        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        justifyContent: 'center',
        color: 'white',
        marginTop: ('10%')

    },
    buttons: {
        backgroundColor: '#E66E2F',
        width: '40%',
        height: 45,
        borderRadius: 45,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20
    },
    signupbutton: {
        backgroundColor: '#E66E2F',
        width: '40%',
        height: 50,
        borderRadius: 40,
        marginLeft: 20,
        marginRight: 10
        // borderRadius: 45,

        // borderWidth: 1,
        // borderColor: '#E66E2F'


    },

    bodytext: {
        //  flexDirection: 'row',
        marginTop: ('5%'),
        fontSize: 20,
        marginLeft: ('5%')
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
    headertxtDT:{
        backgroundColor: '#BBBBBB',
        marginLeft: 10,
        marginRight:10,
        borderRadius:10,
        marginTop:10
      },
      titleDTC1:{
        fontSize: 20,
        color: 'black',
        paddingLeft:0,
    
      },
      titleDTC2:{
        fontSize: 20,
        color: 'black',
        paddingLeft: 20,
    
      },
      titleDTC3:{
        fontSize: 20,
        color: 'black',
        paddingLeft:30,
    
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

});



