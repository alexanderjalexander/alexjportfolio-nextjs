interface YouTubeThumbnail {
  url: string,
  width: number,
  height: number,
}

export interface YouTubeVideoStats {
  id: string,
  statistics: {
    viewCount: number,
  },
}

export interface YouTubeThumbnailSet {
  snippet: {
    thumbnails: {
      default: YouTubeThumbnail,
      medium: YouTubeThumbnail,
      high: YouTubeThumbnail,
    }
  },
}

export interface VideoWithDate {
  url: string,
  date: string,
};

export interface CommissionVideoRow {
  person: string,
  personId: string,
  url: string,
  isShort: boolean,
  date: string,
};

export interface CreatorCommissionStats {
  id: string,
  pfp: string,
  views: number,
  videos: VideoWithDate[],
  shorts: VideoWithDate[],
}

export interface CommissionsForCreatorsDto {
  [key: string]: CreatorCommissionStats;
};