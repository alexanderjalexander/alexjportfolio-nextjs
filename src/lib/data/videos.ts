import { getDatabase } from "@/src/db";
import { creators, videos } from "@/src/db/migrations/schema";
import { eq, isNull } from "drizzle-orm";

export async function getPersonalVideos() {
    const vids = (await getDatabase()).select({
        url: videos.youtubeId,
        date: videos.publishDate
    }).from(videos).where(isNull(videos.commissionFor)).orderBy(videos.publishDate)
    return vids;
}

export interface CommissionsObject {
    [key: string]: {
        views: number,
        pfp: string,
        id: string,
        videos: [
            { url:string, date:string }
        ]
    }
}

export async function getCommissions() {
    const commissions = (await getDatabase()).select({
        person: creators.name,
        personId: creators.channelId,
        url: videos.youtubeId,
        date: videos.publishDate
    }).from(creators).innerJoin(videos, eq(videos.commissionFor, creators.id)).orderBy(creators.name, videos.publishDate);

    let result:CommissionsObject = {}

    for (let commission of await commissions) {
        let person = commission.person;
        if (!result.hasOwnProperty(person)) {
            //@ts-ignore
            result[person] = {
                views: 0,
                pfp: '',
                id: commission.personId,
                videos: [{
                    url: commission.url,
                    date: commission.date
                }]
            }
        } else {
            //@ts-ignore
            result[person].videos!.push({
                url: commission.url,
                date: commission.date
            });
        }
    }

    for (let person in result) {
        let vid_id_list = result[person].videos.map(vid => vid.url);

        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=id,statistics&fields=items.statistics.viewCount,items.id&id=${vid_id_list.toString()}&key=${process.env.YOUTUBE_API_KEY!}`,
            {
                method: "GET",
                redirect: "follow",
            }
        )

        const vids = (await response.json());
        const vid_list = vids.items;
        for (let item of vid_list!) {
            result[person].views += Number(item.statistics?.viewCount)!
        }

        const channelInfo = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&fields=items.snippet.thumbnails.medium&id=${result[person].id}&key=${process.env.YOUTUBE_API_KEY!}`, 
            {
                method: "GET",
                redirect: "follow",
            }
        )
        const channel = (await channelInfo.json()).items![0];
        let pfp = channel.snippet?.thumbnails?.medium?.url!;
        result[person].pfp = pfp.replace("ggpht", "googleusercontent");
    }
    
    return result;
}

export function getVideoURL(id:string) {
    return `https://www.youtube.com/watch?v=${id}`;
}

export function getVideoThumbnail(id:string) {
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}