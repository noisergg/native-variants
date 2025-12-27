/**
 * Converts a hex color to a hex color with alpha transparency.
 * Appends the alpha value as a 2-character hex suffix.
 *
 * @param hex - A hex color string in the format #RRGGBB
 * @param opacity - Opacity percentage from 0 (transparent) to 100 (opaque)
 * @returns A hex color string with alpha in the format #RRGGBBAA
 * @throws Error if the hex color is not in the correct format
 *
 * @example
 * ```ts
 * // 50% opacity
 * alpha("#FF0000", 50); // "#FF00007F"
 *
 * // Fully transparent
 * alpha("#FF0000", 0); // "#FF000000"
 *
 * // Fully opaque
 * alpha("#FF0000", 100); // "#FF0000FF"
 *
 * // Use in styles
 * const buttonStyles = {
 *   backgroundColor: alpha(theme.colors.primary, 10),
 *   borderColor: alpha(theme.colors.primary, 30),
 * };
 * ```
 */
export function alpha(hex: string, opacity: number): string {
  // Support both 6-digit and 3-digit hex codes
  const hexRegex = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;

  if (!hexRegex.test(hex)) {
    throw new Error(
      `Invalid hex color format: "${hex}". Expected #RGB or #RRGGBB.`
    );
  }

  // Expand 3-digit hex to 6-digit
  let normalizedHex = hex;
  if (hex.length === 4) {
    const r = hex[1];
    const g = hex[2];
    const b = hex[3];
    normalizedHex = `#${r}${r}${g}${g}${b}${b}`;
  }

  // Clamp opacity to valid range
  const clampedOpacity = Math.max(0, Math.min(100, opacity));

  // Convert percentage to 0-255 range and then to hex
  const alphaValue = Math.round((clampedOpacity / 100) * 255)
    .toString(16)
    .padStart(2, "0");

  return `${normalizedHex}${alphaValue}`;
}

/**
 * Converts a hex color to an RGBA string.
 * Useful when you need CSS-style rgba() values.
 *
 * @param hex - A hex color string in the format #RRGGBB or #RGB
 * @param opacity - Opacity value from 0 (transparent) to 1 (opaque)
 * @returns An rgba() color string
 *
 * @example
 * ```ts
 * hexToRgba("#FF0000", 0.5); // "rgba(255, 0, 0, 0.5)"
 * hexToRgba("#F00", 0.5); // "rgba(255, 0, 0, 0.5)"
 * ```
 */
export function hexToRgba(hex: string, opacity: number): string {
  const hexRegex = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;

  if (!hexRegex.test(hex)) {
    throw new Error(
      `Invalid hex color format: "${hex}". Expected #RGB or #RRGGBB.`
    );
  }

  // Expand 3-digit hex to 6-digit
  let normalizedHex = hex.slice(1);
  if (normalizedHex.length === 3) {
    normalizedHex = normalizedHex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const r = parseInt(normalizedHex.slice(0, 2), 16);
  const g = parseInt(normalizedHex.slice(2, 4), 16);
  const b = parseInt(normalizedHex.slice(4, 6), 16);

  // Clamp opacity to valid range
  const clampedOpacity = Math.max(0, Math.min(1, opacity));

  return `rgba(${r}, ${g}, ${b}, ${clampedOpacity})`;
}

/**
 * Lightens a hex color by a percentage.
 *
 * @param hex - A hex color string in the format #RRGGBB or #RGB
 * @param percent - Percentage to lighten (0-100)
 * @returns A lightened hex color string
 *
 * @example
 * ```ts
 * lighten("#FF0000", 20); // Lightens red by 20%
 * ```
 */
export function lighten(hex: string, percent: number): string {
  const hexRegex = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;

  if (!hexRegex.test(hex)) {
    throw new Error(
      `Invalid hex color format: "${hex}". Expected #RGB or #RRGGBB.`
    );
  }

  let normalizedHex = hex.slice(1);
  if (normalizedHex.length === 3) {
    normalizedHex = normalizedHex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const r = parseInt(normalizedHex.slice(0, 2), 16);
  const g = parseInt(normalizedHex.slice(2, 4), 16);
  const b = parseInt(normalizedHex.slice(4, 6), 16);

  const amount = Math.round((percent / 100) * 255);

  const newR = Math.min(255, r + amount);
  const newG = Math.min(255, g + amount);
  const newB = Math.min(255, b + amount);

  return `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
}

/**
 * Darkens a hex color by a percentage.
 *
 * @param hex - A hex color string in the format #RRGGBB or #RGB
 * @param percent - Percentage to darken (0-100)
 * @returns A darkened hex color string
 *
 * @example
 * ```ts
 * darken("#FF0000", 20); // Darkens red by 20%
 * ```
 */
export function darken(hex: string, percent: number): string {
  const hexRegex = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;

  if (!hexRegex.test(hex)) {
    throw new Error(
      `Invalid hex color format: "${hex}". Expected #RGB or #RRGGBB.`
    );
  }

  let normalizedHex = hex.slice(1);
  if (normalizedHex.length === 3) {
    normalizedHex = normalizedHex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const r = parseInt(normalizedHex.slice(0, 2), 16);
  const g = parseInt(normalizedHex.slice(2, 4), 16);
  const b = parseInt(normalizedHex.slice(4, 6), 16);

  const amount = Math.round((percent / 100) * 255);

  const newR = Math.max(0, r - amount);
  const newG = Math.max(0, g - amount);
  const newB = Math.max(0, b - amount);

  return `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
}
