import { Pressable, Text, View, Linking } from 'react-native';

const HomeScreen = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', padding: 20, backgroundColor: '#fff', }}>
            <Pressable style={{ flex: 1, height: '20%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', marginRight: 10, borderWidth: 1 }} onPress={() => { props.navigation.navigate('TodoList') }}>
                <Text>TODO</Text>
            </Pressable>

            <Pressable style={{ flex: 1, height: '20%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderWidth: 1 }} onPress={() => {
                Linking.openURL('http://192.168.0.102:3000/');
                // props.navigation.navigate('WebView');
            }}>

                <Text>FRAM WEATHER</Text>
            </Pressable>
        </View>
    );

};

export default HomeScreen;
