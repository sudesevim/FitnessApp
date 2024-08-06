import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from "./pages/Welcome";
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';

const Stack = createStackNavigator();


function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: true,
            }
            }>
               <Stack.Screen name="Welcome Screen" 
               component={Welcome}/> 
               <Stack.Screen
               name="MemberSignScreen"
               component={MemberSign} />
               <Stack.Screen 
               name="MemberResult"
               component={MemberResult}
               />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default App;