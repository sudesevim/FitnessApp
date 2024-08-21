import { SafeAreaView, Text, FlatList, ActivityIndicator} from "react-native";
import {API_URL} from '@env';

import ProductCard from "../../components/ProductCard";
import useFetch from "../../components/hooks/useFetch";


const Products = () => {
    const {loading, data, error} = useFetch(API_URL)
    console.log("render");
    console.log({loading, data: data.length, error});
    console.log('-----------------------');

    const renderProduct = ({item}) => <ProductCard product={item} />;

    if(error) {
        return <Text>{error}</Text>
    }

    if(loading) {
        return <ActivityIndicator size= "large" />;
    }
    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct}/>
        </SafeAreaView>
    );
};

export default Products;