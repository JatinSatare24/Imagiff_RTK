import React from 'react'

import ResultGrid from '../components/ResultGrid'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import { useSelector } from 'react-redux'

const HomePage = () => {

    const { query } = useSelector((store) => store.search)

    return (
        <div>
            <SearchBar />
            {query &&
                (<><Tabs />
                    <ResultGrid /></>)
            }
        </div>
    )
}

export default HomePage
