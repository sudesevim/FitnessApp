import LottieView from "lottie-react-native";
import React from "react";

function Error() {
    return <LottieView style= {{flex: 1}} source={(require('../../assets/error.json'))} autoPlay/>;
}

export default Error;