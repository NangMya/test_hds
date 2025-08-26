"use client"

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const EditPost = () => {

    const router = useRouter()
  const { id } = router.query
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [published, setPublished] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      fetchPost()
    }
  }, [id])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${id}`)
      if (response.ok) {
        const data = await response.json()
        setTitle(data.title)
        setContent(data.content)
        setPublished(data.published)
      } else if (response.status === 401) {
        router.push('/admin/login')
      }
    } catch (error) {
      console.error('Error fetching post:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, published }),
      })

      if (response.ok) {
        router.push('/admin/dashboard')
      } else {
        const data = await response.json()
        setError(data.message || 'Failed to update post')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    }
  }

  if (loading) return <p>Loading...</p>
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
    <h1>Edit Post</h1>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', minHeight: '200px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
          Publish
        </label>
      </div>
      <button type="submit" style={{ padding: '8px 16px', background: '#0070f3', color: 'white', border: 'none' }}>
        Update Post
      </button>
    </form>
  </div>
  )
}

export default EditPost