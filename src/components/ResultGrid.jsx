import React, { useEffect } from 'react'
import { fetchPhotos, fetchGifs } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults, clearResults } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'

const ResultGrid = () => {

    const dispatch = useDispatch()

    const { results, query, loading, activeTab, error } = useSelector((store) => store.search)

    useEffect(() => {
        if (!query) return

        dispatch(setLoading())

        const getData = async () => {

            try {
                let data = []

                if (activeTab === 'photos') {
                    let response = await fetchPhotos(query)
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        link: item.links.html
                    }))
                    console.log(data)
                }

                if (activeTab === 'gif') {
                    let response = await fetchGifs(query)
                    data = response.data.map((item) => ({
                        id: item.id,
                        type: 'gif',
                        title: item.title,
                        thumbnail: item.images.preview_gif.url,
                        src: item.images.original.mp4,
                        link: item.url
                    }))
                    console.log(data)
                }

                dispatch(setResults(data))
            } catch (error) {
                dispatch(setError(error.message))
            }

        }

        getData()

    }, [query, activeTab])

    if (!query) return <h1>Please search for a term</h1>
    if (error) return <h1>Error occured, please try again!</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div className='flex justify-between w-full flex-wrap gap-6 rounded overflow-auto px-10'>
            {results.map((item) => {
                return <div key={item.id}>
                    <a
                        target='_blank'
                        href={item.link}
                        rel='noopener noreferrer'
                        className='block'
                    >
                        <ResultCard item={item} />
                    </a>
                </div>
            })}

        </div>
    )
}

export default ResultGrid
