import type { Post } from './posts'
import matter from 'gray-matter'

// Load all markdown posts using Vite's glob import
// Use query: '?raw' option to get raw markdown content as strings
const postModules = import.meta.glob('/src/posts/*.md', { 
  eager: true, 
  query: '?raw', 
  import: 'default' 
}) as Record<string, string>

export function getPostSlugs(): string[] {
  return Object.keys(postModules).map(path => 
    path.replace('/src/posts/', '').replace('.md', '')
  )
}

export function getPostBySlug(slug: string): Post | undefined {
  const path = `/src/posts/${slug}.md`
  const fileContents = postModules[path]
  
  if (!fileContents || typeof fileContents !== 'string') {
    return undefined
  }
  
  try {
    const { data, content } = matter(fileContents)
    return { ...data, slug, content } as Post
  } catch (error) {
    console.error(`Error parsing post "${slug}":`, error)
    return undefined
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== undefined)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}