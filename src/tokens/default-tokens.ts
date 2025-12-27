/**
 * Tailwind CSS color palette.
 * Complete color system with all shades from 50 to 950.
 * @see https://tailwindcss.com/docs/customizing-colors
 */
export const tailwindColors = {
  // ============================================================================
  // Special Colors
  // ============================================================================

  /** @color transparent - Fully transparent */
  transparent: "transparent",
  /** @color currentColor - Inherits current text color */
  current: "currentColor",

  // ============================================================================
  // Black & White
  // ============================================================================

  /** @color #000000 - Pure black */
  black: "#000000",
  /** @color #FFFFFF - Pure white */
  white: "#FFFFFF",

  // ============================================================================
  // Slate - Cool gray with blue undertones
  // ============================================================================

  /** @color #f8fafc - Slate 50 (lightest) */
  slate50: "#f8fafc",
  /** @color #f1f5f9 - Slate 100 */
  slate100: "#f1f5f9",
  /** @color #e2e8f0 - Slate 200 */
  slate200: "#e2e8f0",
  /** @color #cbd5e1 - Slate 300 */
  slate300: "#cbd5e1",
  /** @color #94a3b8 - Slate 400 */
  slate400: "#94a3b8",
  /** @color #64748b - Slate 500 */
  slate500: "#64748b",
  /** @color #475569 - Slate 600 */
  slate600: "#475569",
  /** @color #334155 - Slate 700 */
  slate700: "#334155",
  /** @color #1e293b - Slate 800 */
  slate800: "#1e293b",
  /** @color #0f172a - Slate 900 */
  slate900: "#0f172a",
  /** @color #020617 - Slate 950 (darkest) */
  slate950: "#020617",

  // ============================================================================
  // Gray - Neutral gray
  // ============================================================================

  /** @color #f9fafb - Gray 50 (lightest) */
  gray50: "#f9fafb",
  /** @color #f3f4f6 - Gray 100 */
  gray100: "#f3f4f6",
  /** @color #e5e7eb - Gray 200 */
  gray200: "#e5e7eb",
  /** @color #d1d5db - Gray 300 */
  gray300: "#d1d5db",
  /** @color #9ca3af - Gray 400 */
  gray400: "#9ca3af",
  /** @color #6b7280 - Gray 500 */
  gray500: "#6b7280",
  /** @color #4b5563 - Gray 600 */
  gray600: "#4b5563",
  /** @color #374151 - Gray 700 */
  gray700: "#374151",
  /** @color #1f2937 - Gray 800 */
  gray800: "#1f2937",
  /** @color #111827 - Gray 900 */
  gray900: "#111827",
  /** @color #030712 - Gray 950 (darkest) */
  gray950: "#030712",

  // ============================================================================
  // Zinc - Modern neutral gray
  // ============================================================================

  /** @color #fafafa - Zinc 50 (lightest) */
  zinc50: "#fafafa",
  /** @color #f4f4f5 - Zinc 100 */
  zinc100: "#f4f4f5",
  /** @color #e4e4e7 - Zinc 200 */
  zinc200: "#e4e4e7",
  /** @color #d4d4d8 - Zinc 300 */
  zinc300: "#d4d4d8",
  /** @color #a1a1aa - Zinc 400 */
  zinc400: "#a1a1aa",
  /** @color #71717a - Zinc 500 */
  zinc500: "#71717a",
  /** @color #52525b - Zinc 600 */
  zinc600: "#52525b",
  /** @color #3f3f46 - Zinc 700 */
  zinc700: "#3f3f46",
  /** @color #27272a - Zinc 800 */
  zinc800: "#27272a",
  /** @color #18181b - Zinc 900 */
  zinc900: "#18181b",
  /** @color #09090b - Zinc 950 (darkest) */
  zinc950: "#09090b",

  // ============================================================================
  // Neutral - Pure neutral gray
  // ============================================================================

  /** @color #fafafa - Neutral 50 (lightest) */
  neutral50: "#fafafa",
  /** @color #f5f5f5 - Neutral 100 */
  neutral100: "#f5f5f5",
  /** @color #e5e5e5 - Neutral 200 */
  neutral200: "#e5e5e5",
  /** @color #d4d4d4 - Neutral 300 */
  neutral300: "#d4d4d4",
  /** @color #a3a3a3 - Neutral 400 */
  neutral400: "#a3a3a3",
  /** @color #737373 - Neutral 500 */
  neutral500: "#737373",
  /** @color #525252 - Neutral 600 */
  neutral600: "#525252",
  /** @color #404040 - Neutral 700 */
  neutral700: "#404040",
  /** @color #262626 - Neutral 800 */
  neutral800: "#262626",
  /** @color #171717 - Neutral 900 */
  neutral900: "#171717",
  /** @color #0a0a0a - Neutral 950 (darkest) */
  neutral950: "#0a0a0a",

  // ============================================================================
  // Stone - Warm gray with brown undertones
  // ============================================================================

  /** @color #fafaf9 - Stone 50 (lightest) */
  stone50: "#fafaf9",
  /** @color #f5f5f4 - Stone 100 */
  stone100: "#f5f5f4",
  /** @color #e7e5e4 - Stone 200 */
  stone200: "#e7e5e4",
  /** @color #d6d3d1 - Stone 300 */
  stone300: "#d6d3d1",
  /** @color #a8a29e - Stone 400 */
  stone400: "#a8a29e",
  /** @color #78716c - Stone 500 */
  stone500: "#78716c",
  /** @color #57534e - Stone 600 */
  stone600: "#57534e",
  /** @color #44403c - Stone 700 */
  stone700: "#44403c",
  /** @color #292524 - Stone 800 */
  stone800: "#292524",
  /** @color #1c1917 - Stone 900 */
  stone900: "#1c1917",
  /** @color #0c0a09 - Stone 950 (darkest) */
  stone950: "#0c0a09",

  // ============================================================================
  // Red - Error, danger, destructive actions
  // ============================================================================

  /** @color #fef2f2 - Red 50 (lightest) */
  red50: "#fef2f2",
  /** @color #fee2e2 - Red 100 */
  red100: "#fee2e2",
  /** @color #fecaca - Red 200 */
  red200: "#fecaca",
  /** @color #fca5a5 - Red 300 */
  red300: "#fca5a5",
  /** @color #f87171 - Red 400 */
  red400: "#f87171",
  /** @color #ef4444 - Red 500 */
  red500: "#ef4444",
  /** @color #dc2626 - Red 600 */
  red600: "#dc2626",
  /** @color #b91c1c - Red 700 */
  red700: "#b91c1c",
  /** @color #991b1b - Red 800 */
  red800: "#991b1b",
  /** @color #7f1d1d - Red 900 */
  red900: "#7f1d1d",
  /** @color #450a0a - Red 950 (darkest) */
  red950: "#450a0a",

  // ============================================================================
  // Orange - Warning, attention
  // ============================================================================

  /** @color #fff7ed - Orange 50 (lightest) */
  orange50: "#fff7ed",
  /** @color #ffedd5 - Orange 100 */
  orange100: "#ffedd5",
  /** @color #fed7aa - Orange 200 */
  orange200: "#fed7aa",
  /** @color #fdba74 - Orange 300 */
  orange300: "#fdba74",
  /** @color #fb923c - Orange 400 */
  orange400: "#fb923c",
  /** @color #f97316 - Orange 500 */
  orange500: "#f97316",
  /** @color #ea580c - Orange 600 */
  orange600: "#ea580c",
  /** @color #c2410c - Orange 700 */
  orange700: "#c2410c",
  /** @color #9a3412 - Orange 800 */
  orange800: "#9a3412",
  /** @color #7c2d12 - Orange 900 */
  orange900: "#7c2d12",
  /** @color #431407 - Orange 950 (darkest) */
  orange950: "#431407",

  // ============================================================================
  // Amber - Warning, caution
  // ============================================================================

  /** @color #fffbeb - Amber 50 (lightest) */
  amber50: "#fffbeb",
  /** @color #fef3c7 - Amber 100 */
  amber100: "#fef3c7",
  /** @color #fde68a - Amber 200 */
  amber200: "#fde68a",
  /** @color #fcd34d - Amber 300 */
  amber300: "#fcd34d",
  /** @color #fbbf24 - Amber 400 */
  amber400: "#fbbf24",
  /** @color #f59e0b - Amber 500 */
  amber500: "#f59e0b",
  /** @color #d97706 - Amber 600 */
  amber600: "#d97706",
  /** @color #b45309 - Amber 700 */
  amber700: "#b45309",
  /** @color #92400e - Amber 800 */
  amber800: "#92400e",
  /** @color #78350f - Amber 900 */
  amber900: "#78350f",
  /** @color #451a03 - Amber 950 (darkest) */
  amber950: "#451a03",

  // ============================================================================
  // Yellow - Highlight, attention
  // ============================================================================

  /** @color #fefce8 - Yellow 50 (lightest) */
  yellow50: "#fefce8",
  /** @color #fef9c3 - Yellow 100 */
  yellow100: "#fef9c3",
  /** @color #fef08a - Yellow 200 */
  yellow200: "#fef08a",
  /** @color #fde047 - Yellow 300 */
  yellow300: "#fde047",
  /** @color #facc15 - Yellow 400 */
  yellow400: "#facc15",
  /** @color #eab308 - Yellow 500 */
  yellow500: "#eab308",
  /** @color #ca8a04 - Yellow 600 */
  yellow600: "#ca8a04",
  /** @color #a16207 - Yellow 700 */
  yellow700: "#a16207",
  /** @color #854d0e - Yellow 800 */
  yellow800: "#854d0e",
  /** @color #713f12 - Yellow 900 */
  yellow900: "#713f12",
  /** @color #422006 - Yellow 950 (darkest) */
  yellow950: "#422006",

  // ============================================================================
  // Lime - Fresh, natural
  // ============================================================================

  /** @color #f7fee7 - Lime 50 (lightest) */
  lime50: "#f7fee7",
  /** @color #ecfccb - Lime 100 */
  lime100: "#ecfccb",
  /** @color #d9f99d - Lime 200 */
  lime200: "#d9f99d",
  /** @color #bef264 - Lime 300 */
  lime300: "#bef264",
  /** @color #a3e635 - Lime 400 */
  lime400: "#a3e635",
  /** @color #84cc16 - Lime 500 */
  lime500: "#84cc16",
  /** @color #65a30d - Lime 600 */
  lime600: "#65a30d",
  /** @color #4d7c0f - Lime 700 */
  lime700: "#4d7c0f",
  /** @color #3f6212 - Lime 800 */
  lime800: "#3f6212",
  /** @color #365314 - Lime 900 */
  lime900: "#365314",
  /** @color #1a2e05 - Lime 950 (darkest) */
  lime950: "#1a2e05",

  // ============================================================================
  // Green - Success, positive, confirm
  // ============================================================================

  /** @color #f0fdf4 - Green 50 (lightest) */
  green50: "#f0fdf4",
  /** @color #dcfce7 - Green 100 */
  green100: "#dcfce7",
  /** @color #bbf7d0 - Green 200 */
  green200: "#bbf7d0",
  /** @color #86efac - Green 300 */
  green300: "#86efac",
  /** @color #4ade80 - Green 400 */
  green400: "#4ade80",
  /** @color #22c55e - Green 500 */
  green500: "#22c55e",
  /** @color #16a34a - Green 600 */
  green600: "#16a34a",
  /** @color #15803d - Green 700 */
  green700: "#15803d",
  /** @color #166534 - Green 800 */
  green800: "#166534",
  /** @color #14532d - Green 900 */
  green900: "#14532d",
  /** @color #052e16 - Green 950 (darkest) */
  green950: "#052e16",

  // ============================================================================
  // Emerald - Premium, money
  // ============================================================================

  /** @color #ecfdf5 - Emerald 50 (lightest) */
  emerald50: "#ecfdf5",
  /** @color #d1fae5 - Emerald 100 */
  emerald100: "#d1fae5",
  /** @color #a7f3d0 - Emerald 200 */
  emerald200: "#a7f3d0",
  /** @color #6ee7b7 - Emerald 300 */
  emerald300: "#6ee7b7",
  /** @color #34d399 - Emerald 400 */
  emerald400: "#34d399",
  /** @color #10b981 - Emerald 500 */
  emerald500: "#10b981",
  /** @color #059669 - Emerald 600 */
  emerald600: "#059669",
  /** @color #047857 - Emerald 700 */
  emerald700: "#047857",
  /** @color #065f46 - Emerald 800 */
  emerald800: "#065f46",
  /** @color #064e3b - Emerald 900 */
  emerald900: "#064e3b",
  /** @color #022c22 - Emerald 950 (darkest) */
  emerald950: "#022c22",

  // ============================================================================
  // Teal - Calm, health
  // ============================================================================

  /** @color #f0fdfa - Teal 50 (lightest) */
  teal50: "#f0fdfa",
  /** @color #ccfbf1 - Teal 100 */
  teal100: "#ccfbf1",
  /** @color #99f6e4 - Teal 200 */
  teal200: "#99f6e4",
  /** @color #5eead4 - Teal 300 */
  teal300: "#5eead4",
  /** @color #2dd4bf - Teal 400 */
  teal400: "#2dd4bf",
  /** @color #14b8a6 - Teal 500 */
  teal500: "#14b8a6",
  /** @color #0d9488 - Teal 600 */
  teal600: "#0d9488",
  /** @color #0f766e - Teal 700 */
  teal700: "#0f766e",
  /** @color #115e59 - Teal 800 */
  teal800: "#115e59",
  /** @color #134e4a - Teal 900 */
  teal900: "#134e4a",
  /** @color #042f2e - Teal 950 (darkest) */
  teal950: "#042f2e",

  // ============================================================================
  // Cyan - Info, water
  // ============================================================================

  /** @color #ecfeff - Cyan 50 (lightest) */
  cyan50: "#ecfeff",
  /** @color #cffafe - Cyan 100 */
  cyan100: "#cffafe",
  /** @color #a5f3fc - Cyan 200 */
  cyan200: "#a5f3fc",
  /** @color #67e8f9 - Cyan 300 */
  cyan300: "#67e8f9",
  /** @color #22d3ee - Cyan 400 */
  cyan400: "#22d3ee",
  /** @color #06b6d4 - Cyan 500 */
  cyan500: "#06b6d4",
  /** @color #0891b2 - Cyan 600 */
  cyan600: "#0891b2",
  /** @color #0e7490 - Cyan 700 */
  cyan700: "#0e7490",
  /** @color #155e75 - Cyan 800 */
  cyan800: "#155e75",
  /** @color #164e63 - Cyan 900 */
  cyan900: "#164e63",
  /** @color #083344 - Cyan 950 (darkest) */
  cyan950: "#083344",

  // ============================================================================
  // Sky - Open, friendly
  // ============================================================================

  /** @color #f0f9ff - Sky 50 (lightest) */
  sky50: "#f0f9ff",
  /** @color #e0f2fe - Sky 100 */
  sky100: "#e0f2fe",
  /** @color #bae6fd - Sky 200 */
  sky200: "#bae6fd",
  /** @color #7dd3fc - Sky 300 */
  sky300: "#7dd3fc",
  /** @color #38bdf8 - Sky 400 */
  sky400: "#38bdf8",
  /** @color #0ea5e9 - Sky 500 */
  sky500: "#0ea5e9",
  /** @color #0284c7 - Sky 600 */
  sky600: "#0284c7",
  /** @color #0369a1 - Sky 700 */
  sky700: "#0369a1",
  /** @color #075985 - Sky 800 */
  sky800: "#075985",
  /** @color #0c4a6e - Sky 900 */
  sky900: "#0c4a6e",
  /** @color #082f49 - Sky 950 (darkest) */
  sky950: "#082f49",

  // ============================================================================
  // Blue - Primary, links, actions
  // ============================================================================

  /** @color #eff6ff - Blue 50 (lightest) */
  blue50: "#eff6ff",
  /** @color #dbeafe - Blue 100 */
  blue100: "#dbeafe",
  /** @color #bfdbfe - Blue 200 */
  blue200: "#bfdbfe",
  /** @color #93c5fd - Blue 300 */
  blue300: "#93c5fd",
  /** @color #60a5fa - Blue 400 */
  blue400: "#60a5fa",
  /** @color #3b82f6 - Blue 500 */
  blue500: "#3b82f6",
  /** @color #2563eb - Blue 600 */
  blue600: "#2563eb",
  /** @color #1d4ed8 - Blue 700 */
  blue700: "#1d4ed8",
  /** @color #1e40af - Blue 800 */
  blue800: "#1e40af",
  /** @color #1e3a8a - Blue 900 */
  blue900: "#1e3a8a",
  /** @color #172554 - Blue 950 (darkest) */
  blue950: "#172554",

  // ============================================================================
  // Indigo - Trust, depth
  // ============================================================================

  /** @color #eef2ff - Indigo 50 (lightest) */
  indigo50: "#eef2ff",
  /** @color #e0e7ff - Indigo 100 */
  indigo100: "#e0e7ff",
  /** @color #c7d2fe - Indigo 200 */
  indigo200: "#c7d2fe",
  /** @color #a5b4fc - Indigo 300 */
  indigo300: "#a5b4fc",
  /** @color #818cf8 - Indigo 400 */
  indigo400: "#818cf8",
  /** @color #6366f1 - Indigo 500 */
  indigo500: "#6366f1",
  /** @color #4f46e5 - Indigo 600 */
  indigo600: "#4f46e5",
  /** @color #4338ca - Indigo 700 */
  indigo700: "#4338ca",
  /** @color #3730a3 - Indigo 800 */
  indigo800: "#3730a3",
  /** @color #312e81 - Indigo 900 */
  indigo900: "#312e81",
  /** @color #1e1b4b - Indigo 950 (darkest) */
  indigo950: "#1e1b4b",

  // ============================================================================
  // Violet - Creative, premium
  // ============================================================================

  /** @color #f5f3ff - Violet 50 (lightest) */
  violet50: "#f5f3ff",
  /** @color #ede9fe - Violet 100 */
  violet100: "#ede9fe",
  /** @color #ddd6fe - Violet 200 */
  violet200: "#ddd6fe",
  /** @color #c4b5fd - Violet 300 */
  violet300: "#c4b5fd",
  /** @color #a78bfa - Violet 400 */
  violet400: "#a78bfa",
  /** @color #8b5cf6 - Violet 500 */
  violet500: "#8b5cf6",
  /** @color #7c3aed - Violet 600 */
  violet600: "#7c3aed",
  /** @color #6d28d9 - Violet 700 */
  violet700: "#6d28d9",
  /** @color #5b21b6 - Violet 800 */
  violet800: "#5b21b6",
  /** @color #4c1d95 - Violet 900 */
  violet900: "#4c1d95",
  /** @color #2e1065 - Violet 950 (darkest) */
  violet950: "#2e1065",

  // ============================================================================
  // Purple - Luxury, creative
  // ============================================================================

  /** @color #faf5ff - Purple 50 (lightest) */
  purple50: "#faf5ff",
  /** @color #f3e8ff - Purple 100 */
  purple100: "#f3e8ff",
  /** @color #e9d5ff - Purple 200 */
  purple200: "#e9d5ff",
  /** @color #d8b4fe - Purple 300 */
  purple300: "#d8b4fe",
  /** @color #c084fc - Purple 400 */
  purple400: "#c084fc",
  /** @color #a855f7 - Purple 500 */
  purple500: "#a855f7",
  /** @color #9333ea - Purple 600 */
  purple600: "#9333ea",
  /** @color #7e22ce - Purple 700 */
  purple700: "#7e22ce",
  /** @color #6b21a8 - Purple 800 */
  purple800: "#6b21a8",
  /** @color #581c87 - Purple 900 */
  purple900: "#581c87",
  /** @color #3b0764 - Purple 950 (darkest) */
  purple950: "#3b0764",

  // ============================================================================
  // Fuchsia - Fun, playful
  // ============================================================================

  /** @color #fdf4ff - Fuchsia 50 (lightest) */
  fuchsia50: "#fdf4ff",
  /** @color #fae8ff - Fuchsia 100 */
  fuchsia100: "#fae8ff",
  /** @color #f5d0fe - Fuchsia 200 */
  fuchsia200: "#f5d0fe",
  /** @color #f0abfc - Fuchsia 300 */
  fuchsia300: "#f0abfc",
  /** @color #e879f9 - Fuchsia 400 */
  fuchsia400: "#e879f9",
  /** @color #d946ef - Fuchsia 500 */
  fuchsia500: "#d946ef",
  /** @color #c026d3 - Fuchsia 600 */
  fuchsia600: "#c026d3",
  /** @color #a21caf - Fuchsia 700 */
  fuchsia700: "#a21caf",
  /** @color #86198f - Fuchsia 800 */
  fuchsia800: "#86198f",
  /** @color #701a75 - Fuchsia 900 */
  fuchsia900: "#701a75",
  /** @color #4a044e - Fuchsia 950 (darkest) */
  fuchsia950: "#4a044e",

  // ============================================================================
  // Pink - Love, care, feminine
  // ============================================================================

  /** @color #fdf2f8 - Pink 50 (lightest) */
  pink50: "#fdf2f8",
  /** @color #fce7f3 - Pink 100 */
  pink100: "#fce7f3",
  /** @color #fbcfe8 - Pink 200 */
  pink200: "#fbcfe8",
  /** @color #f9a8d4 - Pink 300 */
  pink300: "#f9a8d4",
  /** @color #f472b6 - Pink 400 */
  pink400: "#f472b6",
  /** @color #ec4899 - Pink 500 */
  pink500: "#ec4899",
  /** @color #db2777 - Pink 600 */
  pink600: "#db2777",
  /** @color #be185d - Pink 700 */
  pink700: "#be185d",
  /** @color #9d174d - Pink 800 */
  pink800: "#9d174d",
  /** @color #831843 - Pink 900 */
  pink900: "#831843",
  /** @color #500724 - Pink 950 (darkest) */
  pink950: "#500724",

  // ============================================================================
  // Rose - Romance, love
  // ============================================================================

  /** @color #fff1f2 - Rose 50 (lightest) */
  rose50: "#fff1f2",
  /** @color #ffe4e6 - Rose 100 */
  rose100: "#ffe4e6",
  /** @color #fecdd3 - Rose 200 */
  rose200: "#fecdd3",
  /** @color #fda4af - Rose 300 */
  rose300: "#fda4af",
  /** @color #fb7185 - Rose 400 */
  rose400: "#fb7185",
  /** @color #f43f5e - Rose 500 */
  rose500: "#f43f5e",
  /** @color #e11d48 - Rose 600 */
  rose600: "#e11d48",
  /** @color #be123c - Rose 700 */
  rose700: "#be123c",
  /** @color #9f1239 - Rose 800 */
  rose800: "#9f1239",
  /** @color #881337 - Rose 900 */
  rose900: "#881337",
  /** @color #4c0519 - Rose 950 (darkest) */
  rose950: "#4c0519",
} as const;

