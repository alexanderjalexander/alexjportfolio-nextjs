# Portfolio Website

This is a new portfolio site, replacing the original one and improving upon it to be more visually appealing and technologically performant, taking advantage of Next.js's server-side rendering, animations, and Dark/Light mode themes.

## Technologies Used

- [Next.js](https://nextjs.org/docs/getting-started)
- [NextUI](https://nextui.org/)
- [Firebase](https://firebase.google.com/)
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

You will also need a Firebase project with 

```
# Neon Environment Variables
DATABASE_URL="<database url goes here from Neon>"

# Next.js Environment Variables (CRON_SECRET can be whatever, just needs to be secure)
NEXT_PRIVATE_DEBUG_CACHE=1
CRON_SECRET="<16-digit alphanumeric token>"

# BackBlaze B2 Environment Variables
REGION="<specified AWS bucket region from BackBlaze>"
BUCKET_NAME="<Original Bucket>"
BUCKET_NAME_RESIZE="<Resize Bucket. Good for optimized page loading and images>"
AWS_ACCESS_KEY_ID="<your b2 keyId>"
AWS_SECRET_ACCESS_KEY="<your b2 applicationKey>"

# YouTube API Key
YOUTUBE_API_KEY="<your YouTube Data API V3 Key (standard non-OAuth key)>"

# Firebase Environment Variables
NEXT_PUBLIC_FIREBASE_KEY="<your firebase apiKey>"
NEXT_PUBLIC_FIREBASE_DOMAIN="<your firebase authDomain>"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="<your firebase projectId>"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="<your firebase storageBucket>"
NEXT_PUBLIC_FIREBASE_SENDER_ID="<your firebase messagingSenderId>"
NEXT_PUBLIC_FIREBASE_APP_ID="<your firebase appId>"

FIREBASE_CLIENT_EMAIL="<your firebase admin client email, found in Service Accounts -> Firebase Admin SDK -> Generate New Private Key>"
FIREBASE_PRIVATE_KEY="<your firebase admin private key, found in Service Accounts -> Firebase Admin SDK -> Generate New Private Key>"
```

### Run the development server

```bash
npm run dev
```

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).



# API Routes Info

## `/api/programming`

### `GET /`

Obtains list of all my current programming projects.

```json
[
  {
    "id": 1,
    "title": "...",
    "subtitle": "...",
    "description": "...",
    "link": "...",
    "skills": [
      "...", ...
    ]
  }
  ...
]
```

## `/api/video`

### `GET /`

Obtains list of self-made videos. 

```json
[
  {
    "url": 11-char youtube id,
    "date": "..."
  },
  ...
]
```

### `GET /commissions`

Obtains list of commissions. All commissions done for a creator can be obtained through the key denoted by that creator's name.

```json
{
  "Creator1": [
    {
      "url": "...",
      "date": "..."
    }
  ],
  "Creator2": [
    {
      "url": "...",
      "date": "..."
    },
  ...
}
```

## `/api/motion`

### `GET /`

Obtains list of motion graphics projects, ordered by date descending.

```json
[
  {
    "id": 4,
    "name": "...",
    "description": "...",
    "youtube_id": 11-char youtube id,
    "publish_date": "YYYY-MM-DD",
    "skills": [
      "...",
      ...
    ]
  },
  ...
]
```

## `/api/animation`

### `GET /`

Obtains list of 3D animation projects, ordered by date descending.

```json
[
  {
    "id": 4,
    "name": "...",
    "description": "...",
    "youtube_id": 11-char youtube id,
    "publish_date": "YYYY-MM-DD",
    "skills": [
      "...",
      ...
    ]
  },
  ...
]
```

## `/api/graphic_design`

### `GET /`

Fetches all possible keys provided in the image bucket for the graphic design page. Each key can be used to fetch that specific image.

```json
[
  {
    "Key": "Posters/Some poster here.jpg",
    "Size": 85592
  },
  ...
]
```

### `GET /[...id]`

Returns a full-quality image provided from the key given.

404s if the key leads to no image.

### `GET /resize/[...id]`

Returns a low-quality image provided from the key given. Useful for keeping the graphic design page optimized when displaying every image.

404s if the key leads to no image.
