import React, { useState } from 'react'
import FoodInfo from '../components/FoodInfo'

function HomePage() {
    const [meal, setMeal] = useState<string>('morning')
    return (
        <>
            <div className='font-noto'>日本語：Noto SansCJK JP</div>
            <div className='grid grid-cols-4'>
                <FoodInfo title='hi' url='hello'/>

            </div>
        </>
    )
}

export default HomePage