/**
 * Tailwind CSS spacing scale.
 * Values in pixels, following Tailwind's 4px base unit.
 * @see https://tailwindcss.com/docs/customizing-spacing
 */
export const tailwindSpacing = {
  /** @value 0px */
  "0": 0,
  /** @value 1px */
  px: 1,
  /** @value 2px (0.125rem) */
  "0.5": 2,
  /** @value 4px (0.25rem) */
  "1": 4,
  /** @value 6px (0.375rem) */
  "1.5": 6,
  /** @value 8px (0.5rem) */
  "2": 8,
  /** @value 10px (0.625rem) */
  "2.5": 10,
  /** @value 12px (0.75rem) */
  "3": 12,
  /** @value 14px (0.875rem) */
  "3.5": 14,
  /** @value 16px (1rem) */
  "4": 16,
  /** @value 20px (1.25rem) */
  "5": 20,
  /** @value 24px (1.5rem) */
  "6": 24,
  /** @value 28px (1.75rem) */
  "7": 28,
  /** @value 32px (2rem) */
  "8": 32,
  /** @value 36px (2.25rem) */
  "9": 36,
  /** @value 40px (2.5rem) */
  "10": 40,
  /** @value 44px (2.75rem) */
  "11": 44,
  /** @value 48px (3rem) */
  "12": 48,
  /** @value 56px (3.5rem) */
  "14": 56,
  /** @value 64px (4rem) */
  "16": 64,
  /** @value 80px (5rem) */
  "20": 80,
  /** @value 96px (6rem) */
  "24": 96,
  /** @value 112px (7rem) */
  "28": 112,
  /** @value 128px (8rem) */
  "32": 128,
  /** @value 144px (9rem) */
  "36": 144,
  /** @value 160px (10rem) */
  "40": 160,
  /** @value 176px (11rem) */
  "44": 176,
  /** @value 192px (12rem) */
  "48": 192,
  /** @value 208px (13rem) */
  "52": 208,
  /** @value 224px (14rem) */
  "56": 224,
  /** @value 240px (15rem) */
  "60": 240,
  /** @value 256px (16rem) */
  "64": 256,
  /** @value 288px (18rem) */
  "72": 288,
  /** @value 320px (20rem) */
  "80": 320,
  /** @value 384px (24rem) */
  "96": 384,
} as const;

