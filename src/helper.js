export const sortFunction = (array, parameter) => {
 return array.sort((a, b) => a[parameter] > b[parameter] ? 1 : -1);
}

export const  checkKorrectTitle =  (obj, param, callback) =>  {
    obj.map(async(key) => {
    const url = key[param];
    const result = await fetch(url);
    const informationReceived = await result.json();
    return callback(key, param, informationReceived.name)
  })
  // const keysObj = obj.keys()
  // keysObj.map((key) => {
  //   keytitle
  // })
}

// const fetchAllData = async(obj) => {
//   const promises = obj.map(url => fetch(url))
//
//   const results = await Promise.all(promises)
//   return results
// }


// const obj = ['url.com', 'newUrcom']
// const fetchResults = await fetchAllData(obj)
