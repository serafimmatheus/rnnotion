import { colors } from '@/app/styles/colors'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    padding: 16,
  },

  title: {
    flex: 1,
    color: colors.gray[100],
    fontSize: 16,
  },
})
