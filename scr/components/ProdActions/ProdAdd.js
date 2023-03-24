import { StyleSheet, View, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'

import Input from '../Input/Input'
import Buttons from "../Button/Button"
import ModalEmptyImput from "../Modals/ModalEmptyImput"
import { Dropdown } from 'react-native-element-dropdown';
/* import { CATEGORIES } from '../../categories/categories' */
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../../store/actions/category.action'

const ProdAdd = ({ onAddProd, saveList }) => {

const categories = useSelector(state => state.categories.categories)
/* 
const dispatch = useDispatch() */

    const [inputNameProd, setInputNameProd] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const [inputQnty, setInputQnty] = useState("")
    const [inputProducts, setImputProducts] = useState([])
    const [modalEmptyVisible, setModalEmptyVisible] = useState(false);
    const [value, setValue] = useState(null);

    useEffect(() => {

        onAddProd(inputProducts);
      
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


                <Dropdown
                    style={[styles.dropdown, !value ? styles.dropdowngrey : styles.dropdown]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
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
            </View>
            <View style={styles.buttonsContainer}>
            <Buttons  disabled={true} style={styles.buttonAddDisable} />

                <Buttons style={styles.buttonAdd} onPress={checkEmptyInput}>+</Buttons>
                
                <Buttons style={styles.buttonSave} onPress={saveList}>Guardar</Buttons>
                
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
        borderRadius: 5,
        backgroundColor: "white",
        fontFamily: "OpenSansRegular",
        maxWidth: width * 0.245,
        height: 32,
        fontSize: 10,
    },
    dropdowngrey: {
        borderColor: 'grey',

    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 13,
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
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",

    },
    buttonAddDisable:{
        backgroundColor: "#fff",
opacity:0,
    },
    buttonSave:{

    },
})