import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mireb Commercial B2B',
  description: 'Plateforme commerciale B2B pour la gestion des ventes et clients',
  metadataBase: new URL('https://mireb1.github.io/Mireb-commercial-B2B'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
