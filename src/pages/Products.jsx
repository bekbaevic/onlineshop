import React, { useEffect } from 'react'
import ProductCardItem from '../components/ProductCardItem'
import { getCategory, getProduct } from '../getData/getAxiosData'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCardItem from '../components/CategoryCardItem'
import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import { filterWithCategory, filterWithSearching } from '../reducers/product.slice'

const Products = () => {
  const product = useSelector(state => state.product)
  const category = useSelector(state => state.category)
  const dispatch = useDispatch()

  useEffect(() => { getProduct(product.productsURL, dispatch) }, [])
  useEffect(() => { getCategory(category.categoriesURL, dispatch) }, [])
  return (
    <div>
      <div className='border-b-[2px] shadow-sm'>

        {category.categories.length === 0 ?
          <div className='gap-2 my-2 min-w-full animate-pulse flex '>
            {[1, 2, 3, 4].map(item => (
              <Typography key={item} as="div" variant='h1' className='bg-gray-300 w-[160px] rounded-sm h-[50px] overflow-hidden min-w-fit max-w-[200px] flex justify-center items-center'>&nbsp;</Typography>
            ))}
          </div>
          :
          <div className='flex max-w-[100%] overflow-x-auto pr-2 gap-2 my-2'>
            <div onClick={() => (dispatch(filterWithCategory([])), dispatch(filterWithSearching('')))} className='category-btn cursor-pointer mb-2 bg-gray-200 rounded-sm h-[50px] overflow-hidden min-w-[60px] flex justify-center items-center active:scale-95 hover:bg-gray-300'>
              <Typography className='font-[600]'>All</Typography>
            </div>
            {category.categories.map(item => (
              <CategoryCardItem key={item.id} item={item} categories={category} dispatch={dispatch} />
            ))}
          </div>
        }
      </div>
      <div>
        <div className='mb-2  px-4 py-[8px] '>
          <Typography className='font-[700] text-[22px] '>
            {product.filteredProducts.length !== 0 ? category.categories.find(item => item.id == product.filteredProducts[0].categoryId).title : "All"}
          </Typography>
        </div>
        <div>
          {product.isLoading && product.products.length === 0 ?
            <div className='my-2 min-w-full animate-pulse grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {[2, 1, 3, 4].map(item => (
                <Card key={item} className="max-h-[460px] min-h-[460px] flex flex-col justify-between border-[1px] border-gray-200">
                  <CardHeader shadow={false} floated={false} className="relative mb-0 ">
                    <div className='h-[200px] w-full flex justify-center items-center border-[1px] rounded-md bg-gray-200'>
                      <div className='bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center'>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-12 w-12 text-gray-200"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      </div>
                    </div>

                  </CardHeader>
                  <CardBody className='flex flex-col gap-2'>
                    <Typography className='bg-gray-200 h-[15px] w-full'>&nbsp;</Typography>
                    <div className='flex gap-2'>
                      <Typography className='bg-gray-200 h-[15px] w-full'>&nbsp;</Typography>
                      <Typography className='bg-gray-200 h-[15px] w-full'>&nbsp;</Typography>
                    </div>
                    <Typography className='bg-gray-200 h-[15px] w-full'>&nbsp;</Typography>
                    <div className='flex gap-2'>
                      <Typography className='bg-gray-200 h-[15px] w-full'>&nbsp;</Typography>
                      <Typography className='bg-gray-200 h-[15px] w-full'>&nbsp;</Typography>
                    </div>
                    <Typography className='bg-gray-200 h-[15px] w-full'>&nbsp;</Typography>

                  </CardBody>
                  <CardFooter className="pt-0 flex gap-2">
                    <Typography
                      className=" w-[80%] py-[6px] border-[1px]  rounded-md bg-gray-200 h-[40px] shadow-none ">&nbsp;
                    </Typography>
                    <Typography
                      className="border-[1px]  w-[20%] py-[6px] rounded-md bg-gray-200 h-[40px] shadow-none">&nbsp;
                    </Typography>
                  </CardFooter>
                </Card>
              ))}
            </div>
            :
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {(!product.searchItem ? (product.filteredProducts.length !== 0 ? product.filteredProducts : product.products) : product.searchFilterProducts).map(item => (
                <ProductCardItem key={item.id} item={item} product={product} dispatch={dispatch} />
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Products