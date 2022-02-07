import React from 'react';
import Image from 'next/image'
export default function Card(props) {
  return (
      <div className={`w-full sm:w-[48%] lg:w-80 xl:w-96 mt-10 mr-2 xl:mr-7`}>
          <div className='w-full h-72 rounded-3xl relative overflow-hidden -z-30'>
              <Image src={props.photo}
              alt="Image"
              layout='fill'
              objectFit='cover'
              placeholder='empty'
              />
          </div>
          <div className="mt-3 flex items-center justify-between">
              <div>
                { props.superHost && 
                  <button className="border border-[#4F4F4F] uppercase py-1 px-2 font-bold text-xs text-gray-700 rounded-full mr-2">
                      Super Host
                  </button>
                }
                  <span className="text-gray-500 font-medium text-sm">
                    {`${props.type} ${props.beds && '.' + props.beds + ' beds'}`}
                  </span>
              </div>
              <div className='flex items-center'>
                  <span className='text-[#EB5757]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm font-medium">
                    { props.rating }
                  </span>
              </div>
          </div>
          <div className="font-semibold mt-2">
            { props.title }
          </div>
      </div>
  )
}
