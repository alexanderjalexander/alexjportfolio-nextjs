import { getDatabase } from "@/src/db";
import { creators, videos } from "@/src/db/migrations/schema";
import { eq, isNull } from "drizzle-orm";

export async function getCommissioners() {
    const commissioners = (await getDatabase()).select({
        creator: creators.name
    }).from(creators);
    return commissioners;
}

export async function getPersonalVideos() {
    const vids = (await getDatabase()).select({
        url: videos.youtubeId,
        date: videos.publishDate
    }).from(videos).where(isNull(videos.commissionFor)).orderBy(videos.publishDate)
    return vids;
}

export async function getCommissions() {
    const commissions = (await getDatabase()).select({
        person: creators.name,
        url: videos.youtubeId,
        date: videos.publishDate
    }).from(creators).innerJoin(videos, eq(videos.commissionFor, creators.id)).orderBy(creators.name, videos.publishDate);
    return commissions;
}

export function getVideoURL(id:string) {
    return `https://www.youtube.com/watch?v=${id}`;
}

export function getVideoThumbnail(id:string) {
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}