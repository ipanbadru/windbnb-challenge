import { useEffect, useState } from "react";

export default function Header(props) {
    const [focusLocation, setFocusLocation] = useState(false);
    const [focusGuest, setFocusGuest] = useState(false);
    const [guestsAdults, setGuestsAdults] = useState(0);
    const [guestsChildren, setGuestsChildren] = useState(0);
    const dataLocations = [
        {
            city: 'Helsinki',
            country: 'Finland'
        },
        {
            city: 'Turku',
            country: 'Finland'
        },
        {
            city: 'Oulu',
            country: 'Finland'
        },
        {
            city: 'Vaasa',
            country: 'Finland'
        },
    ];
    const clickLocation = (city, country) => {
        props.changeLocation(city, country);
    }
    const changeGuestsTotal = () => {
        props.changeGuests(guestsChildren + guestsAdults);
    }
    useEffect(() => {
        changeGuestsTotal();
    }, [guestsAdults, guestsChildren])
  return (
    <div className='font-mulish z-10'>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between my-9">
            <div className="mb-8 sm:mb-0">
                <img src="/images/logo.png" alt="" />
            </div>
            <div className="shadow rounded-2xl flex mx-auto sm:mx-0 overflow-hidden">
                <button className="py-5 px-4 border-gray-200 border-r" onClick={() => setFocusLocation(true)}>
                    {`${props.city}, ${props.country}`}
                </button>
                <button className="py-5 px-4 border-r border-gray-200 text-gray-400 text-sm flex items-center justify-center" onClick={() => setFocusGuest(true)}>
                    {props.guests == 0 ? 'Add' : props.guests} Guests
                </button>
                <button className="text-theme p-5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </button>
            </div>
        </div>
        <div className={`fixed inset-0 ${ focusGuest || focusLocation ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[100%]' } transition-all duration-500`}>
            <div className="absolute top-0 left-0 py-4 px-6 font-bold text-sm sm:hidden">
                Edit Your Search
            </div>
            <div className="w-full bg-white h-[85vh] sm:h-[60vh] py-14 px-10 sm:px-16 overflow-y-auto">
                <div className='flex flex-col sm:flex-row sm:justify-between shadow rounded-2xl'>
                    <div className="w-full sm:w-1/3 border-r">
                        <button className={`${focusLocation && 'border'} rounded-2xl border-gray-700 py-3 px-5 text-left w-full`}
                        onClick={() => {
                            setFocusGuest(false);
                            setFocusLocation(true);
                        }}>
                            <div className="font-bold text-xs">
                                Location
                            </div>
                            <div className="text-sm">
                                {`${props.city}, ${props.country}`}
                            </div>
                        </button>
                    </div>
                    <div className="w-full sm:w-1/3 border-r">
                        <button className={`${focusGuest && 'border'} rounded-2xl border-gray-700 py-3 px-5 text-left w-full`} 
                        onClick={() => {
                            setFocusGuest(true);
                            setFocusLocation(false);
                        }}>
                            <div className="font-bold text-xs">
                                Guests
                            </div>
                            <div className="text-sm text-gray-500">
                                {props.guests == 0 ? 'Add' : props.guests} Guests
                            </div>
                        </button>
                    </div>
                    <div className="w-1/3 hidden sm:flex justify-center py-2">
                        <button className="text-white bg-theme px-5 py-1 text-sm flex items-center rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span>Search</span>
                        </button>
                    </div>
                </div>
                <div className="flex mt-4">
                    <div className={`${focusLocation || 'hidden sm:block opacity-0'} px-3 sm:flex-[1]`}>
                        <ul>
                            { dataLocations.map((location, index) => (
                                <li className='py-5' key={index}>
                                    <button className='flex items-center text-sm text-gray-500 hover:text-gray-700 transition duration-200'
                                    onClick={() => clickLocation(location.city, location.country)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        {`${location.city}, ${location.country}`}
                                    </button>
                                </li>
                            )
                            ) }
                        </ul>
                    </div>
                    <div className={`${focusGuest || 'hidden sm:block opacity-0'} sm:flex-[2]`}>
                        <div className='flex flex-col text-sm my-7'>
                            <span className="font-bold">Adults</span>
                            <span className="text-gray-500">Ages or above</span>
                            <div className="flex items-center mt-3">
                                <button className="border text-3xl text-gray-500 rounded p-1" onClick={() => setGuestsAdults(guests => guests - 1 < 0 ? guests : guests - 1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <span className="mx-4 text-gray-800">
                                    { guestsAdults }
                                </span>
                                <button className="border text-3xl text-gray-500 rounded p-1" onClick={() => setGuestsAdults(guests => guests + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col text-sm mt-7'>
                            <span className="font-bold">Children</span>
                            <span className="text-gray-500">Ages 2-12</span>
                            <div className="flex items-center mt-3">
                                <button className="border text-3xl text-gray-500 rounded p-1" onClick={() => setGuestsChildren(guests => guests - 1 < 0 ? guests : guests - 1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <span className="mx-4 text-gray-800">
                                    { guestsChildren }
                                </span>
                                <button className="border text-3xl text-gray-500 rounded p-1" onClick={() => setGuestsChildren(guests => guests + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 sm:hidden">
                    <button className="text-white bg-theme px-5 py-3 mx-auto text-sm flex items-center rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span>Search</span>
                    </button>
                </div>
            </div>
            <div className={`w-full h-[40vh] bg-gray-800 bg-opacity-50 ${ focusGuest || focusLocation ? 'opacity-100 block' : 'opacity-0 hidden' } transition-all duration-1000`}
            onClick={() => {
                setFocusGuest(false);
                setFocusLocation(false);
            }}
            >
            </div>
        </div>
    </div>
  )
}
