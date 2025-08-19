# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website with TypeScript, featuring animated components, project showcases, and a contact form with email integration using Resend.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Development email preview (React Email)
npm run email
```

## Architecture and Structure

### Tech Stack
- **Framework**: Next.js 15.3.5 with App Router
- **Language**: TypeScript 5.7.3 with strict mode
- **Styling**: Tailwind CSS 3.2.4 with custom plugins and animations
- **Forms**: React Hook Form with Zod validation
- **Email**: Resend API with React Email templates
- **Icons**: React Icons 4.11.0
- **Animations**: Framer Motion 12.23.3
- **UI Components**: Headless UI 1.7.18

### Project Structure

```
/app                    # Next.js App Router
  /_components         # UI components (20+ portfolio components)
  /emails             # React Email templates
  layout.tsx          # Root layout with Josefin Sans font
  page.tsx            # Home page

/actions              # Server actions
  sendEmail.ts        # Resend email integration

/context              # React Context providers
  GlobalContext.tsx   # Theme/global state provider

/hooks                # Custom React hooks
  useNav.tsx         # Navigation state hook
  useScreenSize.tsx  # Responsive screen size detection

/lib                  # Utilities and data
  utils.ts           # cn() utility for className merging
  projects.ts        # Project data
  logos.ts           # Tech stack logos
  ContactMeFormSchema.ts  # Zod validation schema

/public              # Static assets (images, logos)
/styles              # Global CSS
```

### Key Patterns

#### Component Architecture
- All components use TypeScript with proper type definitions
- Components are organized in `/app/_components` following Next.js App Router conventions
- Most components are client-side (`"use client"`) due to interactive nature
- Global context provider wraps the application for state management

#### Styling System
- Tailwind CSS with custom configuration for:
  - Custom colors: `secondary`, `accent`, `dark`, `light`
  - Custom font: Josefin Sans via Google Fonts
  - Custom animations: `marquee`, `slideDown`, `slideUp`
  - Text shadow utilities via custom plugin
- Uses `cn()` utility from `/lib/utils.ts` for conditional class merging

#### Email Integration
- Server action pattern with `sendEmail.ts` marked as `"use server"`
- React Email components for HTML email templates
- Resend API for email delivery
- Zod schema validation for form data

#### Environment Variables
Required in `.env.local`:
- `RESEND_API_KEY` - Resend API key for email functionality

### Component Dependencies

Key component relationships:
- `Homepage` → contains `Hero`, `AboutMe`, `MyStack`, `Projects`, `ContactMe`, `Footer`
- `Projects` → uses `ProjectCardNew` and `ProjectDialog` for project showcases
- `ContactMe` → integrates with `sendEmail` server action
- `Navbar` → uses `HamburgerMenu` for mobile navigation
- `FloatingSocialBar` → persistent social media links

### TypeScript Configuration

- Strict mode enabled for type safety
- Path alias configured: `@/*` maps to root directory
- Includes Next.js plugin for enhanced type checking
- `downlevelIteration` enabled for better iterator support

## Important Considerations

### Form Handling
The contact form uses React Hook Form with Zod validation. The schema is defined in `/lib/ContactMeFormSchema.ts` and the server action in `/actions/sendEmail.ts` handles the Resend API integration.

### Animation Performance
Multiple Framer Motion animations are used throughout the site. Consider performance implications when adding new animations, especially on mobile devices.

### Responsive Design
The site uses responsive utilities extensively. The `useScreenSize` hook provides breakpoint detection for JavaScript-based responsive behavior.

### Image Optimization
Public folder contains numerous project screenshots and logos. Consider using Next.js Image component for optimization when displaying these assets.