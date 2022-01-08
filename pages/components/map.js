import { useEffect } from "react";
import tw from "tailwind-styled-components"
import mapboxgl from "mapbox-gl"

mapboxgl.accessToken = 'pk.eyJ1IjoicmF0dWxzYXFpYmtoYW4iLCJhIjoiY2t4amNrYTA0MDU1YzJ4b2J4NTVpcm1hZSJ9.mlsD20BdC9D85DZ6D3cy_g';

const Map = (props) => {

  useEffect(() => {
    const lng = 90.3816
    const lat = 23.7618
    const lnglat = [lng, lat]
    const zoom = 12.11
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: lnglat,
      zoom: zoom
    });

    if(props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates)
    }
    
    if(props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates)
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.pickupCoordinates, props.dropoffCoordinates], {padding: 60});
    }

  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, lnglat) => {
    const place = new mapboxgl.Marker()
    .setLngLat(lnglat)
    .addTo(map);
  }

  return (
    <Wrapper id='map'>Map</Wrapper>
  )
}

const Wrapper = tw.div`
  flex-1
`

export default Map
