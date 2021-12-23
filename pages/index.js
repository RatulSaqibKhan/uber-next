import tw from "tailwind-styled-components"
import Map from "./components/map"

export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Saqib Khan</Name>
            <UserImage src="saqib_new.png" />
          </Profile>
        </Header>
        {/* ActionButtons */}
        {/* InputButton */}

      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex 
  flex-col 
  h-screen
`

const ActionItems = tw.div`
  flex-1
  p-4
`

const Header = tw.div`
flex
justify-between
items-center
`

const Profile = tw.div`
flex items-center
`

const Name = tw.div`
mr-4 w-25 text-sm
`

const UberLogo = tw.img`
h-28
`

const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px
`