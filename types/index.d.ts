import { Plugin } from 'vue'

/**
 * See https://www.w3schools.com/Jsref/met_win_open.asp for more information
 */
interface Options {
  name?: string
  specs?: string[]
  styles?: string[]
  replace?: boolean
  autoClose?: boolean
  windowTitle?: string
}

export interface HtmlToPaper {
  (
    id: string | HTMLElement,
    localOptions?: Options,
    callback?: () => void
  ): Promise<void>
}

export const VueHtmlToPaper: Plugin<Options>

declare module 'vue' {
  interface ComponentCustomProperties {
    $htmlToPaper: HtmlToPaper
  }
}
