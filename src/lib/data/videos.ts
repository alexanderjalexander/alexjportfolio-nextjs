import { getDatabase } from "@/src/db";
import { creators, videos } from "@/src/db/migrations/schema";
import { LooseObject } from "@/types";
import { unstable_cache } from "next/cache";
import { siteConfig } from "@/config/site";
import { eq, isNull } from "drizzle-orm";

// export async function getCommissioners() {
//     let commissioners = (await getDatabase()).select({
//         creator: creators.name
//     }).from(creators);
//     return (await commissioners).map((x) => (x.creator));
// }

export const getCommissioners = unstable_cache(
    async() => {
        let commissioners = (await getDatabase()).select({
            creator: creators.name
        }).from(creators);
        return (await commissioners).map((x) => (x.creator));
    },
    ['commissioners'],
    {
        tags: ['commissioners'],
        revalidate: siteConfig.revalidateTime
    }
)

/* 
export async function getPersonalVideos() {
    const vids = (await getDatabase()).select({
        url: videos.youtubeId,
        date: videos.publishDate
    }).from(videos).where(isNull(videos.commissionFor)).orderBy(videos.publishDate)
    return vids;
}
*/

export const getPersonalVideos = unstable_cache(
    async () => {
        const vids = (await getDatabase()).select({
            url: videos.youtubeId,
            date: videos.publishDate
        }).from(videos).where(isNull(videos.commissionFor)).orderBy(videos.publishDate)
        return vids;
    },
    ['personal-vids'],
    {
        tags: ['personal-vids'],
        revalidate: siteConfig.revalidateTime
    }
)

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

export const getCachedCommissions = unstable_cache(
    async() => await getCommissions(),
    ['commission-vids'],
    { 
        tags: ['commission-vids'],
        revalidate: siteConfig.revalidateTime 
    }
)

export function getVideoURL(id:string) {
    return `https://www.youtube.com/watch?v=${id}`;
}

export function getVideoThumbnail(id:string) {
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}