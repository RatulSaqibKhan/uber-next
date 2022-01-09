import tw from "tailwind-styled-components"
import Map from "./components/map"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RideSelector from "./components/ride_selector";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query

  const [ pickupCoordinates, setPickupCoordinates ] = useState()
  const [ dropoffCoordinates, setDropoffCoordinates ] = useState()

  const getPickupCoordinates = (pickup) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoicmF0dWxzYXFpYmtoYW4iLCJhIjoiY2t4amNrYTA0MDU1YzJ4b2J4NTVpcm1hZSJ9.mlsD20BdC9D85DZ6D3cy_g",
        limit: 1
      })
    )
    .then(response => response.json())
    .then(data => {
      setPickupCoordinates(data.features[0].center);
    })
  }

  const getDropOffCoordinates = (dropoff) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoicmF0dWxzYXFpYmtoYW4iLCJhIjoiY2t4amNrYTA0MDU1YzJ4b2J4NTVpcm1hZSJ9.mlsD20BdC9D85DZ6D3cy_g",
        limit: 1
      })
    )
    .then(response => response.json())
    .then(data => {
      setDropoffCoordinates(data.features[0].center)
    })
  }

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropoff);
  }, [pickup, dropoff])


  return (
    <Wrapper>
      <Map 
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>
            Confirm Uber X
          </ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
  flex
  flex-col 
  h-screen
`
const RideContainer = tw.div`
  flex
  flex-col
  flex-1
`

const ConfirmButtonContainer = tw.div`
  text-white
  border-t-2
`

const ConfirmButton = tw.div`
  bg-black
  text-center
  m-4
  py-4
  text-xl
`