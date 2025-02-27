# Fundraiser SaaS Admin Dashboard

A modern admin dashboard for a fundraising SaaS platform built with Next.js, React, and Tailwind CSS.

## Overview

This application provides an administrative interface for managing a fundraising platform that connects:

- **Organizations** (schools, non-profits, etc.) that want to raise funds
- **Businesses** that host events to raise money for organizations
- **Supporters** who contribute to businesses' fundraising efforts for organizations

## Features

- **Dashboard Overview**: Summary statistics and recent activity
- **Organizations Management**: View and manage schools and non-profits
- **Businesses Management**: View and manage businesses hosting fundraising events
- **Supporters Management**: View and manage individual supporters

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **UI Components**: Headless UI

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── admin/                  # Admin dashboard routes
│   │   ├── organizations/      # Organizations management
│   │   ├── businesses/         # Businesses management
│   │   ├── supporters/         # Supporters management
│   │   ├── layout.tsx          # Admin layout with sidebar and header
│   │   └── page.tsx            # Main dashboard page
│   ├── components/             # Reusable components
│   │   ├── DataTable.tsx       # Generic data table component
│   │   ├── Header.tsx          # Admin header component
│   │   └── Sidebar.tsx         # Admin sidebar navigation
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Root page (redirects to admin)
├── public/                     # Static assets
└── ...
```

## Future Enhancements

- Authentication and authorization
- Form components for creating and editing entities
- Filtering and searching functionality
- Pagination for data tables
- Charts and analytics
- Dark mode support
- Mobile responsiveness improvements

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
