import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, XStack, Button } from 'tamagui';
import { Colors } from '@/constants/Colors';
import { ArrowLeft } from '@tamagui/lucide-icons';
import { useRouter } from 'expo-router';

const ChatScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#536493', '#629584', '#C96868']} // กำหนดสีไล่ระดับ
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <XStack
          style={{
            marginVertical: 24,
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 12,
          }}
        >
          <Button
            style={{ padding: 0 }}
            icon={<ArrowLeft size="$2" />}
            chromeless
            onPress={() => router.back()} // กลับไปยังหน้าก่อนหน้า
          />
          <Text style={styles.title}>Chat</Text>
          <View style={{ width: 24 }} />
        </XStack>

        {/* Chat Messages */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>Hello! How can I assist you today?</Text>
          </View>
          {/* เพิ่มข้อความอื่นๆ ที่นี่ */}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // จัดเรียงเนื้อหาที่ด้านบน
  },
  container: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  scrollView: {
    padding: 12,
    flexGrow: 1,
  },
  messageContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // ทำให้พื้นหลังของข้อความมีความโปร่งใส
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ChatScreen;
