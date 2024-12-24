import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon/profile.png" />
      <meta property="og:title" content="Ricky Adriell" />
      <meta property="og:description" content="Ricky Adriell's portfolio" />
    </>
  ),
  logo: <span style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '0.5rem' }}>
    <img src="/favicon/profile.png" alt="profile" style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%' }} />
    <strong>Ricky Adriell</strong>
  </span>,
  project: {
    link: 'https://github.com/rickyadriell',
  },
  docsRepositoryBase: 'https://github.com/rickyadriell/web',
  footer: {
    component: <div></div>
  },
}

export default config
