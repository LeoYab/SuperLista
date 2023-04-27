import { StyleSheet, View, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Dropdown } from 'react-native-element-dropdown';

import Input from '../Input/Input'
import Buttons from "../Button/Button"
import ModalEmptyImput from "../Modals/ModalEmptyImput"




const ProdAdd = ({ onAddProd }) => {

    const categories = useSelector(state => state.categories.categories)
    const [inputNameProd, setInputNameProd] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const [inputQnty, setInputQnty] = useState("")
    const [inputProducts, setImputProducts] = useState(null)
    const [modalEmptyVisible, setModalEmptyVisible] = useState(false);
    const [value, setValue] = useState(null);
    const [saveList, setSaveList] = useState("");
    const [modalNameVisible, setModalNameVisible] = useState(false);


    useEffect(() => {

        if (inputProducts !== null) {
            onAddProd(inputProducts);
        }

    }, [inputProducts])

    const handleAddProduct = () => {

        setImputProducts({
            id: Date.now(),
            nameProd: inputNameProd,
            price: parseFloat(inputPrice),
            quantity: parseInt(inputQnty),
            category: value.id,
            icon: value.icon,
        });

        setInputNameProd('');
        setInputPrice('');
        setInputQnty('');
        setValue("");

    };

    const checkEmptyInput = () => {

        !inputNameProd.trim() || !inputPrice.trim() || !inputQnty.trim() || !value
            ?
            modalEmptyView()
            :
            handleAddProduct()

    };

    const modalEmptyView = () => {

        setModalEmptyVisible(true);
    }

    const onCancelModalCheck = () => {

        setModalEmptyVisible(false);
    };

    const numberInputPriceHandler = (inputText) => {


        if (/^(?:\d+(?:\.\d*)?|\.\d+)?$/.test(inputText)) {

            setInputPrice(inputText);

        }

    }

    const numberInputQuantityHandler = (inputText) => {

        setInputQnty(inputText.replace(/[^0-9]/g, ''))

    }

    return (
        <View style={styles.imputContainer}>
            <View style={styles.imputAdd}>
                <Dropdown
                    style={[styles.dropdown, !value ? styles.dropdowngrey : styles.dropdown]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    itemTextStyle={styles.itemTextStyle}
                    iconStyle={styles.iconStyle}
                    data={categories}
                    search
                    maxHeight={300}
                    labelField="title"
                    valueField="id"
                    placeholder="Categoría"
                    searchPlaceholder="Buscar..."
                    value={value}
                    onChange={item => {
                        setValue(item);
                    }}
                />

                <Input
                    value={inputNameProd}
                    placeholder={"Producto"}
                    onChangeText={setInputNameProd} />
                <Input
                    value={inputPrice}
                    placeholder={"Precio"}
                    onChangeText={numberInputPriceHandler}
                    keyboardType="numeric" />
                <Input
                    value={inputQnty}
                    placeholder={"Cantidad"}
                    onChangeText={numberInputQuantityHandler}
                    keyboardType="numeric" />



            </View>
            <View style={styles.buttonsContainer}>

                <Buttons style={styles.buttonAdd} onPress={checkEmptyInput}>+</Buttons>

            </View>
            <ModalEmptyImput
                modalEmptyVisible={modalEmptyVisible}
                onCancelModalCheck={onCancelModalCheck}
            />

        </View>
    )

}

export default ProdAdd

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    imputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    imputAdd: {
        flex: 1,
        flexDirection: "row",
    },
    dropdown: {
        width: 100,
        borderWidth: 2,
        borderColor: 'green',
        paddingHorizontal: width * 0.02,
        marginVertical: 2,
        borderRadius: 2,
        backgroundColor: "white",
        fontFamily: "OpenSansRegular",
        maxWidth: width * 0.245,
        height: 32,
        fontSize: 10,
        marginRight: 1,
    },
    dropdowngrey: {
        borderColor: 'grey',
    },
    itemTextStyle: {
        fontSize: 12,
        color: "#393939",
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 11,
        color: "grey",
        marginLeft: 1,
    },
    iconStyle: {
        width: 20,
        height: 10,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 14,
    },
    selectedTextStyle: {
        fontSize: 12,

    },
    buttonsContainer: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",

    },
    buttonAddDisable: {
        backgroundColor: "#fff",
        opacity: 0,
    },
    buttonSave: {

    },
})