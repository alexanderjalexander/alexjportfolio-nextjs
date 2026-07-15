import { Metadata } from 'next';

import { getPersonalVideoRows } from '@/src/lib/repos/videos.repo';
import { getCommissionsForCreators } from '@/src/lib/services/video.service';
import { CommissionsForCreatorsDto } from '@/src/lib/types/videos';

export const metadata: Metadata = {
  title: 'Video',
};

export default async function Video() {
  let vids: { url: string; date: string }[];
  let commissions: CommissionsForCreatorsDto;
  try {
    const vidsPromise = getPersonalVideoRows();
    const commissionsPromise = getCommissionsForCreators();
    Promise.all([vidsPromise, commissionsPromise]).then(results => {
      vids = results[0];
      commissions = results[1];
    })
  } catch (e) {
    throw Error('500: ' + e);
  }

  return <div></div>;
}
