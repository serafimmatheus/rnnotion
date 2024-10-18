import { View, StyleSheet } from 'react-native'
import Header from '../components/header'
import RecentList from '../components/recent-list'

import { DATA } from '@/utils/data'
import PageList from '../components/page-list'

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <RecentList data={DATA.RECENT} />
      <PageList data={DATA.PAGES} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
  },
})