/**
 * Tailwind CSS font size scale.
 * Values in pixels.
 * @see https://tailwindcss.com/docs/font-size
 */
export const tailwindFontSizes = {
  /** @value 12px (0.75rem) - Extra small text */
  xs: 12,
  /** @value 14px (0.875rem) - Small text */
  sm: 14,
  /** @value 16px (1rem) - Base/body text */
  base: 16,
  /** @value 18px (1.125rem) - Large text */
  lg: 18,
  /** @value 20px (1.25rem) - Extra large */
  xl: 20,
  /** @value 24px (1.5rem) - Heading 4 */
  "2xl": 24,
  /** @value 30px (1.875rem) - Heading 3 */
  "3xl": 30,
  /** @value 36px (2.25rem) - Heading 2 */
  "4xl": 36,
  /** @value 48px (3rem) - Heading 1 */
  "5xl": 48,
  /** @value 60px (3.75rem) - Display */
  "6xl": 60,
  /** @value 72px (4.5rem) - Large display */
  "7xl": 72,
  /** @value 96px (6rem) - Hero */
  "8xl": 96,
  /** @value 128px (8rem) - Massive hero */
  "9xl": 128,
} as const;

/**
 * Tailwind CSS border radius scale.
 * Values in pixels.
 * @see https://tailwindcss.com/docs/border-radius
 */
