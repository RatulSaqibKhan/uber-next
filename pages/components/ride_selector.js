import tw from "tailwind-styled-components"
import { carList } from "../data/carList";
import { useState, useEffect } from 'react';

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {
  const [rideDuration, setRideDuration] = useState(0);

  // get ride duration from MAPBOX API
  // 1. Pickup coordinates
  // 2. Dropoff coordinates
  useEffect(() => {
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoicmF0dWxzYXFpYmtoYW4iLCJhIjoiY2t4amNrYTA0MDU1YzJ4b2J4NTVpcm1hZSJ9.mlsD20BdC9D85DZ6D3cy_g",
      })
    ).then(response => response.json())
    .then(data => {
      setRideDuration(data.routes[0].duration / 100)
    });
  }, [pickupCoordinates, dropoffCoordinates])

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more!</Title>
      <CarList>
        { carList.map((car, index) => {
          return (
            <Car key={index}>
              <CarImage src={car.imgUrl} />
              <CarDetails>
                <Service>{car.service}</Service>
                <Time>5 mins Away</Time>
              </CarDetails>
              <Price>${Number(car.multiplier * rideDuration).toFixed(2)}</Price>
            </Car>
          )
        })}
      </CarList>
    </Wrapper>
  )
}

export default RideSelector;

const Wrapper = tw.div`
  flex
  flex-col
  flex-1
  overflow-y-hidden
`

const Title = tw.div`
  text-gray-500
  text-center
  text-xs
  py-2
  border-b
`

const CarList = tw.div`
  overflow-y-scroll
  py-2
`

const Car = tw.div`
  flex
  p-4
  items-center
`

const CarImage = tw.img`
  h-14
  mr-5
`

const CarDetails = tw.div`
  flex-1
`

const Service = tw.div`
  font-medium
`

const Time = tw.div`
  text-xs
  text-blue-500
`

const Price = tw.div`
  text-sm
`
