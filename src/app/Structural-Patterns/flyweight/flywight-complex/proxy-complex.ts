export interface ThirdPartyYouTubeLib {
  listVideos(): string;
  getVideoInfo(id: string): string;
  downloadVideo(id: string): string;
}

export class ThirdPartyYouTubeClass implements ThirdPartyYouTubeLib {
  listVideos(): string {
    return 'List of videos';
  }
  getVideoInfo(id: string): string {
    return `Video info for ${id}`;
  }
  downloadVideo(id: string): string {
    return `Download video ${id}`;
  }
}

export class CachedYouTubeClass implements ThirdPartyYouTubeLib {
  service: ThirdPartyYouTubeClass;
  cache: Map<string, string>;

  constructor(service: ThirdPartyYouTubeClass) {
    this.service = service;
    this.cache = new Map();
  }
  listVideos(): string {
    return this.cache.get('listVideos') || this.service.listVideos();
  }
  getVideoInfo(id: string): string {
    return this.cache.get('getVideoInfo') || this.service.getVideoInfo(id);
  }
  downloadVideo(id: string): string {
    return this.cache.get('downloadVideo') || this.service.downloadVideo(id);
  }
}

export class YouTubeManager {
  service: CachedYouTubeClass;

  constructor(service: CachedYouTubeClass) {
    this.service = service;
  }
  renderVideoPage(id: string): string {
    return this.service.getVideoInfo(id);
  }

  renderListPanel(): string {
    return this.service.listVideos();
  }

  reactOnUserInput(id: string): string {
    this.renderVideoPage(id);
    this.renderListPanel();
    return this.service.downloadVideo(id);
  }
}

export class Application {
  constructor() {
    const service = new CachedYouTubeClass(new ThirdPartyYouTubeClass());
    const manager = new YouTubeManager(service);
    manager.reactOnUserInput('video-id');
  }
}
