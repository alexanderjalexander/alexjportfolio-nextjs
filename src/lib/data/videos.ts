import { getDatabase } from "@/src/db";
import { creators, videos } from "@/src/db/migrations/schema";
import { siteConfig } from "@/config/site";
import { eq, isNull } from "drizzle-orm";
import { memoize } from "nextjs-better-unstable-cache";

export const getCommissioners = memoize(
    async() => {
        let commissioners = (await getDatabase()).select({
            creator: creators.name
        }).from(creators);
        return (await commissioners).map((x) => (x.creator));
    },
    {
        revalidateTags: ['commissioners'],
        duration: siteConfig.revalidateTime,
        log: ['datacache', 'verbose'],
        logid: 'Commissioners'
    }
)

export const getPersonalVideos = memoize(
    async () => {
        const vids = (await getDatabase()).select({
            url: videos.youtubeId,
            date: videos.publishDate
        }).from(videos).where(isNull(videos.commissionFor)).orderBy(videos.publishDate)
        return vids;
    },
    {
        revalidateTags: ['personal-vids'],
        duration: siteConfig.revalidateTime,
        log: ['datacache', 'verbose'],
        logid: 'Personal Videos'
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

export const getCachedCommissions = memoize(
    async() => await getCommissions(),
    { 
        revalidateTags: ['commission-vids'],
        duration: siteConfig.revalidateTime,
        log: ['datacache', 'verbose'],
        logid: 'Commission Videos'
    }
)

export function getVideoURL(id:string) {
    return `https://www.youtube.com/watch?v=${id}`;
}

export function getVideoThumbnail(id:string) {
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}