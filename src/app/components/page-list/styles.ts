import { colors } from '@/app/styles/colors'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    paddingEnd: 20,
    paddingStart: 20,
    marginTop: 20,
    gap: 12,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingRight: 16,
  },

  title: {
    color: colors.gray[300],
    fontSize: 16,
    flex: 1,
  },

  list: {
    backgroundColor: colors.gray[700],
    borderRadius: 8,
    marginBottom: 24,
  },

  separator: {
    height: 0.5,
    backgroundColor: colors.gray[500],
    marginLeft: 42,
  },
})
