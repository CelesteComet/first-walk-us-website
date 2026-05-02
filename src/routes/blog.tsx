import { createFileRoute, Link } from '@tanstack/react-router'
import { posts } from '../data/blogPosts'

export const Route = createFileRoute('/blog')({ component: Blog })

function Blog() {
  return (
    <main className="pb-20">
      <section className="rise-in page-wrap px-4 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">部落格</p>
        <h1 className="font-serif text-4xl font-bold text-ink mb-4 sm:text-5xl">De Anza College 留學指南</h1>
        <p className="mx-auto max-w-xl text-base leading-8 text-ink-soft">
          幫助台灣學生認識矽谷最好的社區大學，從選校到轉學，一步一步走得踏實。
        </p>
      </section>

      <section className="page-wrap px-4 pb-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
          {[...posts].reverse().map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col rounded-2xl bg-white shadow-sm overflow-hidden no-underline hover:shadow-md transition-shadow"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-white shadow">
                  {post.tag}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <p className="text-xs text-ink-soft mb-3">{post.date}</p>
                <h2 className="font-serif font-bold text-ink leading-snug mb-3 text-base sm:text-lg group-hover:text-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-ink-soft leading-7 flex-1">{post.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  閱讀全文
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
