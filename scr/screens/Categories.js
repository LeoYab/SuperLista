import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../categories/categories'
import GridItem from '../components/GridItem/GridItem'


const Categories = ({ navigation }) => {

   /*  const onSelectGridItem = (item) => {
        navigation.navigate('Category', {
            categoryId: item.id,
            categoryName: item.title,
            products: item,
            filter: true,
        })
    } */

    const renderGridItem = ({ item }) => <GridItem item={item} onSelect={onSelectGridItem} />


    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}

export default Categories

const styles = StyleSheet.create({})