import { StyleSheet } from 'react-native'

import React from 'react'
import ModalDel from "../Modals/ModalDel"

const ProdDel = ({ onDeleteItem, onCancelModal, itemToDel, modalDelVisible }) => {

  return (
    <ModalDel
      modalDelVisible={modalDelVisible}
      itemToDel={itemToDel}
      onDeleteItem={onDeleteItem}
      onCancelModal={onCancelModal}
    />
  )
}

export default ProdDel

const styles = StyleSheet.create({})