import { CardBody, Typography } from '@material-tailwind/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterWithCategory, filterWithSearching } from '../reducers/product.slice'

const CategoryCardItem = ({ item }) => {

  const { products } = useSelector(state => state.product)
  const dispatch = useDispatch()

  function filterProducts(item) {
    dispatch(filterWithCategory(products.filter(i => i.categoryId == item.id)))
    dispatch(filterWithSearching(''))
  }

  return (
    <CardBody onClick={() => filterProducts(item)} className='category-btn cursor-pointer mb-2 bg-gray-200 rounded-sm h-[50px] overflow-hidden min-w-fit max-w-[200px] flex justify-center items-center active:scale-95 hover:bg-gray-300'>
      <Typography className='font-[600]'>
        {item.title}
      </Typography>
    </CardBody>
  )
}

export default CategoryCardItem