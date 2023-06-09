import { useEffect, useState } from "react"
import Preview from '../components/Preview.jsx'
import styled from 'styled-components'
import { useSelector } from "react-redux"

export default function AllVideos(){
    const [allVideos, setAllVideos] = useState(null)

    const getVideos = async () => {
        const fetchUrl = `${import.meta.env.VITE_API_URL}/videos`
        const fetchConfig = { method: 'GET' }
        const rawResponse = await fetch(fetchUrl, fetchConfig)
        const response = await rawResponse.json()

        if (response.err) alert(`Failed to get videos: ${response.err}`)
        else setAllVideos(response)
    }

    useEffect(()=>{
        getVideos()
    }, [allVideos])

    const searchText = useSelector(state=>state.menu.searchText)

    return (
        <AllVideosPage>
            {allVideos &&  
                allVideos.map( ({ _id, user, author, title, videoUrl, createdAt }) => 
                    ( (title.toLowerCase().includes(searchText.toLowerCase()) || author.toLowerCase().includes(searchText.toLowerCase())) && 
                        <Preview key={_id} videoId={_id} userId={user} author={author} title={title} videoUrl={videoUrl} createdAt={createdAt}/>
                    )
                )
            }
            { (allVideos == null || allVideos.length == 0) && 
            
                <Loading>
                    <h1>Loading ...</h1>
                    <p>Server is waking up ...</p>
                    <p>Please allow up to a minute.</p>
                </Loading>
            }
        </AllVideosPage>
    )
}

export const AllVideosPage = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
    gap: 1rem 1rem;

    > * { // Preview elements
        /* outline: 1px solid white; */
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

const Loading = styled.div`
    padding: 1rem;

    h1 {
        margin-bottom: 1.5rem;
    }
    p {
        padding: 0.5rem 0;
    }
`