import React, { useState, useEffect } from 'react'
import Map from './Map'

const MapComponent = () => {
    const [searchedLocation, setSearchedLocation] = useState(null)
    useEffect(()=> {
        console.log(searchedLocation,'searchedLocation');
    }, [searchedLocation])
  return (
	<div>
		<Map setSearchedLocation={setSearchedLocation}/>
	</div>
  )
}

export default MapComponent
