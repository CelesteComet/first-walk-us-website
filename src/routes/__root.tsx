import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ChatWidget } from '../components/ChatWidget'

import appCss from '../styles.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

const TAWK_TO_SCRIPT = `
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/69f5b0708523f61c32f23f8f/1jnjridpr';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'First Walk US — De Anza College Application Service for Taiwan Students' },
      {
        name: 'description',
        content:
          'We guide Taiwan students through every step of applying to De Anza College in Cupertino, California — from documents and TOEFL to F-1 visa and housing.',
      },
      { name: 'og:title', content: 'First Walk US — De Anza College Application Service' },
      { name: 'og:description', content: 'Your trusted guide from Taiwan to Silicon Valley.' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="min-h-full">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="min-h-full bg-cream text-ink font-sans antialiased overflow-x-hidden [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]">
        <Header />
        {children}
        <Footer />
        <script dangerouslySetInnerHTML={{ __html: TAWK_TO_SCRIPT }} />
        <Scripts />
      </body>
    </html>
  )
}
