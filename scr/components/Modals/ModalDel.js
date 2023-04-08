import { StyleSheet, Text, View, Modal } from 'react-native'

import Buttons from '../Button/Button'
import Colors from '../../constants/Colors';
import ModalShadow from '../../constants/ModalShadow'

const ModalDel = ({ onDeleteItem, onCancelModal, itemToDel, listToDel, modalDelVisible }) => {

  const item = itemToDel ? itemToDel.nameProd : listToDel.nameList;
const itemListDel = itemToDel ? itemToDel.id : listToDel.id

  return (

    <Modal animationType="fade" transparent={true} visible={modalDelVisible} >

      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>¿Desea eliminar el producto {item}?</Text>
          <View style={styles.buttonContainer}>
            <Buttons style={styles.deleteButton} onPress={() => { onDeleteItem(itemListDel) }}>
              <Text style={styles.buttonText}>Sí</Text>
            </Buttons>
            <Buttons style={styles.cancelButton} onPress={() => { onCancelModal() }}>
              <Text style={styles.buttonText}>No</Text>
            </Buttons>
          </View>
        </View>
      </View>

    </Modal>
  );
};

export default ModalDel

const styles = StyleSheet.create({

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    ...ModalShadow,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
  },
  deleteButton: {
    backgroundColor: Colors.btnPrimary,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: Colors.btnSecondary,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})