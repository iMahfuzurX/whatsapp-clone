import React from "react";
import {Text, TextInput, View} from "react-native";
import styles from "./styles";
import {Entypo, Fontisto, FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";

const InputBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color={'grey'} style={styles.icon}/>
                <TextInput
                    style={styles.textInput}
                    multiline
                />
                <Entypo name="attachment" size={24} color={'grey'} style={styles.icon} />
                <Fontisto name="camera" size={24} color={'grey'} style={styles.icon} />
            </View>
            <View style={styles.btnContainer}>
                <MaterialCommunityIcons name="microphone" size={28} color={'white'} />
            </View>
        </View>
    )
}

export default InputBox;