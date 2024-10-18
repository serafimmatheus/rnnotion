import { FlatList, Text, View } from 'react-native'
import { s } from './styles'
import Page from '../page'
import Recent from '../recent'

type RecentListType = {
  data: {
    id: string
    title: string
    cover?: string
  }[]
}

export default function RecentList({ data }: RecentListType) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Recentes</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Recent data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.content}
      />
    </View>
  )
}
