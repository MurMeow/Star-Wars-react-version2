// import React from 'react';

// const BASE_PATH = 'https://swapi.co/api/';
// const PEOPLE =  "people/";


 const  uploadsData = async (url) => {
   const result = await fetch(url);
   const informationReceived = await result.json();
   console.log(informationReceived);
 };

export default uploadsData;