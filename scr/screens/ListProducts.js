import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Table from '../components/Table/Table'
import Product from '../components/Product/Product'

const ListProducts = () => {

    const listProducts = useSelector(state => state.listAction.productsList)
 
    /*  const list = listProducts.map(list => list.items).flat(); 
   */

  
    const renderProdByCat = ({ item, index }) => (

        <Product
            style={{ backgroundColor: index % 2 ? '#fff' : '#14e71021' }}
            item={item}
            filter={true}
        />

    )
    return (
        <>
            <Table /* products={products} */ filter={true} />
            <FlatList
                data={listProducts}
                keyExtractor={(item) => item.id}
                renderItem={renderProdByCat}
            />
        </>
    )
}


export default ListProducts

const styles = StyleSheet.create({})