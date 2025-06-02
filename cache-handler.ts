interface CacheValue {
  value: any;
  lastModified: number;
  tags?: string[];
}

interface CacheContext {
  tags?: string[];
  revalidate?: number;
}

interface CacheHandlerOptions {
  // Add any options your cache handler needs
  maxSize?: number;
  ttl?: number;
}

const cache = new Map<string, CacheValue>();

export default class CacheHandler {
  private options: CacheHandlerOptions;
  private cache: Map<string, CacheValue>;

  constructor(options: CacheHandlerOptions = {}) {
    this.options = options;
    this.cache = cache;
  }

  async get(key: string): Promise<CacheValue | undefined> {
    return this.cache.get(key);
  }

  async set(key: string, data: any, ctx: CacheContext = {}): Promise<void> {
    this.cache.set(key, {
      value: data,
      lastModified: Date.now(),
      tags: ctx.tags,
    });
  }

    async revalidateTag(tag: string): Promise<void> {
    for (const [key, value] of Array.from(this.cache.entries())) {
        if (value.tags?.includes(tag)) {
        this.cache.delete(key);
        }
    }   
    }
}