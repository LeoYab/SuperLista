import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import Product from '../components/Product/Product'
import Table from '../components/Table/Table'

const CategoryList = () => {

    let prodByCategory = []

    const categories = useSelector(state => state.categories.selected)
    const user = useSelector(state => state.auth.userId);
    const prods = useSelector(state => state.products.users[user].products)

    if (prods && categories) {
        prodByCategory = prods.filter(prod => prod.category === categories.id)
    }


    const renderProdByCat = ({ item, index }) => (

        <Product
            style={{ backgroundColor: index % 2 ? '#fff' : '#14e71021' }}
            item={item}
            filter={true}
        />

    )

    return (
        <>
            <Table products={prods} filter={true} />
            <FlatList
                data={prodByCategory}
                keyExtractor={(item) => item.id}
                renderItem={renderProdByCat}
            />
        </>
    )
}

export default CategoryList

