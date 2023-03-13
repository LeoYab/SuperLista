import { StyleSheet, Text, View, Modal } from 'react-native'

import Buttons from '../Button/Button'
import Colors from '../../constants/Colors'
import { ModalShadow } from '../../constants/ModalShadow'

const ModalEmptyImput = ({ modalEmptyVisible, onCancelModalCheck }) => {


  return (
    <Modal animationType="fade" transparent={true} visible={modalEmptyVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Completa los campos faltantes</Text>
          <View style={styles.buttonContainer}>
            <Buttons style={styles.confirmButton} onPress={onCancelModalCheck}>OK</Buttons>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ModalEmptyImput

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
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
    width: '100%',
  },
  confirmButton: {
    backgroundColor: Colors.btnPrimary,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})