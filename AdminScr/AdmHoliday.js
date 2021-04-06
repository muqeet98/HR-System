
// import React, { Component, useState } from 'react';
// import {
//     View, Text, StyleSheet, KeyboardAvoidingView,
//     StatusBar, TouchableWithoutFeedback, Keyboard, TouchableOpacity
// } from 'react-native';
// import { Input } from 'react-native-elements';
// import { TextInput } from 'react-native-paper';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { ScrollView } from 'react-native-gesture-handler';
// import { render } from 'react-dom';

// const LeaveManage = (props) => {
//     const [cri_total_leave, setTotalleaves] = useState(0)
//     const [Hajj, setSickleave] = useState(0)
//     const [EidF, setEarnedleave] = useState(0)
//     const [EidAdha, setCasual] = useState(0)
//     const [cri_short_leave, setShort] = useState(0)
//     const [cri_id] = useState('100')
//     const PostData = () => {

//         fetch('http://' + global.IP + '/BIIT_HR/api/criteria/CriteriaPut', {
//             method: "post",
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },

//             body: JSON.stringify({
//                 cri_id,
//                 cri_total_leave,
//                 Hajj,
//                 EidF,
//                 EidAdha,
//                 cri_short_leave,
//             })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (!data.ok) {
//                     console.log(data)
//                     props.navigation.navigate("AdmHome")
//                 } else {
//                     console.log("wrong ")
//                     Alert.alert("Email or password is not correct")
//                 }
//             })
//             .catch(error => console.log(error))

//     }

//     const addValues = () => {
//         // let sickL = Hajj;
//         // const earned= EidF;
//         // const casual = EidAdha;
//         // const short = cri_short_leave;
//         let sickL = Hajj;
//         let earnedL = EidF;
//         let casualL = EidAdha;
//         let shortL = Hajj;

//         let total = sickL + earnedL + casualL + shortL;
//         setTotalleaves(total);

//         console.log("hello" + total);
//     }

//     const { total_leave } = props.route.params;
//     const { sick_leave } = props.route.params;
//     //   const{EidF}=props.route.params;
//     //   const{EidAdha}=props.route.params;
//     //   const{cri_short_leave}=props.route.params;

//     return (

//         <KeyboardAvoidingView behavior="height" style={styles.container}>
//             <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
//                 <ScrollView style={styles.container}>

//                     <View>
//                         <Text style={{ fontSize: 25, fontStyle: 'normal', marginLeft: 55, fontWeight: "bold" }}>Update Leave Critera {total_leave}</Text>
//                     </View>


//                     <View style={styles.Row1Style}>
//                         <View style={styles.marginR1}>
//                             <Text style={styles.LabelText}>Sick Leaves</Text>
//                         </View>
//                         <View style={styles.marginR1} >

//                             <TextInput style={styles.EditText1}
//                                 // label='Email'
//                                 value={Hajj}
//                                 // onChangeText={(text) => {setSickleave({text}); addValues()}}
//                                 onChangeText={text => { setSickleave(text) }}
//                             />
//                         </View>

//                     </View>
//                     <View>
//                         <Text>Hello I am sick leave {Hajj}</Text>
//                     </View>

//                     <View style={styles.Row1Style}>
//                         <View style={styles.marginR1}>
//                             <Text style={styles.LabelText}>Earned Leaves</Text>
//                         </View>
//                         <View style={styles.marginR1} >

//                             <TextInput style={styles.EditText1}

//                                 value={EidF}
//                                 // onChangeText={(text) => {setEarnedleave({text}); addValues()}}
//                                 onChangeText={text => setEarnedleave(text)}
//                             />
//                         </View>
//                     </View>

//                     <View style={styles.Row1Style}>
//                         <View style={styles.marginR1}>
//                             <Text style={styles.LabelText}>Casual Leaves</Text>
//                         </View>
//                         <View style={styles.marginR1} >

//                             <TextInput style={styles.EditText1}
//                                 // label='Email'
//                                 value={EidAdha}
//                                 keyboardType={'numeric'}
//                                 onChangeText={text => setCasual(text)}
//                             />
//                         </View>
//                     </View>

