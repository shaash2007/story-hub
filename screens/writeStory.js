import React from 'react'
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native"

export default  class WriteStory extends React.Component {
render(){
    return(
        <View style={styles.container}>
            <Text style={styles.headerStyle}>
                WriteStory
            </Text>
            <TextInput style={styles.inputStyle}
            placeholder="story title"/>
             <TextInput style={styles.inputStyle}
            placeholder="Author"/>
             <TextInput style={styles.StoryInputStyle}
            placeholder="story "/>
            <TouchableOpacity style={styles.inputStyle}>
                <Text>
                    SUBMIT
                </Text>
            </TouchableOpacity>
        </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:"center",
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    headerStyle:{
    backgroundColor:"yellow",
    width:100,
    height:35,
    alignItems:"center",
    justifyContent:"center",
    marginTop:77,
    textAlign:"center"
    },
    inputStyle:{
width:300,
height:40,
borderWidth:1.5,
fontSize:15,

    },
   StoryInputStyle:{
        width:300,
        height:400,
        borderWidth:1.5,
        fontSize:15,
        marginTop:35,
        textAlign:"center",
        fontSize:30
            },
  });