import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
/* import { CATEGORIES } from '../categories/categories' */
import GridItem from '../components/GridItem/GridItem'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../store/actions/category.action'

const Categories = ({ navigation }) => {

const categories = useSelector(state => state.categories.categories)
const products = useSelector(state => state.products.products) 
 const dispatch = useDispatch() 

    const onSelectGridItem = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Category', {
            categoryName: item.title,
            products: products,
        })
    } 

    const renderGridItem = ({ item }) => <GridItem item={item} onSelect={onSelectGridItem} />


    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}

export default Categories

const styles = StyleSheet.create({})