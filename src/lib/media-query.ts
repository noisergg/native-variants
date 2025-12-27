import { Dimensions, PixelRatio } from "react-native";

/**
 * Current screen dimensions.
 * These values are captured at module load time.
 * For responsive updates, consider using useWindowDimensions hook instead.
 */
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

/**
 * Width Query - Calculates a width value based on screen percentage.
 * Returns a pixel-rounded value proportional to screen width.
 *
 * @param widthPercent - Percentage of screen width (0-100) as number or string
 * @returns Pixel value rounded to nearest pixel ratio
 *
 * @example
 * ```ts
 * // Get 50% of screen width
 * const halfWidth = wq(50);
 *
 * // Using string percentage
 * const quarterWidth = wq("25");
 *
 * // In styles
 * const styles = {
 *   container: {
 *     width: wq(80), // 80% of screen width
 *     marginHorizontal: wq(10), // 10% margin on each side
 *   }
 * };
 * ```
 */
export function wq(widthPercent: number | string): number {
  const elemWidth =
    typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
}

/**
 * Height Query - Calculates a height value based on screen percentage.
 * Returns a pixel-rounded value proportional to screen height.
 *
 * @param heightPercent - Percentage of screen height (0-100) as number or string
 * @returns Pixel value rounded to nearest pixel ratio
 *
 * @example
 * ```ts
 * // Get 50% of screen height
 * const halfHeight = hq(50);
 *
 * // Using string percentage
 * const quarterHeight = hq("25");
 *
 * // In styles
 * const styles = {
 *   hero: {
 *     height: hq(40), // 40% of screen height
 *     minHeight: hq(30), // Minimum 30% of screen height
 *   }
 * };
 * ```
 */
export function hq(heightPercent: number | string): number {
  const elemHeight =
    typeof heightPercent === "number"
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
}

/**
 * Gets the current screen dimensions.
 * Useful for calculations that need both width and height.
 *
 * @returns Object containing screen width and height in pixels
 *
 * @example
 * ```ts
 * const { width, height } = getScreenDimensions();
 * const isLandscape = width > height;
 * ```
 */
export function getScreenDimensions(): { width: number; height: number } {
  return {
    width: screenWidth,
    height: screenHeight,
  };
}

/**
 * Calculates a responsive font size based on screen width.
 * Ensures text scales appropriately across different device sizes.
 *
 * @param baseFontSize - The base font size in pixels
 * @param scaleFactor - Optional scale factor (default: 0.5, meaning 50% responsive)
 * @returns Scaled font size rounded to nearest pixel
 *
 * @example
 * ```ts
 * // Responsive font that scales with screen size
 * const titleSize = responsiveFontSize(24);
 *
 * // Less responsive (only 30% scaling)
 * const subtitleSize = responsiveFontSize(18, 0.3);
 * ```
 */
export function responsiveFontSize(
  baseFontSize: number,
  scaleFactor: number = 0.5,
): number {
  const scale = screenWidth / 375; // Base scale on iPhone 8/SE width
  const newSize = baseFontSize + (baseFontSize * (scale - 1) * scaleFactor);
  return PixelRatio.roundToNearestPixel(newSize);
}
