import 'server-only';

import { getDatabase } from "@/src/db";
import { creators, videos } from "@/src/db/migrations/schema";
import { eq, isNull } from "drizzle-orm";
import { CommissionVideoRow, VideoWithDate } from '@/src/lib/types/videos';

export async function getPersonalVideoRows(): Promise<VideoWithDate[]> {
  return (await getDatabase())
    .select({
      url: videos.youtubeId,
      date: videos.publishDate,
    })
    .from(videos)
    .where(isNull(videos.commissionFor))
    .orderBy(videos.publishDate);
}

export async function getCommissionVideoRows(): Promise<CommissionVideoRow[]> {
  return (await getDatabase())
    .select({
      person: creators.name,
      personId: creators.channelId,
      url: videos.youtubeId,
      isShort: videos.isShort,
      date: videos.publishDate,
    })
    .from(creators)
    .innerJoin(videos, eq(videos.commissionFor, creators.id))
    .orderBy(creators.name, videos.publishDate);
}