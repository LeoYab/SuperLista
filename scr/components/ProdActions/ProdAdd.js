import { StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

import Input from '../Input/Input'
import Buttons from "../Button/Button"
import ModalEmptyImput from "../Modals/ModalEmptyImput"
import { Dropdown } from 'react-native-element-dropdown';
import { CATEGORIES } from '../../categories/categories'


const ProdAdd = ({ onAddProd, products }) => {

    const [inputNameProd, setInputNameProd] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const [inputQnty, setInputQnty] = useState("")
    const [inputProducts, setImputProducts] = useState([])
    const [modalEmptyVisible, setModalEmptyVisible] = useState(false);
    const [value, setValue] = useState(null);

    useEffect(() => {
        onAddProd(inputProducts);
    }, [inputProducts])


    console.log(inputProducts)



    const handleAddProduct = () => {

        setImputProducts(() => [...products, {
            id: Date.now(),
            nameProd: inputNameProd,
            price: parseFloat(inputPrice),
            quantity: parseInt(inputQnty),
            category: value,
        }]);

        setInputNameProd('');
        setInputPrice('');
        setInputQnty('');


    };

    const checkEmptyInput = () => {

        !inputNameProd.trim() || !inputPrice.trim() || !inputQnty.trim()
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
        <>
            <>
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
{/* 
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={CATEGORIES}
                    search
                    maxHeight={300}
                    labelField="title"
                    valueField="id"
                    placeholder="Select item"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                        setValue(item.id);
                    }}
                /> */}
                <Buttons onPress={checkEmptyInput}>+</Buttons>
            </>

            <ModalEmptyImput
                modalEmptyVisible={modalEmptyVisible}
                onCancelModalCheck={onCancelModalCheck}
            />


        </>
    )

}

export default ProdAdd

const styles = StyleSheet.create({
    dropdown: {
        width: 100,
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})