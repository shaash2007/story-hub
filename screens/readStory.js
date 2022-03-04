import React from 'react'
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native"

export default  class ReadStory extends React.Component {
        render(){
            return(
                <View style={styles.container}>
                    <Text>
                        ReadStory
                    </Text>
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
          });  