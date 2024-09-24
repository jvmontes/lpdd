This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Install project dependencies

```bash
npm install
```

### Configure environment variables

Create a .env

```bash
cp .env-template .env
```

In the `.env` file, fill in the variables that are need (i.e. db credentials, sendgrid keys, etc)

### Run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Tech Stack

### Database

- PostgreSQL
- Drizzle ORM

You can use a local database installing postgresql and [dbeaver](https://dbeaver.io/download/) applications

```
brew install postgresql
```

Another easier way is to use supabase or render database instances. You can find the env variables in the dashboard for those services.

NOTE: More details [here](drizzle/README.md)

### Database Documentation (Dbdocs)

We use **dbdocs** to generate and maintain documentation for the database schema. The documentation is stored and versioned, and can be viewed locally for internal use.

#### Prerequisites

- **dbdocs CLI**: You can install the dbdocs CLI tool globally like below. Note: This is only necessary if you are going to use db2dbml commands or similar. Basic commands are implemented via npx in our scripts. See `dbdocs:login` and `dbdocs:build`.

#### Installation (optional)

1. **Install the Dbdocs CLI**:
   Run the following command to install Dbdocs globally:
   ```bash
   npm install -g dbdocs
   ```
