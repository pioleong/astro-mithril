import { type AstroIntegration } from 'astro'

function getRenderer() {
    return {
      name: 'astro-mithril',
      clientEntrypoint: 'astro-mithril/src/client.js',
      serverEntrypoint: 'astro-mithril/src/server.js',
    }
}

function getViteConfiguration() {
    return {
        resolve: {
            dedupe: ['mithril'],
        },
    }
}

export default function (): AstroIntegration {
    return {
        name: 'astro-mithril',
        hooks: {
            'astro:config:setup': ({ addRenderer, updateConfig }) => {
                addRenderer(getRenderer())
                updateConfig({ vite: getViteConfiguration() })
            },
        },
    }
}
