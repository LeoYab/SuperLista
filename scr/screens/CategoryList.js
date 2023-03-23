import { FlatList } from 'react-native'

import Product from '../components/Product/Product'
import Table from '../components/Table/Table'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../store/actions/category.action'

const CategoryList = ({ route }) => {
    
    const categories = useSelector(state => state.categories.selected)

     const products = useSelector(state => state.products.products) 

     console.log(products) 

  /* REVISAR LOS PRODUCTOS ENVIADOS POR USESELECTOR YA QUE NO APARECEN EN EL FILTRO */
/* 
    const dispatch = useDispatch() */

  /*  const { products, categoryId } = route.params;   */


    const prodByCategory = products.filter(prod => prod.category === categories.id)




    const renderProdByCat = ({ item, index }) => (

        <Product
            style={{ backgroundColor: index % 2 ? '#fff' : '#14e71021' }}
            item={item}
            filter={true}
        />

    )

    return (
        <>
        <Table products= {products} filter={true}/>
        <FlatList
            data={prodByCategory}
            keyExtractor={(item) => item.id}
            renderItem={renderProdByCat}
        />
        </>
    )
}

export default CategoryList

