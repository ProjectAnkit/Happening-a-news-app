import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import { AntDesign } from '@expo/vector-icons';

function Header({searchText, setSearchText, fetchSearchResult}) {

    const handleText = (txt)=> {
        setSearchText(txt)
    }

    return(
        <View style={styles.headerContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='Search the latest news'
                maxLength={35}
                value={searchText}
                onChangeText={handleText}
            />
            <TouchableOpacity style={styles.searchButton} onPress={()=> fetchSearchResult(searchText)}>
                <AntDesign name="search1" size={24} color="black"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        width: "90%",
        height: 60,
        marginBottom: 10,
        alignSelf: "center", // Align the container horizontally
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center", // Align items vertically
        elevation: 10,
        shadowOffset: { width: 2, height: -2 },
        shadowColor: "black",
    },
    textInput: {
        flex: 1, // Take remaining space in the container
    },
    searchButton: {
        marginLeft: 10, // Add some spacing between the text input and the button
    },
});
export default Header
