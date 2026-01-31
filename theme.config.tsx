import React from 'react'
// import { DocsThemeConfig } from 'nextra-theme-docs'

const config = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Optstack'
    }
  },
  banner: {
    key: 'optstack-0.1-release',
    text: (
      <a href="https://github.com/miketropi/optstack" target="_blank">
        🎉 Optstack 0.1 is released. Read more →
      </a>
    )
  },
  logo: <span>Optstack</span>,
  project: {
    link: 'https://github.com/miketropi/optstack',
  },
  // chat: {
  //   link: 'https://#',
  // },
  docsRepositoryBase: 'https://github.com/miketropi/optstack',
  footer: {
    text: 'Optstack documentation',
  },
}

export default config
