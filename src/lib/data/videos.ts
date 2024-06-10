import { getDatabase } from "@/src/db";
import { creators, videos } from "@/src/db/migrations/schema";
import { LooseObject } from "@/types";
import { eq, isNull } from "drizzle-orm";

export async function getCommissioners() {
    let commissioners = (await getDatabase()).select({
        creator: creators.name
    }).from(creators);
    return (await commissioners).map((x) => (x.creator));
}

export async function getPersonalVideos() {
    const vids = (await getDatabase()).select({
        url: videos.youtubeId,
        date: videos.publishDate
    }).from(videos).where(isNull(videos.commissionFor)).orderBy(videos.publishDate)
    return vids;
}

export interface CommissionsObject {
    [key: string]: [
        { url:string, date:string }
    ]
}

export async function getCommissions() {
    const commissions = (await getDatabase()).select({
        person: creators.name,
        url: videos.youtubeId,
        date: videos.publishDate
    }).from(creators).innerJoin(videos, eq(videos.commissionFor, creators.id)).orderBy(creators.name, videos.publishDate);

    let result:CommissionsObject = {}

    for (let commission of await commissions) {
        let person = commission.person;
        if (!result.hasOwnProperty(commission.person)) {
            result[commission.person] = [{
                url: commission.url,
                date: commission.date
            }]
        } else {
            result[person].push({
                url: commission.url,
                date: commission.date
            });
        }
    }
    
    return result;
}

export function getVideoURL(id:string) {
    return `https://www.youtube.com/watch?v=${id}`;
}

export function getVideoThumbnail(id:string) {
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}