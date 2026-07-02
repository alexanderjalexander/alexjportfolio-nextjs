import localFont from 'next/font/local';

export const bricolageGrotesque = localFont({
  variable: '--bricolage',
  src: './bricolage-grotesque/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf',
});

export const inter = localFont({
  variable: '--inter',
  src: [
    {
      path: './inter/Inter-VariableFont_opsz,wght.ttf',
      style: 'normal',
    },
    {
      path: './inter/Inter-Italic-VariableFont_opsz,wght.ttf',
      style: 'italic',
    },
  ],
});

export const geistMono = localFont({
  variable: '--geist-mono',
  src: [
    {
      path: './geist-mono/GeistMono-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: './geist-mono/GeistMono-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
});

export const firaCode = localFont({
  variable: '--fira-code',
  src: [
    {
      path: './fira-code/FiraCode-Light.ttf',
      weight: '300',
    },
    {
      path: './fira-code/FiraCode-Regular.ttf',
      weight: '400',
    },
    {
      path: './fira-code/FiraCode-Medium.ttf',
      weight: '500',
    },
    {
      path: './fira-code/FiraCode-SemiBold.ttf',
      weight: '600',
    },
    {
      path: './fira-code/FiraCode-Bold.ttf',
      weight: '700',
    },
  ],
});

export const firaSans = localFont({
  variable: '--fira-sans',
  src: [
    {
      path: './fira-sans/FiraSans-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fira-sans/FiraSans-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fira-sans/FiraSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fira-sans/FiraSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fira-sans/FiraSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fira-sans/FiraSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fira-sans/FiraSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fira-sans/FiraSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fira-sans/FiraSans-Black.ttf',
      weight: '900',
      style: 'normal',
    },

    {
      path: './fira-sans/FiraSans-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fira-sans/FiraSans-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './fira-sans/FiraSans-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fira-sans/FiraSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fira-sans/FiraSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fira-sans/FiraSans-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fira-sans/FiraSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fira-sans/FiraSans-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: './fira-sans/FiraSans-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
});
