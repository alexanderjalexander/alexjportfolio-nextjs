import { YouTubeThumbnailSet, YouTubeVideoStats } from "../types/videos";

export function getVideoURL(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function getVideoThumbnail(id: string): string {
  return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}

export async function fetchBatchedVideoStats(
  videoIdList: string[]
): Promise<YouTubeVideoStats[]> {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=id,statistics&fields=items.statistics.viewCount,items.id&id=${videoIdList.toString()}&key=${process.env.YOUTUBE_API_KEY!}`,
    {
      method: "GET",
      redirect: "follow",
    },
  );

  const vids = await response.json();
  return vids.items;
}

export async function fetchCreatorChannelInfo(channelId: string): Promise<YouTubeThumbnailSet> {
  const channelInfo = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items.snippet.thumbnails.medium&id=${channelId}&key=${process.env.YOUTUBE_API_KEY!}`,
    {
      method: "GET",
      redirect: "follow",
    },
  );

  return (await channelInfo.json()).items![0];
}