//                     <View style={styles.Row1Style}>
//                         <View style={styles.marginR1}>
//                             <Text style={styles.LabelText}>Short Leaves</Text>
//                         </View>
//                         <View style={styles.marginR1} >

//                             <TextInput style={styles.EditText1}
//                                 // label='Email'
//                                 value={cri_short_leave}
//                                 onChangeText={text => setShort(text)}
//                             />
//                         </View>
//                     </View>

//                     <View style={styles.Row1Style}>
//                         <View style={styles.marginR1}>
//                             <Text style={styles.LabelText}>Total Leaves</Text>
//                         </View>
//                         <View style={styles.marginR1} >

//                             <TextInput style={styles.EditText1}
//                                 placeholder=''

//                                 //defaultValue={Hajj}
//                                 value={Hajj + EidF}
//                                 editable={false}
//                                 onChangeText={text => setTotalleaves(text)}
//                             // onChangeText

//                             />
//                         </View>
//                     </View>

//                     <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: ('10%') }}>
//                         <View>
//                             <TouchableOpacity style={styles.cancelbutton} onPress={() => props.navigation.navigate("AdmHome")}>
//                                 <Text style={styles.buttonText}>Cancel</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <View>
//                             <TouchableOpacity style={styles.savebutton} onPress={PostData}  >
//                                 <Text style={styles.buttonText}>Save</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </ScrollView>

//             </TouchableWithoutFeedback>
//         </KeyboardAvoidingView>

//     );

// }

// export default LeaveManage;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         marginTop: hp('2%')


//     },

//     Row1Style: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: ('12%'),
//     },
//     LabelText: {
//         fontSize: 22,
//         color: 'black',
//         //fontWeight: "bold" 
//     },

//     EditText1: {
//         width: wp('20%'),
//         height: hp('5%'),
//         borderColor: '#E66E2F',
//         borderRadius: 5,
//         borderWidth: 1

//     },
//     marginR1: {
//         marginLeft: ('10%'),
//         marginRight: ('10%')
//     },
//     buttonText: {
//         textAlign: 'center',
//         fontSize: 22,
//         justifyContent: 'center',
//         color: '#fff',
//         marginTop: 5

//     },
//     savebutton: {
//         backgroundColor: '#E66E2F',
//         height: 45,
//         borderRadius: 45,
//         marginTop: ('4%'),
//         width: wp('30%')
//     },
//     cancelbutton: {
//         backgroundColor: '#E66E2F',
//         height: 45,
//         borderRadius: 45,
//         marginTop: ('4%'),
//         width: wp('30%')
//     },

// });







/////////////////////////////////////////////////////

