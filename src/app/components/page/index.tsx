import { Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { s } from './styles'
import { colors } from '@/app/styles/colors'

type RecentListType = {
  title: string
}

export default function Page({ title }: RecentListType) {
  return (
    <View style={s.container}>
      <Feather name='chevron-right' size={20} color={colors.gray[300]} />

      <Feather name='file-text' size={20} color={colors.gray[300]} />

      <Text style={s.title}>{title}</Text>

      <TouchableOpacity activeOpacity={0.7}>
        <Feather name='plus' size={20} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  )
}
