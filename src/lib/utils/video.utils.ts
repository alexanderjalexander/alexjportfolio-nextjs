import { YouTubeThumbnailSet, YouTubeVideoStats } from "../types/videos";

export function getVideoURL(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function getVideoThumbnail(id: string): string {
  return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}

const BATCH_SIZE = 50;

export async function fetchBatchedVideoStats(
  videoIdList: string[],
): Promise<YouTubeVideoStats[]> {
  const listChunks: string[][] = [];

  for (let i = 0; i < videoIdList.length; i += BATCH_SIZE) {
    listChunks.push(videoIdList.slice(i, i + BATCH_SIZE));
  }

  const results = await Promise.all(
    listChunks.map(async (chunk) => {
      const url = new URL("https://www.googleapis.com/youtube/v3/videos");
      url.searchParams.set("part", "id,statistics");
      url.searchParams.set("fields", "items.statistics.viewCount,items.id");
      url.searchParams.set("id", chunk.toString());
      url.searchParams.set("key", process.env.YOUTUBE_API_KEY!);

      const res = await fetch(url, {
        method: "GET",
        redirect: "follow",
      });

      if (!res.ok) {
        throw new Error(
          `YouTube videos.list ${res.status}: ${await res.text()}`,
        );
      }
      const json = await res.json();
      return json.items ?? [];
    }),
  );

  return results.flat();
}

export async function fetchCreatorChannelInfo(
  channelId: string,
): Promise<YouTubeThumbnailSet> {
  const channelInfo = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items.snippet.thumbnails.medium&id=${channelId}&key=${process.env.YOUTUBE_API_KEY!}`,
    {
      method: "GET",
      redirect: "follow",
    },
  );

  return (await channelInfo.json()).items![0];
}