import React, { Component, useState } from 'react';
import {
    View, Text, StyleSheet, KeyboardAvoidingView,
    StatusBar, TouchableWithoutFeedback, Keyboard, TouchableOpacity
} from 'react-native';
import Moment from 'moment';
import { Input } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { render } from 'react-dom';
class Holiday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            dateTo: '',

           // DateFrom: Moment(this.state.date).format('Do  MMM  YYYY') ,

            Eid1Fr: '',
            Eid1To: '',

            EidAdFr: '',
            EidAdTo: '',


            cri_id: 100,
            Hajj: 0,
            EidF: 0,
            EidAdha: 0,


            cri_short_leave: 1,
            cri_total_leave: 0,

            date_from: '',
            date_to: ''

        }
    }

    CalHajj=async ()=>{
        //alert(this.state.DateFrom);
       // alert(this.state.date)
    //    alert("Hello")
        
    //    var From = parseInt(this.state.date);
    //    var to = parseInt(this.state.dateTo)
    //    var Hajj= (to - From)+ 1;

    //    var hai=  to.diff(From);
      
    //  var c=10;
    //    alert(hai)

   var  a= new Date(

   ) 


       var s= parseInt(this.state.date)
       var v= parseInt(this.state.dateTo)
       var cd= v.Math.diff(s)
       
       alert(cd)
       this.setState({Hajj: cd})
      

    }


     CalEidF=async ()=>{
        
        // alert(this.state.date)
        var From = parseInt(this.state.Eid1Fr);
        var to = parseInt(this.state.Eid1To)
        var EidF= (to - From)+ 1;

        
 
      var c=10;
        alert(EidF)
 
        this.setState({EidF})
       
     }

     CalEidAd=async ()=>{
        
        // alert(this.state.date)
        var From = parseInt(this.state.EidAdFr);
        var to = parseInt(this.state.EidAdTo)
        var EidAdha= (to - From)+ 1;
 
      var c=10;
        alert(EidAdha)
 
        this.setState({EidAdha})

     }




    PostData = () => {
        alert("Hello")
        fetch('http://' + global.IP + '/BIIT_HR/api/criteria/HolidayCri', {
            method: "post",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                h_id: 2,
                hajj: this.state.Hajj,
                EidF: this.state.EidF,
                EidAdha: this.state.EidAdha,

          
                
            })
        })
            .then(res => res.json())
            .then(data => {
                if (!data.ok) {
                    console.log(data)
                    this.props.navigation.navigate("AdmHome")
                } else {
                    console.log("wrong ")
                    Alert.alert("Email or password is not correct")
                }
            })
            .catch(error => console.log(error))

    }


    //===================================Haj========================
    HajjDatePost = () => {
        alert("Hello")
        fetch('http://' + global.IP + '/BIIT_HR/api/criteria/HolidayCri', {
            method: "post",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
               h_id: 2,
                hajj_from: this.state.date,
                hajj_to: this.state.dateTo,
                
            })
        })
            .then(res => res.json())
            .then(data => {
                if (!data.ok) {
                    console.log(data)
                  //  this.props.navigation.navigate("AdmHome")
                } else {
                    console.log("wrong ")
                    Alert.alert("Email or password is not correct")
                }
            })
            .catch(error => console.log(error))

    }


    HajjCalculate = () => {
        alert("Hello")
        fetch('http://' + global.IP + '/BIIT_HR/api/criteria/HajjCal?h_id=2', {
            method: "get",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
      
        })
            .then(res => res.json())
            .then(data => {
                if (!data.ok) {
                    console.log(data)
                   this.setState({Hajj: data.hajj})
                  //  this.props.navigation.navigate("AdmHome")
                } else {
                    console.log("wrong ")
                    Alert.alert("Email or password is not correct")
                }
            })
            .catch(error => console.log(error))

    }



    ////////////Eid Date Post ////////////////////////////
    EidDatePost = () => {
        alert("Hello")
        fetch('http://' + global.IP + '/BIIT_HR/api/criteria/HolidayCri', {
            method: "post",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
               h_id: 2,
                eid_from: this.state.Eid1Fr,
                eid_to: this.state.Eid1To,
                
            })
        })
            .then(res => res.json())
            .then(data => {
                if (!data.ok) {
                    console.log(data)
                  //  this.props.navigation.navigate("AdmHome")
                } else {
                    console.log("wrong ")
                    Alert.alert("Email or password is not correct")
                }
            })
            .catch(error => console.log(error))

    }

    EidFitrCalculate = () => {
        alert("Hello")
        fetch('http://' + global.IP + '/BIIT_HR/api/criteria/EidCal?h_id=2', {
            method: "get",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
      
        })
            .then(res => res.json())
            .then(data => {
                if (!data.ok) {
                    console.log(data)
                   this.setState({EidF: data.EidF})
                  //  this.props.navigation.navigate("AdmHome")
                } else {
                    console.log("wrong ")
                    Alert.alert("Email or password is not correct")
                }
            })
            .catch(error => console.log(error))

    }


    /////////////////////////////// Eid Adha
    EidAdhaDatePost = () => {
        alert("Hello")
        fetch('http://' + global.IP + '/BIIT_HR/api/criteria/HolidayCri', {
            method: "post",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
               h_id: 2,
                eidAd_from: this.state.EidAdFr,
                eidAd_to: this.state.EidAdTo,
                
            })
        })
            .then(res => res.json())
            .then(data => {
                if (!data.ok) {
                    console.log(data)
                  //  this.props.navigation.navigate("AdmHome")
                } else {
                    console.log("wrong ")
                    Alert.alert("Email or password is not correct")
                }
            })
            .catch(error => console.log(error))

    }


    EidAdhaCalculate = () => {
        alert("Hello")
        fetch('http://' + global.IP + '/BIIT_HR/api/criteria/EidAdCal?h_id=2', {
            method: "get",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
      
        })
            .then(res => res.json())
            .then(data => {
                if (!data.ok) {
                    console.log(data)
                   this.setState({EidAdha: data.EidAdha})
                  //  this.props.navigation.navigate("AdmHome")
                } else {
                    console.log("wrong ")
                    Alert.alert("Email or password is not correct")
                }
            })
            .catch(error => console.log(error))

    }




    render() {


        return (

            // <KeyboardAvoidingView behavior="height" style={styles.container}>
            //     <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            //         <ScrollView style={styles.container}>

            //             <View> <Text>Hello</Text></View>
            //         </ScrollView>

            //     </TouchableWithoutFeedback>
            // </KeyboardAvoidingView>
            <KeyboardAvoidingView behavior="height" style={styles.container}>
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <ScrollView style={styles.container}>

                        <View>
                            <Text style={{ fontSize: 25, fontStyle: 'normal', marginLeft: 55, fontWeight: "bold" }}>Public Holidays Critera</Text>
                        </View>


                        <View style={styles.Row1Style}>
                            <View style={styles.marginR1}>
                                <Text style={styles.LabelText}>Hajj</Text>
                            </View>
                            <View style={styles.marginR1} >

                                <TextInput style={styles.EditText1}
                                    // label='Email'
                                    value={String(this.state.Hajj)}

                                    onChangeText={(Hajj) => { this.setState({ Hajj }, () => this.addValues()); }}

                                />
                            </View>


                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>


                            <DatePicker
                                style={{ width: wp('35%'), paddingLeft: 10, marginRight: 30 }}
                                //date={this.state.date}
                               date= {this.state.date}
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
                                        marginLeft: 20,
                                        //borderWidth: 0,

                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}

                            />

                            <DatePicker
                                style={{ width: wp('30%'), paddingLeft: 0 }}
                                date= {this.state.dateTo}
                               // date={this.state.dateTo}
                                mode="date"
                                placeholder="Leave To"
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
                                        marginLeft: 20,
                                        //borderWidth: 0,

                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(dateTo) => { this.setState({ dateTo: dateTo }) }}

                            />
