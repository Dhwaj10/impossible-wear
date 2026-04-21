import './globals.css'

export const metadata = {
  title: 'Impossible Wear',
  description: 'Affordable Gen Z Streetwear',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
