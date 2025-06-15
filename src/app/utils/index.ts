// fonts/index.js
import localFont from 'next/font/local'

// Define Sofia Pro font family with multiple variants
export const sofiaPro = localFont({
  src: [
    {
      path: './Sofia Pro UltraLight Az.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Sofia Pro UltraLight Italic Az.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './Sofia Pro ExtraLight Az.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Sofia Pro ExtraLight Italic Az.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './Sofia Pro Light Az.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Sofia Pro Light Italic Az.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Sofia Pro Regular Az.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Sofia Pro Regular Italic Az.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './Sofia Pro Medium Az.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Sofia Pro Medium Italic Az.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './Sofia Pro Semi Bold Az.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Sofia Pro Semi Bold Italic Az.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './Sofia Pro Bold Az.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Sofia Pro Bold Italic Az.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: './Sofia Pro Black Az.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Sofia Pro Black Italic Az.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-sofia-pro',
  display: 'swap',
})

// Alternative: Import only specific weights you need
export const sofiaProEssentials = localFont({
  src: [
    {
      path: './Sofia Pro Regular Az.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Sofia Pro Medium Az.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Sofia Pro Semi Bold Az.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Sofia Pro Bold Az.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sofia-pro',
  display: 'swap',
})