export const tailwindRadii = {
  /** @value 0px - No border radius */
  none: 0,
  /** @value 2px (0.125rem) - Small radius */
  sm: 2,
  /** @value 4px (0.25rem) - Default radius */
  DEFAULT: 4,
  /** @value 6px (0.375rem) - Medium radius */
  md: 6,
  /** @value 8px (0.5rem) - Large radius */
  lg: 8,
  /** @value 12px (0.75rem) - Extra large radius */
  xl: 12,
  /** @value 16px (1rem) - 2x large radius */
  "2xl": 16,
  /** @value 24px (1.5rem) - 3x large radius */
  "3xl": 24,
  /** @value 9999px - Full/pill radius */
  full: 9999,
} as const;

/**
 * Tailwind CSS shadow definitions for React Native.
 * Includes both iOS (shadow*) and Android (elevation) properties.
 * @see https://tailwindcss.com/docs/box-shadow
 */
export const tailwindShadows = {
  /** No shadow */
  none: {
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  /** Small shadow - subtle depth */
  sm: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  /** Default shadow - light depth */
  DEFAULT: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  /** Medium shadow - moderate depth */
  md: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  /** Large shadow - significant depth */
  lg: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 9,
  },
  /** Extra large shadow - heavy depth */
  xl: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.1,
    shadowRadius: 25,
    elevation: 12,
  },
  /** 2x large shadow - very heavy depth */
  "2xl": {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.25,
    shadowRadius: 50,
    elevation: 16,
  },
  /** Inner shadow effect */
  inner: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 0,
  },
} as const;

