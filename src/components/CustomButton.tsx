import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, BORDER_RADIUS, SPACING } from '../theme';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  gradient?: string[];
  outline?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  style,
  textStyle,
  gradient = [COLORS.primary, '#47A1DE'],
  outline = false,
}) => {
  const content = (
    <>
      {loading ? (
        <ActivityIndicator color={outline ? COLORS.primary : COLORS.white} />
      ) : (
        <Text
          style={[
            styles.text,
            outline && styles.outlineText,
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </>
  );

  if (outline) {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        style={[styles.button, styles.outlineButton, style]}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={[styles.container, style]}
    >
      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        {content}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: SPACING.sm,
  },
  button: {
    height: 54,
    borderRadius: BORDER_RADIUS.lg,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.gray[200],
    marginVertical: SPACING.sm,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  outlineText: {
    color: COLORS.gray[500],
    fontWeight: '500',
  },
});

export default CustomButton;
