import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { posts } from '../data/blogPosts'

export const Route = createFileRoute('/blog_/$slug')({
  component: BlogPost,
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug)
    if (!post) throw notFound()
    return post
  },
})

function BlogPost() {
  const post = Route.useLoaderData()

  return (
    <main className="pb-20">
      {/* Banner */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end page-wrap px-4 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-white">{post.tag}</span>
            <span className="text-xs text-white/70">{post.date}</span>
          </div>
          <h1 className="font-serif text-2xl font-bold text-white leading-snug sm:text-4xl max-w-2xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <article className="page-wrap px-4 py-12 max-w-2xl mx-auto">
        <p className="text-lg text-ink-soft leading-9 mb-10 border-l-2 border-gold pl-5">{post.summary}</p>
        <div className="flex flex-col gap-10">
          {post.content.map(({ heading, body }) => (
            <div key={heading}>
              <h2 className="font-serif text-2xl font-bold text-ink mb-3">{heading}</h2>
              <span className="mb-4 block h-0.5 w-8 rounded-full bg-gold" />
              <p className="text-lg text-ink-soft leading-9">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-black/10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-gold no-underline hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            回到部落格
          </Link>
        </div>
      </article>
    </main>
  )
}
