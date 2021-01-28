import React from "react";
import {View} from "react-native";
import AppStyles from "../styles/AppStyles";

type props = {
    children: object,
    style?: object
}

const Card = function(props:props) {
    return (<View style={[AppStyles.common.card, props.style]}>
        {props.children}
    </View>);
}

export {Card};
