export interface Video {
    etag: string,
    id: VideoId,
    kind: string,
    snippet: VideoSnippet
}

interface VideoId {
    kind: string,
    videoId: string
}


interface VideoSnippet {
    channelId: string,
    channelTitle: string,
    description: string,
    liveBroadcastContent: string,
    publishTime: string,
    publishedAt: string,
    thumbnails: VideoThumb,
    title: string,
}


interface VideoThumb {
    default: thumbnails,
    high: thumbnails,
    medium: thumbnails
}

interface thumbnails {
    height: number
    url: string
    width: number
}