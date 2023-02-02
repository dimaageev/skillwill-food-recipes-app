import React, {useEffect, useState} from 'react'

import {StyleSheet, Text, View} from 'react-native'

const FiltersScreen = (props) => {
   //    React.useEffect(() => {
   //       props.navigation.setParams({
   //          save: saveFilters
   //       })
   //    }, [saveFilters, props.navigation])

   //    React.useLayoutEffect(() => {
   //       props.navigation.setOptions({
   //          headerTitle: 'Filter Meals',
   //          headerLeft: () => (
   //             <HeaderButton
   //                iconName="ios-menu-outline"
   //                onPress={() => {
   //                   props.navigation.toggleDrawer()
   //                }}
   //             />
   //          ),
   //          headerRight: () => (
   //             <View style={styles.saveButton}>
   //                <HeaderButton
   //                   iconName="ios-save-outline"
   //                   onPress={() => props.route.params.save()}
   //                />
   //             </View>
   //          )
   //       })
   //    }, [props.navigation, props.route.params])

   return (
      <View style={styles.screen}>
         <Text style={styles.title}>Available Filters / Restrictions</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      alignItems: 'center'
   },
   title: {
      fontWeight: 'bold',
      fontSize: 22,
      margin: 20,
      textAlign: 'center'
   },
   filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      marginVertical: 15
   },
   saveButton: {
      marginHorizontal: 35
   }
})

export default FiltersScreen
