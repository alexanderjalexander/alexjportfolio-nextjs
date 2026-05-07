# Portfolio Website

This is a new portfolio site, replacing the original one and improving upon it to be more visually appealing and technologically performant, taking advantage of Next.js's server-side rendering, animations, and Dark/Light mode themes.

## Technologies Used

- [Next.js](https://nextjs.org/docs/getting-started)
- [NextUI](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Neon Serverless PostgreSQL](https://neon.tech/)
- [BackBlaze B2 Object Storage](https://www.backblaze.com/)

## How to Use

### Install dependencies

```bash
npm install
```

### Create a .env file

You will need access to a PostgreSQL Server of some kind, very much preferably Neon as Drizzle works directly with Neon in this project, as well as an object storage bucket(I recommend Backblaze B2). This project uses the S3-Compatible API for BackBlaze B2.

There are two buckets utilized: a standard and a resize version. For any graphic design portfolio pieces, full-size images are placed in the standard bucket, and then resized & copied using the `syncObjects` library function into the resize bucket.

The current setup utilized no versioning, or "Keep only the latest files" versioning.

```
# Neon Environment Variables
DATABASE_URL="<database url goes here from Neon>"

# Next.js Environment Variables (CRON_SECRET can be whatever, just needs to be secure)
NEXT_PRIVATE_DEBUG_CACHE=1
CRON_SECRET="<alphanumeric token>"

# BackBlaze B2 Environment Variables
REGION="<specified AWS bucket region from BackBlaze>"
GD_BUCKET_NAME="<Original Bucket>"
GD_BUCKET_NAME_RESIZE="<Resize Bucket. Good for optimized page loading and images>"
WORK_BUCKET_NAME="<Work Pictures Bucket>"
AWS_ACCESS_KEY_ID="<your b2 keyId>"
AWS_SECRET_ACCESS_KEY="<your b2 applicationKey>"

# Uptime API URL
UPTIME_API_URL=https://uptime.alexanderjalexander.com/api/v1

# YouTube API Key
YOUTUBE_API_KEY="<your YouTube Data API V3 Key (standard non-OAuth key)>"
```

### Run the development server

```bash
npm run dev
```

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
