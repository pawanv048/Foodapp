import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react';
import MapView from 'react-native-maps';


let { height, width } = Dimensions.get('window')


const OrderDelivery = ({ route, navigation}) => {

  const [restaurant, setRestaurant] = React.useState(null)
  const [streetName, setStreetName] = React.useState("")
  const [fromLocation, setFromLocation] = React.useState(null)
  const [toLocation, setToLocation] = React.useState(null)
  const [region, setRegion] = React.useState(null)

  const [duration, setDuration] = React.useState(0)
  const [isReady, setIsReady] = React.useState(false)
  const [angle, setAngle] = React.useState(0)

  React.useEffect(() => {
      let { restaurant, currentLocation } = route.params;

      let fromLoc = currentLocation.gps
      let toLoc = restaurant.location
      let street = currentLocation.streetName

      let mapRegion = {
          latitude: (fromLoc.latitude + toLoc.latitude) / 2,
          longitude: (fromLoc.longitude + toLoc.longitude) / 2,
          latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
          longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2
      }

      setRestaurant(restaurant)
      setStreetName(street)
      setFromLocation(fromLoc)
      setToLocation(toLoc)
      setRegion(mapRegion)

  }, [])



  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
      >
        
      </MapView>
    </View>
  )
}

export default OrderDelivery

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})