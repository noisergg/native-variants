import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Appearance, ColorSchemeName } from "react-native";
import type { ColorSchemeConfig } from "../types";

/**
 * Color scheme options for the theme.
 */
export type ColorScheme = "light" | "dark";

/**
 * Theme mode options.
 * - "light": Always use light theme
 * - "dark": Always use dark theme
 * - "system": Follow system preference
 */
export type ThemeMode = ColorScheme | "system";

/**
 * Theme context value interface.
 *
 * @template T - The colors type
 */
export interface ThemeContextValue<T extends Record<string, string>> {
  /** Current color scheme (resolved from mode) */
  colorScheme: ColorScheme;
  /** Current theme mode setting */
  mode: ThemeMode;
  /** Whether dark mode is active */
  isDark: boolean;
  /** Current theme colors based on color scheme */
  colors: T;
  /** Set theme mode */
  setMode: (mode: ThemeMode) => void;
  /** Toggle between light and dark (ignores system) */
  toggle: () => void;
}

// Create context with any type to allow generic usage
const ThemeContext = createContext<ThemeContextValue<any> | undefined>(undefined);

/**
 * Props for ThemeProvider component.
 *
 * @template T - The colors type
 */
export interface ThemeProviderProps<T extends Record<string, string>> {
  /** Child components */
  children: React.ReactNode;
  /**
   * Color scheme configuration with default (light) and dark colors.
   * Get this from createNVA's colorScheme output.
   *
   * @example
   * ```tsx
   * const { colorScheme } = createNVA({
   *   theme: {
   *     colors: {
   *       default: { primary: "#000" },
   *       dark: { primary: "#fff" },
   *     },
   *   },
   * });
   *
   * <ThemeProvider colors={colorScheme}>
   *   <App />
   * </ThemeProvider>
   * ```
   */
  colors: ColorSchemeConfig<T>;
  /** Initial theme mode (default: "system") */
  defaultMode?: ThemeMode;
  /** Custom storage get function for persisting theme preference */
  onGetStorage?: () => Promise<ThemeMode | null>;
  /** Custom storage set function for persisting theme preference */
  onSetStorage?: (mode: ThemeMode) => Promise<void>;
}

/**
 * Resolves the actual color scheme from mode and system preference.
 */
function resolveColorScheme(
  mode: ThemeMode,
  systemScheme: ColorSchemeName,
): ColorScheme {
  if (mode === "system") {
    return systemScheme === "dark" ? "dark" : "light";
  }
  return mode;
}

/**
 * ThemeProvider component.
 * Provides theme context with dark/light mode support.
 *
 * **Important:** This provider requires colors to be passed explicitly.
 * Get colors from createNVA's colorScheme output.
 *
 * @template T - The colors type
 *
 * @example
 * ```tsx
 * // 1. Create your theme with createNVA
 * const { theme, colorScheme, styled } = createNVA({
 *   theme: {
 *     colors: {
 *       default: {
 *         background: "#ffffff",
 *         foreground: "#000000",
 *         primary: "#3b82f6",
 *       },
 *       dark: {
 *         background: "#0a0a0a",
 *         foreground: "#ffffff",
 *         primary: "#60a5fa",
 *       },
 *     },
 *   },
 * });
 *
 * // 2. Wrap your app with ThemeProvider
 * function App() {
 *   return (
 *     <ThemeProvider colors={colorScheme}>
 *       <MyApp />
 *     </ThemeProvider>
 *   );
 * }
 *
 * // 3. Use colors in components
 * function MyComponent() {
 *   const { colors, isDark, toggle } = useTheme();
 *
 *   return (
 *     <View style={{ backgroundColor: colors.background }}>
 *       <Text style={{ color: colors.foreground }}>
 *         {isDark ? "Dark Mode" : "Light Mode"}
 *       </Text>
 *       <Button onPress={toggle} title="Toggle" />
 *     </View>
 *   );
 * }
 *
 * // With AsyncStorage persistence
 * import AsyncStorage from "@react-native-async-storage/async-storage";
 *
 * <ThemeProvider
 *   colors={colorScheme}
 *   defaultMode="system"
 *   onGetStorage={async () => {
 *     const mode = await AsyncStorage.getItem("theme-mode");
 *     return mode as ThemeMode | null;
 *   }}
 *   onSetStorage={async (mode) => {
 *     await AsyncStorage.setItem("theme-mode", mode);
 *   }}
 * >
 *   <App />
 * </ThemeProvider>
 * ```
 */
