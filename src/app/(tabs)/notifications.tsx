import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../styles/colors'

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notifications</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: colors.white,
  },
})
