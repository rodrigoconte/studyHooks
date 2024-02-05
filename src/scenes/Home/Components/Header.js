import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import logo from "../../../assets/logo.png"

export default function Header() {
    return <View style={styles.header}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.titleHeader}>Olá, Rodrigo</Text>
        <Text style={styles.headline}>Encontre os melhores produtores</Text>
        </View>
}

const styles = StyleSheet.create ({
    header: {
        backgroundColor: "#F6F6F6",
        padding: 16
    },
    titleHeader: {
        marginTop: 24,
        fontSize: 32,
        lineHeight: 42,
        fontWeight: "bold"
    },
    image: {
        width: 70,
        height: 28
    },
    headline: {
        fontSize: 16,
        lineHeight: 26
    }
})