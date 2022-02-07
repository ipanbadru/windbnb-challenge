import React, { useState } from 'react';
import Header from '../components/Header';
import Head from 'next/head'
import Card from '../components/Card';

export default function index() {
  const [guests, setGuests] = useState(0);
  const [city, setCity] = useState('Helsinki');
  const [country, setCountry] = useState('Finland');
  const changeLocation = (city, country) => {
    setCity(city);
    setCountry(country);
  }
  const changeGuests = totalGuests => {
    setGuests(totalGuests)
  }
  const stays = require('./data/stays.json');
  const filteredStays = stays.filter(stay => stay.city == city && stay.country == country && stay.maxGuests >= guests)
  return (
    <div className='container font-montserrat'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Mulish&display=swap" rel="stylesheet" />
      </Head>
      <Header
      city={city}
      country={country}
      changeLocation={changeLocation}
      guests={guests}
      changeGuests={changeGuests}
      />
      <div className="flex justify-between items-center">
        <div className="font-bold font-montserrat text-2xl">
          Stays in Findland
        </div>
        <div className="text-gray-600 font-medium text-sm">
          +12 Stays
        </div>
      </div>
      <div className={`flex flex-wrap`}>
        { filteredStays.map((stay, index) => (
          <Card 
          length={filteredStays.length}
          key={index}
          photo={stay.photo}
          superHost={stay.superHost}
          type={stay.type}
          beds={stay.beds}
          rating={stay.rating}
          title={stay.title}
          />
        ))}
      </div>
    </div>
  )
}
