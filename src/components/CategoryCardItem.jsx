import { CardBody, Typography } from '@material-tailwind/react'
import React from 'react'

const CategoryCardItem = ({ item }) => {

  return (
    <CardBody className='category-btn cursor-pointer bg-blue-gray-50 rounded-sm h-[50px] overflow-hidden min-w-fit max-w-[200px] flex justify-center items-center active:bg-indigo-200 hover:bg-indigo-100'>
      <Typography className='font-[600]'>
        {item.title}
      </Typography>
    </CardBody>
  )
}

export default CategoryCardItem