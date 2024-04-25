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
    "url": "...",
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