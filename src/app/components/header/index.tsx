import { Image, Text, TouchableOpacity, View } from 'react-native'
import { s } from './styles'

import { Feather } from '@expo/vector-icons'
import { colors } from '@/app/styles/colors'

export default function Header() {
  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={{
          uri: 'https://github.com/serafimmatheus.png',
        }}
      />

      <View style={s.user}>
        <Text style={s.name}>Matheus Serafim</Text>
        <Text style={s.email}>matheus18serafim@gmail.com</Text>
      </View>

      <TouchableOpacity>
        <Feather name='more-horizontal' size={20} color={colors.gray[100]} />
      </TouchableOpacity>
    </View>
  )
}