<TouchableOpacity style={styles.Cal}  onPress={this.HajjDatePost}>
                                <Text>Ok</Text>
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity style={styles.Cal} onPress={this.HajjCalculate}>
                                <Text>Calculate</Text>
                            </TouchableOpacity>









                        <View style={styles.Row1Style}>
                            <View style={styles.marginR1}>
                                <Text style={styles.LabelText}>Eid Ul Fitr</Text>
                            </View>
                            <View style={styles.marginR1} >

                                <TextInput style={styles.EditText1}

                                    value={String(this.state.EidF)}
                                    onChangeText={(EidF) => { this.setState({ EidF }, () => this.addValues()); }}

                                />
                            </View>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>


                            <DatePicker
                                style={{ width: wp('35%'), paddingLeft: 0, marginRight: 30 }}
                                date= {this.state.Eid1Fr}
                               // date={this.state.Eid1Fr}
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
                                        marginLeft: 20,
                                        //borderWidth: 0,

                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(Eid1Fr) => { this.setState({ Eid1Fr: Eid1Fr }) }}

                            />

                            <DatePicker
                                style={{ width: wp('30%'), paddingLeft: 0 }}
                                date={this.state.Eid1To}
                                mode="date"
                                placeholder="Leave To"
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
                                        marginLeft: 20,
                                        //borderWidth: 0,

                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(Eid1To) => { this.setState({ Eid1To: Eid1To }) }}

                            />