/**
 * Tailwind CSS z-index scale.
 * @see https://tailwindcss.com/docs/z-index
 */
export const tailwindZIndex = {
  /** @value 0 - Base layer */
  "0": 0,
  /** @value 10 - Above base */
  "10": 10,
  /** @value 20 - Dropdowns */
  "20": 20,
  /** @value 30 - Sticky elements */
  "30": 30,
  /** @value 40 - Fixed elements */
  "40": 40,
  /** @value 50 - Modals/overlays */
  "50": 50,
} as const;

/**
 * Tailwind CSS opacity scale.
 * Values from 0 (transparent) to 1 (opaque).
 * @see https://tailwindcss.com/docs/opacity
 */
export const tailwindOpacity = {
  /** @value 0 - Fully transparent */
  "0": 0,
  /** @value 0.05 - 5% opacity */
  "5": 0.05,
  /** @value 0.1 - 10% opacity */
  "10": 0.1,
  /** @value 0.15 - 15% opacity */
  "15": 0.15,
  /** @value 0.2 - 20% opacity */
  "20": 0.2,
  /** @value 0.25 - 25% opacity */
  "25": 0.25,
  /** @value 0.3 - 30% opacity */
  "30": 0.3,
  /** @value 0.35 - 35% opacity */
  "35": 0.35,
  /** @value 0.4 - 40% opacity */
  "40": 0.4,
  /** @value 0.45 - 45% opacity */
  "45": 0.45,
  /** @value 0.5 - 50% opacity */
  "50": 0.5,
  /** @value 0.55 - 55% opacity */
  "55": 0.55,
  /** @value 0.6 - 60% opacity */
  "60": 0.6,
  /** @value 0.65 - 65% opacity */
  "65": 0.65,
  /** @value 0.7 - 70% opacity */
  "70": 0.7,
  /** @value 0.75 - 75% opacity */
  "75": 0.75,
  /** @value 0.8 - 80% opacity */
  "80": 0.8,
  /** @value 0.85 - 85% opacity */
  "85": 0.85,
  /** @value 0.9 - 90% opacity */
  "90": 0.9,
  /** @value 0.95 - 95% opacity */
  "95": 0.95,
  /** @value 1 - Fully opaque */
  "100": 1,
} as const;

