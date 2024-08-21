import React from "react";
import { SafeAreaView, Text } from "react-native";
import {APP_NAME, API_KEY, COMPANY_EMAIL, API_URL} from '@env';


const Products = () => {
    return (
        <SafeAreaView>
            <Text> Products </Text>
            <Text>My App name is {APP_NAME}</Text>
            <Text>My API Key is {API_KEY}</Text>
            <Text>Company email is {COMPANY_EMAIL}</Text>
            <Text>My Url is {API_URL} </Text>
        </SafeAreaView>
    );
};

export default Products;