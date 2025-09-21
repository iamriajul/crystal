export interface AppConfig {
  gitRepoPath: string;
  verbose?: boolean;
  systemPromptAppend?: string;
  runScript?: string[];
  claudeExecutablePath?: string;
  defaultPermissionMode?: 'approve' | 'ignore';
  autoCheckUpdates?: boolean;
  stravuApiKey?: string;
  stravuServerUrl?: string;
  theme?: 'light' | 'dark';
  notifications?: {
    enabled: boolean;
    playSound: boolean;
    notifyOnStatusChange: boolean;
    notifyOnWaiting: boolean;
    notifyOnComplete: boolean;
  };
  devMode?: boolean;
  // Environment variables for Claude processes
  claudeEnvironmentVariables?: Record<string, string>;
  // Smart session names configuration
  anthropicApiKey?: string;
  anthropicBaseUrl?: string;
  anthropicModel?: string;
}