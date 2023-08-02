import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Lalu Ahmad Ardiansyah',
  description: '🚀 Coming soon',
}

export default function Blog() {
  return (
    <main className="my-12">
      <h1>Blog</h1>
      <p>{metadata.description}</p>
    </main>
  )
}
