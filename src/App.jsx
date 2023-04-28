import './App.css'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from './api'

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const images = await searchImages(term);
    setImages(images);
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className="flex w-full mt-5 justify-between px-16">
          <h1 className='text-xl w-1/5 font-bold hover:text-purple-900 hover:scale-105 transition'>Search Images API</h1>
          <SearchBar onSubmit={handleSubmit} />
        </div>
        <ImageList images={images} />
      </div>
    </>
  )
}

export default App
