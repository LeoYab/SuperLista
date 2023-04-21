import { FlatList } from 'react-native'
import React from 'react'
/* import { CATEGORIES } from '../categories/categories' */
import GridItem from '../components/GridItem/GridItem'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../store/actions/category.action'
import Colors from '../constants/Colors'
const CategoryItem = ({ navigation }) => {


    const categories = useSelector(state => state.categories.categories)

    const dispatch = useDispatch()


    const onSelectGridItem = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Category', {
            categoryName: item.title,
        })
    }

    const renderGridItem = ({ item }) => <GridItem item={item} onSelect={onSelectGridItem} />


    return (
        <>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={renderGridItem}
                numColumns={1}
            />
        </>
    )
}

export default CategoryItem
