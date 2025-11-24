import {useState} from 'react'
import data from './data'

//Single Accordian Item Component

const Index = () => {

    const [selected, setSelected] = useState(null);


  return (
    <div className='wrapper'>

        <div className='accordian'>
            {
                data && data.length > 0 ? data.map(dataItem => <div className='item'>
                    <div className='title'>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>

                </div>) : <p>No data available</p>
            }
        </div>
      
    </div>
  )
}

export default Index
