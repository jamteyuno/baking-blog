import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Sourdough Baking Blog',
  description: 'Sally Adventure Logs.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Sally Adventure Logs</h1>
      <BlogPosts />
    </section>
  )
}