/**
 * Tailwind CSS line height scale.
 * Numeric values are in pixels, named values are multipliers.
 * @see https://tailwindcss.com/docs/line-height
 */
export const tailwindLineHeights = {
  /** @value 12px (0.75rem) */
  "3": 12,
  /** @value 16px (1rem) */
  "4": 16,
  /** @value 20px (1.25rem) */
  "5": 20,
  /** @value 24px (1.5rem) */
  "6": 24,
  /** @value 28px (1.75rem) */
  "7": 28,
  /** @value 32px (2rem) */
  "8": 32,
  /** @value 36px (2.25rem) */
  "9": 36,
  /** @value 40px (2.5rem) */
  "10": 40,
  /** @value 1 - No line height */
  none: 1,
  /** @value 1.25 - Tight spacing */
  tight: 1.25,
  /** @value 1.375 - Snug spacing */
  snug: 1.375,
  /** @value 1.5 - Normal spacing */
  normal: 1.5,
  /** @value 1.625 - Relaxed spacing */
  relaxed: 1.625,
  /** @value 2 - Loose spacing */
  loose: 2,
} as const;

/**
 * Tailwind CSS font weight scale.
 * Values are strings to match React Native's fontWeight type.
 * @see https://tailwindcss.com/docs/font-weight
 */
