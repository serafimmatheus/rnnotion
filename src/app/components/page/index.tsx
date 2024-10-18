import { Text, View } from 'react-native'
import { s } from './styles'

type RecentListType = {
  data: {
    id: string
    title: string
    cover?: string
  }
}

export default function Page({ data }: RecentListType) {
  return (
    <View style={s.container}>
      <Text style={s.title}>{data.title}</Text>
    </View>
  )
}
