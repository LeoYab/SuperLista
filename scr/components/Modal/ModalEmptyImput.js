import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'

const ModalEmptyImput = ({modalEmptyVisible=false, onCancelModalCheck}) => {

  return (
    <Modal animationType="fade" transparent={true} visible={modalEmptyVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Completar los campos</Text>
          <View style={styles.buttonContainer}>
            <Button style={styles.deleteButton}  title="OK"  onPress={onCancelModalCheck} >
            </Button>
          {/*    <TouchableOpacity style={styles.cancelButton} onPress={onCancelModal}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>  */}
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
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
      deleteButton: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginRight: 10,
      },
      cancelButton: {
        backgroundColor: 'grey',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
})