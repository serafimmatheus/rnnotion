import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { s } from './styles'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/app/styles/colors'
import Page from '../page'

type PageListType = {
  data: {
    id: string
    title: string
  }[]
}

export default function PageList({ data }: PageListType) {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>Privado</Text>

        <TouchableOpacity>
          <Feather name='more-horizontal' size={20} color={colors.gray[300]} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather name='plus' size={20} color={colors.gray[300]} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Page title={item.title} />}
        showsHorizontalScrollIndicator={false}
        style={s.list}
        ItemSeparatorComponent={() => <View style={s.separator} />}
      />
    </View>
  )
}
