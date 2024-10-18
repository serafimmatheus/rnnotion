import { colors } from '@/app/styles/colors'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    width: '100%',
    gap: 12,
  },
  title: {
    color: colors.gray[300],
    fontSize: 16,
    marginStart: 20,
    marginTop: 12,
  },

  content: {
    gap: 12,
    paddingHorizontal: 20,
  },
})
