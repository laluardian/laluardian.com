import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Lalu Ahmad Ardiansyah',
  description: `Let's connect!`,
}

export default function Contact() {
  const email = 'laluardian@outlook.com'
  return (
    <main className="my-12">
      <h1>Contact</h1>
      <p>
        I can be reached anytime via email at{' '}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </main>
  )
}