<TouchableOpacity style={styles.Cal}  onPress={this.EidDatePost}>
                                <Text>Ok</Text>
                            </TouchableOpacity>


                        </View>

                        <TouchableOpacity style={styles.Cal}  onPress={this.EidFitrCalculate}>
                                <Text>Calculate</Text>
                            </TouchableOpacity>






                        <View style={styles.Row1Style}>
                            <View style={styles.marginR1}>
                                <Text style={styles.LabelText}>Eid-Ul-Adha</Text>
                            </View>
                            <View style={styles.marginR1} >

                                <TextInput style={styles.EditText1}
                                    // label='Email'
                                    value={String(this.state.EidAdha)}
                                    onChangeText={(EidAdha) => { this.setState({ EidAdha }, () => this.addValues()); }}

                                />
                            </View>
                        </View>

                        <View style={{ marginTop: 20, flexDirection: 'row' }}>


                            <DatePicker
                                style={{ width: wp('35%'), paddingLeft: 0, marginRight: 0 }}
                                date={this.state.EidAdFr}
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
                                        marginLeft: 20,
                                        //borderWidth: 0,

                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(EidAdFr) => { this.setState({ EidAdFr: EidAdFr }) }}

                            />

                            <DatePicker
                                style={{ width: wp('35%'), paddingLeft: 20 }}
                                date={this.state.EidAdTo}
                                mode="date"
                                placeholder="Leave To"
                                format="YYYYMMDD"
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
                                        marginLeft: 20,
                                        //borderWidth: 0,

                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(EidAdTo) => { this.setState({ EidAdTo: EidAdTo }) }}

                            />

<TouchableOpacity style={styles.Cal}  onPress={this.EidAdhaDatePost}>
                                <Text>Ok</Text>
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity style={styles.Cal}  onPress={this.EidAdhaCalculate}>
                                <Text>Calculate</Text>
                            </TouchableOpacity>

                        {/* <View style={styles.Row1Style}>
<View style={styles.marginR1}>
<Text style={styles.LabelText}>Pakistan Day</Text>
</View>
<View style={styles.marginR1} >

<TextInput style={styles.EditText1}

value={String(this.state.cri_short_leave)}
onChangeText={(cri_short_leave) => { this.setState({cri_short_leave},()=> this.addValues());  } }

/>
</View>
</View>

<View style={styles.Row1Style}>
<View style={styles.marginR1}>
<Text style={styles.LabelText}>Independence Day</Text>
</View>
<View style={styles.marginR1} >

<TextInput style={styles.EditText1}
placeholder=''
editable= {false}
value={String(this.state.cri_total_leave)}
onChangeText={(cri_total_leave) => { this.setState({cri_total_leave});()=> this.addValues(); } }

/>
</View>
</View> */}

                        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: ('10%') }}>
                            <View>
                                <TouchableOpacity style={styles.cancelbutton} onPress={() => this.props.navigation.navigate("AdmHome")}>
                                    <Text style={styles.buttonText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.savebutton} onPress={this.PostData} >
                                    <Text style={styles.buttonText}>Save</Text>
                                </TouchableOpacity>
                            </View> 
                        </View>
                        */}
                    </ScrollView>

                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        );
    }
}

export default Holiday;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: hp('2%')


    },

    Row1Style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: ('12%'),
    },
    LabelText: {
        fontSize: 16,
        color: 'black',
        //fontWeight: "bold" 
    },

    EditText1: {
        width: wp('20%'),
        height: hp('5%'),
        borderColor: '#E66E2F',
        borderRadius: 5,
        borderWidth: 1

    },
    marginR1: {
        marginLeft: ('10%'),
        marginRight: ('10%')
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 22,
        justifyContent: 'center',
        color: '#fff',
        marginTop: 5

    },
    savebutton: {
        backgroundColor: '#E66E2F',
        height: 45,
        borderRadius: 45,
        marginTop: ('4%'),
        width: wp('30%')
    },
    cancelbutton: {
        backgroundColor: '#E66E2F',
        height: 45,
        borderRadius: 45,
        marginTop: ('4%'),
        width: wp('30%')
    },
    Cal: {
        backgroundColor: 'white',
        height: 30,
        marginLeft: 7,
        borderRadius: 45,
        borderColor: 'green',
        borderWidth: 2,
        //marginTop: ('4%'),
        width: wp('15%')
    }

});