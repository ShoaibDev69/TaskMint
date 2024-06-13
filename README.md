This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

## Environment Variables

You can configure your environment variables in the `.env.local` file. You can find more information in the [documentation](https://nextjs.org/docs/basic-features/environment-variables).

## TypeScript

This project uses TypeScript. If you're not familiar with TypeScript, you can learn about it in the [documentation](https://www.typescriptlang.org/docs/).

## Directory Structure

The project structure is as follows:

```bash
📦 root
 ┣ 📂 components
 ┃ ┣ 📄 Accountability.tsx
 ┃ ┣ 📄 AddTask.tsx
 ┃ ┣ 📄 Deposit.tsx
 ┃ ┣ 📄 TaskCard.tsx
 ┃ ┗ 📄 TasksList.tsx
 ┣ 📂 public
 ┃ ┣ 🖼️ next.svg
 ┃ ┗ 🖼️ vercel.svg
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📄 chain.ts
 ┃ ┃ ┣ 📄 client.ts
 ┃ ┃ ┣ 🖼️ favicon.ico
 ┃ ┃ ┣ 📄 globals.css
 ┃ ┃ ┣ 📄 layout.tsx
 ┃ ┃ ┣ 📄 page.module.css
 ┃ ┃ ┣ 📄 page.tsx
 ┃ ┃ ┗ 📄 thirdweb.ts
 ┃ ┣ 📂 utils
 ┃ ┃ ┣ 📄 contractABI.ts
 ┃ ┃ ┗ 📄 contracts.ts
 ┣ 📄 .gitignore
 ┣ 📄 README.md
 ┣ 📄 next.config.mjs
 ┣ 📄 package.json
 ┣ 📄 tsconfig.json
 ┗ 📄 yarn.lock