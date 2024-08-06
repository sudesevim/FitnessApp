import React from "react";
import { SafeAreaView, StyleSheet, View, Text} from 'react-native';

function MemberResult({route}) {
    const {user} = route.params;

    return (
        <SafeAreaView>
            <Text style={styles.message}> Kayıt Tamamlandı!</Text>
            <Text style={styles.label}>Üye adı: {user.username}</Text>
            <Text style={styles.label}>Üye soyadı: {user.userSurname} </Text>
            <Text style={styles.label}>Üye yaşı: {user.userAge}</Text>
            <Text style={styles.label}>Üye mail adresi: {user.userMail} </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 25,
        margin: 5,
    },
    message: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default MemberResult;