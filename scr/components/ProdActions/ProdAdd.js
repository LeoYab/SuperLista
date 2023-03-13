import { StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

import Input from '../Input/Input'
import Buttons from "../Button/Button"
import ModalEmptyImput from "../Modals/ModalEmptyImput"


const ProdAdd = ({ onAddProd, products }) => {

    const [inputNameProd, setInputNameProd] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const [inputQnty, setInputQnty] = useState("")
    const [inputProducts, setImputProducts] = useState([])
    const [modalEmptyVisible, setModalEmptyVisible] = useState(false);

    useEffect(() => {
        onAddProd(inputProducts);
    }, [inputProducts])


    const handleAddProduct = () => {

        setImputProducts(() => [...products, {
            id: Date.now(),
            nameProd: inputNameProd,
            price: parseFloat(inputPrice),
            quantity: parseInt(inputQnty)
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

const styles = StyleSheet.create({})