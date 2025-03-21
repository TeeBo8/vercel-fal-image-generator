import { ProviderKey } from "./provider-config";

export interface GeneratedImage {
  provider: ProviderKey;
  image: string | null;
  modelId?: string;
  instanceId?: string;
}

export interface ImageResult {
  provider: ProviderKey;
  image: string | null;
  modelId?: string;
  instanceId: string;
}

export interface ImageError {
  provider: ProviderKey;
  message: string;
  instanceId?: string;
}

export interface ProviderTiming {
  startTime?: number;
  completionTime?: number;
  elapsed?: number;
}
