import React, { useState, useEffect, useContext } from 'react';
import unsplash from '../utils/unsplashConfig';
import { ImgContext } from '../utils/ImgContext';

const UnsplashSearch = ({ largeImgPreview }) => {

    const [imageList, setImageList] = useState([]);
    const [searchText, setSearchText] = useState('setup');
    const { setUnsplashImage } = useContext(ImgContext);


    const searchImages = () => {

        unsplash.search
            .getPhotos({
                query: searchText,
                page: 1,
                per_page: 30,
                // orientation:'portrait'


            })
            .then(response => {
                // console.log(response.response.results);
                setImageList(response.response.results)
            });
    }


    const selectImage = (image) => {
        setUnsplashImage({
            url: image.urls.regular,
            name: image.user.name,
            avatar: image.user.profile_image.small,
			profile: `${image.user.links.html}?utm_source=Coverlab&utm_medium=referral`,
            downloadLink: image.links.download_location

        })


    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        searchImages(searchText);

    }

    useEffect(() => {

        unsplash.search
            .getPhotos({
                query: 'setup',
                page: 1,
                per_page: 30

            })
            .then(response => {
                // console.log(response.response.results);
                setImageList(response.response.results)
            });
    }, [])

    return (
        <div className='w-full h-full'>
            <div className="flex flex-col p-2  bg-white items-center justify-center">

                <div className="flex items-center w-full px-4 md:px-6">
                    <form onSubmit={(e) => handleSearchSubmit(e)} className="mx-auto w-full flex items-center gap-2 bg-white rounded-xl border border-gray-200 shadow-sm mb-3 px-2">
                        <input
                            type="text"
                            value={searchText}
                            placeholder="Search high-quality Unsplash photos"
                            aria-label="Search Unsplash photos"
                            className="w-full text-base md:text-lg bg-transparent p-3 md:p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-400"
                            onChange={(e) => setSearchText(e.target.value)}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            onClick={() => searchImages(searchText)}
                            className="shrink-0 inline-flex items-center justify-center h-11 w-11 md:h-12 md:w-12 rounded-lg bg-gray-900 text-white hover:bg-black transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            aria-label="Search"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </form>

                </div>


                <div className="overflow-y-scroll w-full pb-12 overflow-x-hidden h-max justify-center flex flex-wrap">
                    {
                        imageList.map(image => {
                            return <div key={image.id}
                                className={`rounded-lg relative cursor-pointer m-1 ${largeImgPreview ? ' h-44 w-60' : 'h-24 w-40'
                                    }`}
                            >
                                <span className="font-Inter top-2 left-2 absolute text-sm font-semibold text-white opacity-50 ">Click to Select</span>
                                <img src={image.urls.regular}
                                    alt={image.alt_description}
                                    onClick={() => selectImage(image)
                                    }
                                    className="rounded-lg object-cover h-full w-full"
                                />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default UnsplashSearch;