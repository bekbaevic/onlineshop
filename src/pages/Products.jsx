import React, { useEffect } from 'react'
import ProductCardItem from '../components/ProductCardItem'
import { getCategory, getProduct } from '../getData/getAxiosData'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCardItem from '../components/CategoryCardItem'
import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import ScrollCarousel from 'scroll-carousel-react';

const Products = () => {
  const product = useSelector(state => state.product)
  const category = useSelector(state => state.category)
  const dispatch = useDispatch()

  useEffect(() => { getProduct(product.productsURL, dispatch) }, [])
  useEffect(() => { getCategory(category.categoriesURL, dispatch) }, [])
  return (
    <div>
      {category.categories.length === 0 ?
        <div className='gap-2 my-2 min-w-full animate-pulse flex '>
          {[1, 2, 3, 4].map(item => (
            <Typography key={item} as="div" variant='h1' className='bg-gray-300 w-[160px] rounded-sm h-[50px] overflow-hidden min-w-fit max-w-[200px] flex justify-center items-center'>&nbsp;</Typography>
          ))}
        </div>
        :
        <div className='flex max-w-[100%] overflow-x-auto pr-2 gap-2 my-2'>
          {category.categories.map(item => (
            <CategoryCardItem key={item.id} item={item} categories={category} dispatch={dispatch} />
          ))}
        </div>
      }
      <div>
        <div >
          <ScrollCarousel
            direction='ltr'
            autoplay
            margin={0}
            autoplaySpeed={1}
            speed={1}
            className='my-4'>
            {[
              "https://ishonchsavdo.uz/backend/storage/stock-images/2024-02-02%2004-29-31%2065cc41ab34a7c.jpg",
              'https://ishonchsavdo.uz/backend/storage/stock-images/2023-12-12%2011-47-10%206578483e7e89a.png',
              'https://pbs.twimg.com/media/E7HjBTDX0AExR7l.jpg',
              'https://ishonchsavdo.uz/backend/storage/post-contents/2024-01-01%2005-39-16%20659f7f0409262.png',
              "https://serv.comnet.uz/storage/16687543662022-11-18%2011.52.27.jpg",
              'https://serv.comnet.uz/storage/1646033494New%20Year%20Post%20(4).jpg',
              'https://www.smart174.ru/upload/iblock/ead/ne_proshelkay_padarki_mob.jpg',
              'https://pizzayoli.ru/image/cache/catalog/stocks/one_one-1000x0.jpg',
              'https://thumb.tildacdn.com/tild3563-3833-4133-a435-333339643738/-/format/webp/WhatsApp_Image_2023-.jpeg'
            ].map((item) => (
              <img className='h-[15vh]' src={item} key={item} />
            ))}
          </ScrollCarousel>
        </div>
        <div>
          {product.isLoading && product.products.length === 0 ?
            <div className='my-2 min-w-full animate-pulse grid sm:grid-cols-1 md:grid-cols-4 gap-4'>
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
            <div className='grid sm:grid-cols-1 md:grid-cols-4 gap-4'>
              {product.products.map(item => (
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