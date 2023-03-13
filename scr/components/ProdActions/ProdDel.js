import { StyleSheet } from 'react-native'

import React from 'react'
import ModalDel from "../Modals/ModalDel"

const ProdDel = ({ onDeleteProd, productSelectToDel, modalDelVisible, onCancelModal }) => {

  return (
    <ModalDel
      modalDelVisible={modalDelVisible}
      productSelectToDel={productSelectToDel}
      onDeleteProd={onDeleteProd}
      onCancelModal={onCancelModal}
    />
  )
}

export default ProdDel

const styles = StyleSheet.create({})