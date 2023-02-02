import React, {useCallback} from 'react'
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native'
import HeaderButton from '../components/HeaderButton'

import {LogBox} from 'react-native'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {addMealFav, removeMealFav} from '../store/favSlice'

LogBox.ignoreLogs([
   'Non-serializable values were found in the navigation state',
   'A non-serializable value was detected in the state'
])

const ListItem = (props) => {
   return (
      <View style={styles.listItem}>
         <Text>{props.children}</Text>
      </View>
   )
}

const MealDetailsScreen = (props) => {
   const {meal: selectedMeal} = props.route.params
   const {meals: favorites} = useSelector((state) => state.fav)
   const [isFav, setIsFav] = React.useState(false)
   const dispatch = useDispatch()

   const favFunction = () => {
      if (isFav) {
         dispatch(removeMealFav(selectedMeal.id))
      } else {
         dispatch(addMealFav([selectedMeal]))
      }
   }

   const getFav = () => {
      setIsFav(favorites.filter((e) => e.id === selectedMeal.id).length !== 0)
   }

   React.useEffect(() => {
      getFav()
   }, [favorites])

   React.useLayoutEffect(() => {
      props.navigation.setOptions({
         headerTitle: selectedMeal.title,
         headerRight: () => (
            <HeaderButton
               iconName={isFav ? 'ios-star' : 'ios-star-outline'}
               onPress={favFunction}
            />
         )
      })
   }, [isFav])

   return (
      <ScrollView>
         <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
         <View style={styles.details}>
            <Text>{selectedMeal.duration}min</Text>
            <Text>{selectedMeal.complexity.toUpperCase()}</Text>
            <Text>{selectedMeal.affordability.toUpperCase()}</Text>
         </View>
         <Text style={styles.title}>Ingredients</Text>
         {selectedMeal.ingredients.map((ingredient) => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
         ))}
         <Text style={styles.title}>Steps</Text>
         {selectedMeal.steps.map((step) => (
            <ListItem key={step}>{step}</ListItem>
         ))}
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   image: {
      width: '100%',
      height: 200
   },
   details: {
      flexDirection: 'row',
      padding: 15,
      justifyContent: 'space-around',
      backgroundColor: '#dfe4ea'
   },
   title: {
      fontWeight: 'bold',
      fontSize: 22,
      textAlign: 'center'
   },
   listItem: {
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#ced6e0',
      borderWidth: 1,
      padding: 10
   }
})

export default MealDetailsScreen