export const tailwindFontWeights = {
  /** @value "100" - Thin */
  thin: "100" as const,
  /** @value "200" - Extra light */
  extralight: "200" as const,
  /** @value "300" - Light */
  light: "300" as const,
  /** @value "400" - Normal/Regular */
  normal: "400" as const,
  /** @value "500" - Medium */
  medium: "500" as const,
  /** @value "600" - Semi bold */
  semibold: "600" as const,
  /** @value "700" - Bold */
  bold: "700" as const,
  /** @value "800" - Extra bold */
  extrabold: "800" as const,
  /** @value "900" - Black/Heavy */
  black: "900" as const,
} as const;

/**
 * Tailwind CSS letter spacing scale.
 * Values in pixels.
 * @see https://tailwindcss.com/docs/letter-spacing
 */
export const tailwindLetterSpacing = {
  /** @value -0.8px - Tighter spacing */
  tighter: -0.8,
  /** @value -0.4px - Tight spacing */
  tight: -0.4,
  /** @value 0px - Normal spacing */
  normal: 0,
  /** @value 0.4px - Wide spacing */
  wide: 0.4,
  /** @value 0.8px - Wider spacing */
  wider: 0.8,
  /** @value 1.6px - Widest spacing */
  widest: 1.6,
} as const;

/**
 * Tailwind CSS border width scale.
 * Values in pixels.
 * @see https://tailwindcss.com/docs/border-width
 */
export const tailwindBorderWidths = {
  /** @value 0px - No border */
  "0": 0,
  /** @value 1px - Default border */
  DEFAULT: 1,
  /** @value 2px - Medium border */
  "2": 2,
  /** @value 4px - Thick border */
  "4": 4,
  /** @value 8px - Extra thick border */
  "8": 8,
} as const;

/**
 * Tailwind CSS max width scale.
 * Values in pixels (except none and full).
 * @see https://tailwindcss.com/docs/max-width
 */
export const tailwindMaxWidths = {
  /** @value 0px */
  "0": 0,
  /** @value "none" - No max width */
  none: "none" as const,
  /** @value 320px (20rem) */
  xs: 320,
  /** @value 384px (24rem) */
  sm: 384,
  /** @value 448px (28rem) */
  md: 448,
  /** @value 512px (32rem) */
  lg: 512,
  /** @value 576px (36rem) */
  xl: 576,
  /** @value 672px (42rem) */
  "2xl": 672,
  /** @value 768px (48rem) */
  "3xl": 768,
  /** @value 896px (56rem) */
  "4xl": 896,
  /** @value 1024px (64rem) */
  "5xl": 1024,
  /** @value 1152px (72rem) */
  "6xl": 1152,
  /** @value 1280px (80rem) */
  "7xl": 1280,
  /** @value "100%" - Full width */
  full: "100%" as const,
} as const;

