# My Company Website

![App Preview](https://imgix.cosmicjs.com/88b09190-51a6-11f1-8305-f921d082af6c-autopilot-photo-1519085360753-af0119f7cbe7-1778991112430.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, professional company website built with Next.js 16 and [Cosmic](https://www.cosmicjs.com) CMS.

## Features

- 🏠 Beautiful homepage with hero section and content previews
- 💼 Services showcase with detailed pages
- 👥 Team member profiles with bios and social links
- 📊 Case studies with challenge/solution/results breakdown
- 💬 Client testimonials with star ratings
- 📱 Fully responsive design
- ⚡ Server-side rendering for optimal performance
- 🎨 Modern UI with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a093f91a6022ba8889067bc&clone_repository=6a0940e9a6022ba888906843)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
> 
> User instructions: A company website with services, team members, case studies, and testimonials"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Company". The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: A company website with services, team members, case studies, and testimonials

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety throughout
- **Tailwind CSS** - Modern styling
- **Cosmic SDK** - Headless CMS integration
- **React 19** - Latest React features

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Install dependencies:
```bash
bun install
```

2. Set up environment variables in `.env.local`:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

3. Run development server:
```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch case study with related service
const { object: caseStudy } = await cosmic.objects
  .findOne({ type: 'case-studies', slug: 'my-case' })
  .depth(1)
```

## Cosmic CMS Integration

This app uses four content types: **services**, **team-members**, **case-studies**, and **testimonials**. All content is fetched server-side using the Cosmic SDK with the `depth` parameter to resolve object relationships.

## Deployment Options

- **Vercel**: Connect your repo and add environment variables
- **Netlify**: Configure build settings and environment variables

Set these environment variables in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

<!-- README_END -->