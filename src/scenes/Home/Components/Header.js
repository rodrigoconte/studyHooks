import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getHeader, getSellers } from "../../../Services/LoadData";
import logo from "../../../assets/logo.png"

class Header extends React.Component {
    state = {
        header: {
            welcome: "",
            headline: ""
        }
    }

    updateHeader() {
        const headerData = getHeader();
        this.setState({ header: headerData });
    }
    
    componentDidMount() {
        this.updateHeader();
    }

    render() {
        return <View style={styles.header}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.titleHeader}>{this.state.header.welcome}</Text>
        <Text style={styles.headline}>{this.state.header.headline}</Text>
        </View>
    }
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

export default Header;