// Type definition for blog post metadata
export type Post = {
  slug: string,
  title: string,
  date: string,
  previewImage?: string,
  content: string,
  excerpt?: string,
}
// export interface PostMetadata {
//   title: string
//   date: string
//   excerpt?: string
// }

// export interface Post {
//   slug: string
//   metadata: PostMetadata
//   content: string
// }

// // Load all markdown posts using Vite's glob import
// // Append ?raw directly to the pattern
// const postModules = import.meta.glob('/src/posts/*.md?raw', { 
//   eager: true,
//   import: 'default'
// }) as Record<string, string>

// // Parse frontmatter and content from markdown
// function parseMarkdown(markdown: string, slug: string): Post {
//   // Match frontmatter: --- followed by content, then ---, then optional whitespace/newlines, then the actual content
//   const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*(\n|$)([\s\S]*)$/
//   const match = markdown.match(frontmatterRegex)
  
//   if (!match) {
//     // No frontmatter, treat entire file as content
//     return {
//       slug,
//       metadata: {
//         title: slug,
//         date: new Date().toISOString().split('T')[0],
//       },
//       content: markdown,
//     }
//   }
  
//   const frontmatter = match[1]
//   const content = match[3] || '' // Use match[3] which is the content after the frontmatter
  
//   // Parse frontmatter (simple YAML-like parsing)
//   const metadata: PostMetadata = {
//     title: slug,
//     date: new Date().toISOString().split('T')[0],
//   }
  
//   frontmatter.split('\n').forEach((line) => {
//     const lineMatch = line.match(/^(\w+):\s*["']?([^"']+)["']?$/)
//     if (lineMatch) {
//       const key = lineMatch[1].trim()
//       const value = lineMatch[2].trim()
//       if (key === 'title' || key === 'date' || key === 'excerpt') {
//         ;(metadata as any)[key] = value
//       }
//     }
//   })
  
//   return {
//     slug,
//     metadata,
//     content: content.trim(), // Trim whitespace from content
//   }
// }

// // Get all posts
// export function getAllPosts(): Post[] {
//   const posts: Post[] = []
  
//   for (const path in postModules) {
//     const content = postModules[path]
//     if (!content || typeof content !== 'string') {
//       console.warn(`Failed to load post from ${path}:`, typeof content)
//       continue
//     }
    
//     // Extract slug from path (remove /src/posts/ prefix and .md suffix)
//     // Path might include ?raw query parameter, so we handle that too
//     const slug = path
//       .replace('/src/posts/', '')
//       .replace(/\?raw$/, '')
//       .replace('.md', '')
    
//     posts.push(parseMarkdown(content, slug))
//   }
  
//   // Sort by date (newest first)
//   return posts.sort((a, b) => 
//     new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
//   )
// }

// // Get a single post by slug
// export function getPostBySlug(slug: string): Post | undefined {
//   const allPosts = getAllPosts()
//   return allPosts.find((post) => post.slug === slug)
// }
