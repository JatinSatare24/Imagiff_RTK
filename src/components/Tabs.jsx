import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {

    const tabs = ['photos', 'gif']

    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)

    return (
        <div className='flex gap-5 p-10'>
            {tabs.map((element, id) => {
                return <button
                    className={`${activeTab === element ? 'bg-blue-700' : 'bg-gray-600'} transition px-5 py-2 rounded uppercase cursor-pointer active:scale-95`}
                    key={id}
                    onClick={() => {
                        dispatch(setActiveTab(element))
                    }}
                >
                    {element}
                </button>
            })}
        </div>
    )
}

export default Tabs
