import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Feature Kill Switch — Emergency Disable Features Without Deployments',
  description: 'Instantly disable problematic features without a deployment. Real-time feature flag dashboard for startups and product teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8d8a59c3-f161-4fff-a0c1-069b537833c6"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
