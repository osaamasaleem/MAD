import React from 'react';
import { ScrollView } from 'react-native';

import Login from './components/Login';
import Signup from './components/Signup';


export default function App() {
    return(
    <ScrollView>

    <Login />
    <Signup/>

    </ScrollView>
    );
}