export function ThemeProvider<T extends Record<string, string>>({
  children,
  colors,
  defaultMode = "system",
  onGetStorage,
  onSetStorage,
}: ThemeProviderProps<T>) {
  const [mode, setModeState] = useState<ThemeMode>(defaultMode);
  const [systemScheme, setSystemScheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme(),
  );
  const [isHydrated, setIsHydrated] = useState(!onGetStorage);

  // Load persisted mode on mount
  useEffect(() => {
    if (onGetStorage) {
      onGetStorage().then((storedMode) => {
        if (storedMode) {
          setModeState(storedMode);
        }
        setIsHydrated(true);
      });
    }
  }, [onGetStorage]);

  // Listen to system color scheme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemScheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  // Set mode with optional persistence
  const setMode = useCallback(
    (newMode: ThemeMode) => {
      setModeState(newMode);
      if (onSetStorage) {
        onSetStorage(newMode);
      }
    },
    [onSetStorage],
  );

  // Toggle between light and dark
  const toggle = useCallback(() => {
    const currentScheme = resolveColorScheme(mode, systemScheme);
    const newMode: ColorScheme = currentScheme === "light" ? "dark" : "light";
    setMode(newMode);
  }, [mode, systemScheme, setMode]);

  // Compute context value
  const value = useMemo<ThemeContextValue<T>>(() => {
    const colorScheme = resolveColorScheme(mode, systemScheme);
    return {
      colorScheme,
      mode,
      isDark: colorScheme === "dark",
      colors: (colorScheme === "dark" ? colors.dark : colors.default) as T,
      setMode,
      toggle,
    };
  }, [mode, systemScheme, colors, setMode, toggle]);

  // Don't render until hydrated to prevent flash
  if (!isHydrated) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context.
 * Must be used within a ThemeProvider.
 *
 * @template T - The colors type
 * @returns Theme context value with colors and controls
 * @throws Error if used outside ThemeProvider
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { colors, isDark, toggle, setMode } = useTheme<MyColors>();
 *
 *   return (
 *     <View style={{ backgroundColor: colors.background }}>
 *       <Text style={{ color: colors.foreground }}>
 *         Current mode: {isDark ? "Dark" : "Light"}
 *       </Text>
 *       <Button onPress={toggle} title="Toggle Theme" />
 *       <Button onPress={() => setMode("system")} title="Use System" />
 *     </View>
 *   );
 * }
 * ```
 */
export function useTheme<T extends Record<string, string>>(): ThemeContextValue<T> {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within a ThemeProvider. " +
        "Make sure to wrap your app with <ThemeProvider colors={colorScheme}>.",
    );
  }

  return context as ThemeContextValue<T>;
}

/**
 * Hook to access only theme colors.
 * Convenience wrapper around useTheme that returns just the colors.
 *
 * @template T - The colors type
 * @returns Current theme colors
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const colors = useThemeColors<MyColors>();
 *
 *   return (
 *     <View style={{ backgroundColor: colors.background }}>
 *       <Text style={{ color: colors.primary }}>Hello</Text>
 *     </View>
 *   );
 * }
 * ```
 */
export function useThemeColors<T extends Record<string, string>>(): T {
  const { colors } = useTheme<T>();
  return colors;
}

/**
 * Hook to check if dark mode is active.
 * Convenience wrapper for quick dark mode checks.
 *
 * @returns Boolean indicating if dark mode is active
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isDark = useIsDark();
 *
 *   return (
 *     <Image source={isDark ? darkLogo : lightLogo} />
 *   );
 * }
 * ```
 */
export function useIsDark(): boolean {
  const { isDark } = useTheme();
  return isDark;
}

/**
 * Hook to get the current color scheme.
 * Returns "light" or "dark" based on current theme.
 *
 * @returns Current color scheme
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const colorScheme = useColorScheme();
 *
 *   return (
 *     <StatusBar barStyle={colorScheme === "dark" ? "light-content" : "dark-content"} />
 *   );
 * }
 * ```
 */
export function useColorScheme(): ColorScheme {
  const { colorScheme } = useTheme();
  return colorScheme;
}

/**
 * Creates a themed style helper that automatically uses current theme colors.
 * Useful for creating styled components with theme access.
 *
 * @template T - The colors type
 * @template S - The styles record type
 * @param styleFactory - Function that receives colors and returns styles
 * @returns Hook that returns computed styles
 *
 * @example
 * ```tsx
 * type MyColors = { card: string; border: string; cardForeground: string };
 *
 * const useCardStyles = createThemedStyles<MyColors, {
 *   container: ViewStyle;
 *   title: TextStyle;
 * }>((colors) => ({
 *   container: {
 *     backgroundColor: colors.card,
 *     borderColor: colors.border,
 *     borderWidth: 1,
 *     borderRadius: 8,
 *     padding: 16,
 *   },
 *   title: {
 *     color: colors.cardForeground,
 *     fontSize: 18,
 *     fontWeight: "600",
 *   },
 * }));
 *
 * function Card({ title, children }) {
 *   const styles = useCardStyles();
 *
 *   return (
 *     <View style={styles.container}>
 *       <Text style={styles.title}>{title}</Text>
 *       {children}
 *     </View>
 *   );
 * }
 * ```
 */
export function createThemedStyles<
  T extends Record<string, string>,
  S extends Record<string, object>,
>(styleFactory: (colors: T) => S): () => S {
  return function useThemedStyles(): S {
    const { colors } = useTheme<T>();
    return useMemo(() => styleFactory(colors), [colors]);
  };
}
