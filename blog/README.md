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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

https://khaiblog.vercel.app/

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Setup

Before you can run this project locally, you'll need to set up a few environment variables. These variables are used for configuration and are essential for the proper functioning of the application.

### Environment Variables

1. `API_KEY` - This variable is used to authenticate with the external API service.

   - **Expected Value**: You can obtain an API key from [API Provider's Website](https://api-provider.com). Once obtained, set it as `API_KEY` in your local environment.

2. `DATABASE_URL` - This variable specifies the connection string to your database.

   - **Expected Value**: Provide the URL or connection string to your local or remote database.

3. `SECRET_KEY` - This variable is used for cryptographic operations.

   - **Expected Value**: Generate a strong secret key for your application.

### Setting Up Environment Variables

To set up these environment variables in your local development environment, you can create a `.env` file in the root directory of the project and define the values there. Make sure to add the `.env` file to your project's `.gitignore` to keep it private and not push it to the repository.
