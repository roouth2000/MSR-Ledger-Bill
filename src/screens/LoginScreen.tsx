import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import { COLORS, SPACING, BORDER_RADIUS } from '../theme';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
        
        {/* Header with Gradient */}
        <LinearGradient
          colors={[COLORS.gradient.start, COLORS.gradient.end]}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <View style={styles.logoRow}>
              <View style={styles.smallLogoBox}>
                <Icon name="receipt" size={20} color={COLORS.white} />
              </View>
              <Text style={styles.headerTitle}>LedgerBook</Text>
            </View>
            
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Text style={styles.subText}>Sign in to manage your billing & accounts</Text>
          </View>
        </LinearGradient>

        {/* Login Form */}
        <View style={styles.formContainer}>
          <CustomInput
            label="Mobile or email"
            placeholder="+91 98450 12345"
            value={email}
            onChangeText={setEmail}
            iconName="smartphone" // Feather icon
          />

          <CustomInput
            label="Password"
            placeholder="........"
            value={password}
            onChangeText={setPassword}
            iconName="lock" // Feather icon
            isPassword
          />

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <CustomButton
            title="Sign in"
            onPress={() => {}}
            style={styles.signInButton}
          />

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="google" size={20} color={COLORS.gray[500]} />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="apple" size={20} color={COLORS.gray[500]} />
              <Text style={styles.socialButtonText}>Apple</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>New here? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}>Create account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    height: 220,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: SPACING.lg,
    paddingTop: 60,
  },
  headerContent: {
    marginTop: SPACING.md,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  smallLogoBox: {
    width: 36,
    height: 36,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.sm,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SPACING.xs,
  },
  subText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl,
    backgroundColor: COLORS.white,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: SPACING.lg,
  },
  forgotPasswordText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  signInButton: {
    marginTop: SPACING.sm,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING.xl,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.gray[200],
  },
  dividerText: {
    marginHorizontal: SPACING.md,
    color: COLORS.gray[400],
    fontSize: 12,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.xl,
  },
  socialButton: {
    flex: 0.48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.gray[200],
    backgroundColor: COLORS.white,
  },
  socialButtonText: {
    marginLeft: SPACING.sm,
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.gray[500],
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: SPACING.xl,
  },
  footerText: {
    color: COLORS.gray[500],
    fontSize: 14,
  },
  signUpText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
