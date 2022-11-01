import '~/styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <head>
          <link rel="preconnect dns-prefetch" href="https://cdn.sanity.io" />
        </head>
        <main>{children}</main>
      </body>
    </html>
  )
}
