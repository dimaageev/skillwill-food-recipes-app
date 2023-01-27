import React from 'react'
import {Animated, Dimensions, View, TouchableOpacity, Text} from 'react-native'

const {width} = Dimensions.get('screen')

function MyTabBar({state, descriptors, navigation, position}) {
   const translateX = position.interpolate({
      inputRange: [0, 1],
      outputRange: [9, 90]
   })

   const animatedStyles = {transform: [{translateX: translateX}]}

   return (
      <View
         style={{
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 0,
            bottom: 60,
            width: width
         }}>
         <View
            style={{
               flexDirection: 'row',
               backgroundColor: 'white',
               height: 60,
               width: 160,
               borderRadius: 60
            }}>
            <Animated.View
               style={[
                  {
                     backgroundColor: '#b299df',
                     height: 60,
                     width: 60,
                     borderRadius: 60,
                     position: 'absolute'
                  },
                  animatedStyles
               ]}
            />
            {state.routes.map((route, index) => {
               const {options} = descriptors[route.key]

               const label =
                  options.tabBarLabel !== undefined
                     ? options.tabBarLabel
                     : options.title !== undefined
                     ? options.title
                     : route.name

               const isFocused = state.index === index

               const onPress = () => {
                  const event = navigation.emit({
                     type: 'tabPress',
                     target: route.key,
                     canPreventDefault: true
                  })

                  if (!isFocused && !event.defaultPrevented) {
                     // The `merge: true` option makes sure that the params inside the tab screen are preserved
                     navigation.navigate({name: route.name, merge: true})
                  }
               }

               const onLongPress = () => {
                  navigation.emit({
                     type: 'tabLongPress',
                     target: route.key
                  })
               }

               const inputRange = state.routes.map((_, i) => i)

               return (
                  <TouchableOpacity
                     accessibilityRole="button"
                     accessibilityState={isFocused ? {selected: true} : {}}
                     accessibilityLabel={options.tabBarAccessibilityLabel}
                     testID={options.tabBarTestID}
                     onPress={onPress}
                     onLongPress={onLongPress}
                     key={route.key}
                     style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                     }}>
                     {!options.tabBarIcon ? null : options.tabBarIcon()}
                     <Text style={{fontSize: 10}}>{label}</Text>
                  </TouchableOpacity>
               )
            })}
         </View>
      </View>
   )
}

export default MyTabBar
