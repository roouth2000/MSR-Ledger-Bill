import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SPACING } from '../theme';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={[COLORS.gradient.splashStart, COLORS.gradient.splashEnd]}
      style={styles.container}
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBox}>
            <Icon name="receipt" size={40} color={COLORS.white} />
          </View>
          <View style={styles.accentDot} />
          <View style={styles.topAccentDot} />
        </View>

        <Text style={styles.title}>LedgerBook</Text>
        <Text style={styles.tagline}>Billing • Invoices • Accounts</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logoContainer: {
    position: 'relative',
    marginBottom: SPACING.lg,
  },
  logoBox: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accentDot: {
    position: 'absolute',
    bottom: -5,
    left: -10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.accent,
    borderWidth: 2,
    borderColor: COLORS.gradient.splashStart,
  },
  topAccentDot: {
    position: 'absolute',
    top: -5,
    right: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    borderWidth: 2,
    borderColor: COLORS.gradient.splashStart,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: SPACING.xs,
    letterSpacing: 0.5,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: COLORS.white,
    width: 8,
    height: 8,
  },
});

export default SplashScreen;
