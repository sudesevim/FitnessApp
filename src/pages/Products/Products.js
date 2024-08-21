import React from "react-native";
import { SafeAreaView, Text, FlatList, ActivityIndicator} from "react-native";
import {API_URL} from '@env';

import ProductCard from "../../components/ProductCard";
import useFetch from "../../components/hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error";


const Products = ({navigation}) => {
    const {loading, data, error} = useFetch(API_URL);

    const handleProductSelect = () => {
        navigation.navigate('DetailPage');
    };

    const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={handleProductSelect} />
    ); 

    if(loading) {
       return <Loading/>;
    }

    if(error) {
        return <Error/>;
    }

    return <FlatList data={data} renderItem={renderProduct}/>;
};

export default Products;