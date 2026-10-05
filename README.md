
### Contact form email setup

The contact form sends messages through Yahoo SMTP to `ovichemconsultltd@yahoo.com`. Create a Yahoo App Password for the business mailbox, then add these environment variables in the Vercel project under **Settings > Environment Variables**:

```text
YAHOO_USER=ovichemconsultltd@yahoo.com
YAHOO_APP_PASSWORD=your-yahoo-app-password
```

Set the variables for Production, save them, and redeploy the project. For local development, put the same variables in `.env.local` and restart the dev server. Never commit or expose the App Password in client-side code.
# Ovichem Consult Ltd

Official website and service portal for **Ovichem Consult Ltd** — Practical space and chemical treatment specialists based in Warri, Delta State, Nigeria.

## Overview

Ovichem Consult Ltd provides professional environmental hygiene, fumigation, potable water treatment, and certified chemical distribution services across domestic, commercial, and marine environments.

### Key Capabilities
- **Fumigation & Pest Control**: Residential, industrial, and maritime fumigation protocols (ULV cold fogging, subterranean termite barriers, bilge treatment).
- **Water Treatment Solutions**: Multi-parameter diagnostic testing, borehole filtration media, and food-grade water purification coagulants.
- **Chemical Supplies**: Industrial and commercial chemical formulation and distribution.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)

## Getting Started

### Prerequisites

- Node.js (v18.17 or later recommended)
- npm, yarn, or pnpm

### Installation

1. Clone or download the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

To create an optimized production build:
```bash
npm run build
npm run start
```
