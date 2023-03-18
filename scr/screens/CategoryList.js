import { FlatList } from 'react-native'

import Product from '../components/Product/Product'
import Table from '../components/Table/Table'


const CategoryList = ({ route }) => {


    const { allCategoryProducts, categoryId, filter } = route.params


    const prodByCategory = allCategoryProducts.filter(prod => prod.category === categoryId)




    const renderProdByCat = ({ item, index }) => (

        <Product
            style={{ backgroundColor: index % 2 ? '#fff' : '#14e71021' }}
            item={item}
            filter={filter}
        />

    )

    return (
        <>
        <Table products= {allCategoryProducts} filter={filter}/>
        <FlatList
            data={prodByCategory}
            keyExtractor={(item) => item.id}
            renderItem={renderProdByCat}
        />
        </>
    )
}

export default CategoryList

