import { defineMermaidSetup } from '@slidev/types'

/**
 * Mermaid renders inside a Shadow DOM (see @slidev/client/builtin/Mermaid.vue),
 * so external CSS can't override fills or text colors. We instead return
 * different themeVariables based on the current color scheme — the Mermaid
 * component re-renders on toggle, so the setup fires again with fresh values.
 */
export default defineMermaidSetup(() => {
  const isDark = typeof document !== 'undefined'
    && document.documentElement.classList.contains('dark')

  const palette = isDark
    ? {
        bg: '#141414',
        nodeBg: '#1a1a1a',
        fg: '#e6e6e6',
        fgHeading: '#ffffff',
        border: '#222222',
        primary: '#9547FF',
      }
    : {
        bg: '#ffffff',
        nodeBg: '#f5f5f5',
        fg: '#1a1a1a',
        fgHeading: '#0a0a0a',
        border: '#e5e5e5',
        primary: '#7a32e6',
      }

  return {
    theme: 'base',
    themeVariables: {
      background: palette.bg,
      mainBkg: palette.nodeBg,
      secondBkg: palette.nodeBg,
      tertiaryBkg: palette.bg,
      primaryColor: palette.nodeBg,
      secondaryColor: palette.nodeBg,
      tertiaryColor: palette.bg,
      primaryTextColor: palette.fgHeading,
      primaryBorderColor: palette.primary,
      nodeBorder: palette.primary,
      clusterBkg: palette.nodeBg,
      clusterBorder: palette.border,
      lineColor: palette.primary,
      defaultLinkColor: palette.primary,
      titleColor: palette.fgHeading,
      edgeLabelBackground: palette.bg,
      textColor: palette.fg,
      nodeTextColor: palette.fgHeading,
      fontFamily: 'Aspekta, Inter, sans-serif',
      fontSize: '14px',
    },
  }
})