/**
 * Tailwind CSS animation duration scale.
 * Values in milliseconds.
 * @see https://tailwindcss.com/docs/transition-duration
 */
export const tailwindDurations = {
  /** @value 0ms - Instant */
  "0": 0,
  /** @value 75ms - Very fast */
  "75": 75,
  /** @value 100ms - Fast */
  "100": 100,
  /** @value 150ms - Quick */
  "150": 150,
  /** @value 200ms - Normal */
  "200": 200,
  /** @value 300ms - Medium */
  "300": 300,
  /** @value 500ms - Slow */
  "500": 500,
  /** @value 700ms - Very slow */
  "700": 700,
  /** @value 1000ms - Extra slow */
  "1000": 1000,
} as const;

/**
 * Complete default theme using Tailwind CSS design tokens.
 * Use this as a starting point or extend it with your own tokens.
 *
 * @example
 * ```ts
 * import { createNVA, defaultTheme } from "native-variants";
 *
 * const { styled, theme } = createNVA({
 *   theme: defaultTheme,
 * });
 * ```
 */
export const defaultTheme = {
  colors: tailwindColors,
  spacing: tailwindSpacing,
  fontSizes: tailwindFontSizes,
  radii: tailwindRadii,
  shadows: tailwindShadows,
  zIndex: tailwindZIndex,
  opacity: tailwindOpacity,
  lineHeights: tailwindLineHeights,
  fontWeights: tailwindFontWeights,
  letterSpacing: tailwindLetterSpacing,
  borderWidths: tailwindBorderWidths,
  maxWidths: tailwindMaxWidths,
  durations: tailwindDurations,
} as const;

/** Type representing the default theme structure. */
export type DefaultTheme = typeof defaultTheme;

/** Type representing the Tailwind color palette. */
export type TailwindColors = typeof tailwindColors;

/** Type representing the Tailwind spacing scale. */
export type TailwindSpacing = typeof tailwindSpacing;

/** Type representing the Tailwind font size scale. */
export type TailwindFontSizes = typeof tailwindFontSizes;

/** Type representing the Tailwind border radius scale. */
export type TailwindRadii = typeof tailwindRadii;

/** Type representing the Tailwind shadow definitions. */
export type TailwindShadows = typeof tailwindShadows;

/** Type representing the Tailwind z-index scale. */
export type TailwindZIndex = typeof tailwindZIndex;

/** Type representing the Tailwind opacity scale. */
export type TailwindOpacity = typeof tailwindOpacity;

/** Type representing the Tailwind line height scale. */
export type TailwindLineHeights = typeof tailwindLineHeights;

/** Type representing the Tailwind font weight scale. */
export type TailwindFontWeights = typeof tailwindFontWeights;

/** Type representing the Tailwind letter spacing scale. */
export type TailwindLetterSpacing = typeof tailwindLetterSpacing;

/** Type representing the Tailwind border width scale. */
export type TailwindBorderWidths = typeof tailwindBorderWidths;

/** Type representing the Tailwind max width scale. */
export type TailwindMaxWidths = typeof tailwindMaxWidths;

/** Type representing the Tailwind animation duration scale. */
export type TailwindDurations = typeof tailwindDurations;

/**
 * Helper function to create a custom theme by extending the default theme.
 *
 * @template T - Custom theme extension type
 * @param customTheme - Partial theme object with custom values
 * @returns A complete theme object with defaults and custom values merged
 *
 * @example
 * ```ts
 * const myTheme = extendTheme({
 *   colors: {
 *     ...tailwindColors,
 *     brand: "#FF6B6B",
 *   },
 * });
 * ```
 */
export function extendTheme<T extends Partial<DefaultTheme>>(
  customTheme: T,
): DefaultTheme & T {
  return {
    ...defaultTheme,
    ...customTheme,
  } as DefaultTheme & T;
}

// Legacy exports for backwards compatibility
export const defaultColors = tailwindColors;
export const defaultSpacing = tailwindSpacing;
export const defaultFontSizes = tailwindFontSizes;
export const defaultRadii = tailwindRadii;
export const defaultShadows = tailwindShadows;
export const defaultZIndex = tailwindZIndex;
export const defaultOpacity = tailwindOpacity;
export const defaultLineHeights = tailwindLineHeights;
export const defaultFontWeights = tailwindFontWeights;
export const defaultLetterSpacing = tailwindLetterSpacing;

export type DefaultColors = TailwindColors;
export type DefaultSpacing = TailwindSpacing;
export type DefaultFontSizes = TailwindFontSizes;
export type DefaultRadii = TailwindRadii;
export type DefaultShadows = TailwindShadows;
export type DefaultZIndex = TailwindZIndex;
export type DefaultOpacity = TailwindOpacity;
export type DefaultLineHeights = TailwindLineHeights;
export type DefaultFontWeights = TailwindFontWeights;
export type DefaultLetterSpacing = TailwindLetterSpacing;
