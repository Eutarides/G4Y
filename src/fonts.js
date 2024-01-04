import { WebFont } from 'webfontloader'

export const renderWebFont = () => {
  WebFont.load({
    google: {
      families: ['Lato:Regular,400']
    }
  })
}