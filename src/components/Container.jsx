import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='w-[95%] sm:w-[90%] mx-auto max-w-[1400px]'>
            {children}
        </div>
    )
}

export default Container