import tw from "tailwind-styled-components"

const RideSelector = () => {
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more!</Title>
      <CarList>
        <Car>
          <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
          <CarDetails>
            <Service>Uber X</Service>
            <Time>5 mins Away</Time>
          </CarDetails>
          <Price>$20.00</Price>
        </Car>
      </CarList>
    </Wrapper>
  )
}

export default RideSelector;

const Wrapper = tw.div`
  flex-1
`

const Title = tw.div`
  text-gray-500
  text-center
  text-xs
  py-2
  border-b
`

const CarList = tw.div`
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
