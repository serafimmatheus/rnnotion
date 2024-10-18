import { Tabs } from 'expo-router'
import { colors } from '../styles/colors'
import { Feather } from '@expo/vector-icons'

export default function TabsLayouts() {
  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: colors.gray['800'],
      }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray['100'],
        tabBarInactiveTintColor: colors.gray['400'],
        tabBarStyle: {
          backgroundColor: colors.gray['800'],
          borderTopColor: colors.gray['400'],
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='home' size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='search'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='search' size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='notifications'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='inbox' size={24} color={color} />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: colors.red['300'],
            borderRadius: 5,
          },
        }}
      />

      <Tabs.Screen
        name='edit'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='edit' size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
