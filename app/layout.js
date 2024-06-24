import LayoutProvider from './shared/componentts/layoutProvider'
import './globals.scss'

export default function RootLayout({ children }) {

  return (
    <html>
      <body>
        <LayoutProvider children={children} />
      </body>
    </html>
  )
}
