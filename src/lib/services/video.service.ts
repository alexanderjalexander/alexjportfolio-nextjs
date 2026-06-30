import 'server-only';

import { CommissionsForCreatorsDto, CommissionVideoRow, VideoWithDate } from '@/src/lib/types/videos';
import { getCommissionVideoRows } from '@/src/lib/repos/videos.repo';
import { fetchBatchedVideoStats, fetchCreatorChannelInfo } from '@/src/lib/utils/video.utils';

function groupCommissionRowsByCreator(
  rows: CommissionVideoRow[]
): CommissionsForCreatorsDto {
  return rows.reduce<CommissionsForCreatorsDto>((acc, row) => {
    const creator = acc[row.person] ??= {
      id: row.personId,
      pfp: "",
      views: 0,
      videos: [],
      shorts: []
    };

    const video: VideoWithDate = { url: row.url, date: row.date };

    if (row.isShort) {
      creator.shorts.push(video);
    } else {
      creator.videos.push(video);
    }

    return acc;
  }, {});
}

export async function getCommissionsForCreators(): Promise<CommissionsForCreatorsDto> {
  const rows = await getCommissionVideoRows();
  const result = groupCommissionRowsByCreator(rows);

  for (const creator of Object.values(result)) {
    const videoIdList = creator.videos
      .concat(creator.shorts)
      .map((vid) => vid.url);

    const channelInfo = await fetchCreatorChannelInfo(creator.id);
    let pfp = channelInfo.snippet?.thumbnails?.medium?.url!;
    creator.pfp = pfp.replace("ggpht", "googleusercontent");

    if (videoIdList.length <= 0) continue;

    const videoList = await fetchBatchedVideoStats(videoIdList);
    creator.views = videoList.reduce((sum, item) => sum + Number(item.statistics?.viewCount ?? 0), 0);

    const validIds = new Set(videoList.map((item) => item.id));
    creator.videos = creator.videos.filter((item) => validIds.has(item.url));
  }

  return result;
}
