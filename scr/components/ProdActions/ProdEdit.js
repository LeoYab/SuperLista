import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';

import ModalEdit from '../Modals/ModalEdit';
import ModalEmptyImput from "../Modals/ModalEmptyImput"

const ProdEdit = ({ products, productSelectToEdit, modalEditVisible, onEditProd }) => {


  const [editNameProd, setEditNameProd] = useState("")
  const [editPrice, setEditPrice] = useState("")
  const [editQnty, setEditInputQnty] = useState("")
  const [productsEdited, setProductsEdited] = useState([])
  const [modalEmptyVisible, setModalEmptyVisible] = useState(false);
  const [modalEditView, setModalEditView] = useState(false);

  useEffect(() => {

    if (productSelectToEdit != {}) {
      setEditNameProd(productSelectToEdit.nameProd)
      setEditPrice(productSelectToEdit.price ? productSelectToEdit.price.toString() : "")
      setEditInputQnty(productSelectToEdit.quantity ? productSelectToEdit.quantity.toString() : "")
      setModalEditView(modalEditVisible)
    }
  }, [productSelectToEdit])

  useEffect(() => {
    onEditProd(productsEdited);
  }, [productsEdited])


  const numberInputPriceHandler = (inputText) => {

    if (/^(?:\d+(?:\.\d*)?|\.\d+)?$/.test(inputText)) {

      setEditPrice(inputText);

    }

  }

  const numberInputQuantityHandler = (inputText) => {

    setEditInputQnty(inputText.replace(/[^0-9]/g, ''))

  }

  const replaceProd = () => {

    const replaceProds = products.filter((product) => product.id !== productSelectToEdit.id)

    setProductsEdited([...replaceProds, {
      id: productSelectToEdit.id,
      nameProd: editNameProd,
      price: parseFloat(editPrice),
      quantity: parseInt(editQnty)
    }].sort((a, b) => a.id - b.id));

    setModalEditView(false);
    setEditNameProd('');
    setEditPrice('');
    setEditInputQnty('');

  };

  const onCancelModalCheck = () => {

    setModalEmptyVisible(false);
  };

  const checkEmptyInput = () => {

    !editNameProd.trim() || !editPrice.trim() || !editQnty.trim()
      ?
      setModalEmptyVisible(true)
      :
      replaceProd()

  };

  return (
    <>

      <ModalEdit
        nameProd={editNameProd}
        price={editPrice}
        quantity={editQnty}
        setNameProd={setEditNameProd}
        numberInputPriceHandler={numberInputPriceHandler}
        numberInputQuantityHandler={numberInputQuantityHandler}
        modalEditVisible={modalEditView}
        checkEmptyInput={checkEmptyInput}
      />

      <>
        <ModalEmptyImput
          modalEmptyVisible={modalEmptyVisible}
          onCancelModalCheck={onCancelModalCheck}
        />
      </>
    </>
  )

}
export default ProdEdit

const styles = StyleSheet.create({})