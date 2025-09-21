export interface AppConfig {
  verbose?: boolean;
  // Legacy fields for backward compatibility
  gitRepoPath?: string;
  systemPromptAppend?: string;
  runScript?: string[];
  // Custom claude executable path (for when it's not in PATH)
  claudeExecutablePath?: string;
  // Permission mode for all sessions
  defaultPermissionMode?: 'approve' | 'ignore';
  // Default model for new sessions
  defaultModel?: string;
  // Auto-check for updates
  autoCheckUpdates?: boolean;
  // Stravu MCP integration
  stravuApiKey?: string;
  stravuServerUrl?: string;
  // Theme preference
  theme?: 'light' | 'dark';
  // Notification settings
  notifications?: {
    enabled: boolean;
    playSound: boolean;
    notifyOnStatusChange: boolean;
    notifyOnWaiting: boolean;
    notifyOnComplete: boolean;
  };
  // Dev mode for debugging
  devMode?: boolean;
  // Additional paths to add to PATH environment variable
  additionalPaths?: string[];
  // Environment variables for Claude processes
  claudeEnvironmentVariables?: Record<string, string>;
  // Smart session names configuration
  anthropicApiKey?: string;
  anthropicBaseUrl?: string;
  anthropicModel?: string;
}

export interface UpdateConfigRequest {
  verbose?: boolean;
  claudeExecutablePath?: string;
  systemPromptAppend?: string;
  defaultPermissionMode?: 'approve' | 'ignore';
  defaultModel?: string;
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
  additionalPaths?: string[];
  // Environment variables for Claude processes
  claudeEnvironmentVariables?: Record<string, string>;
  // Smart session names configuration
  anthropicApiKey?: string;
  anthropicBaseUrl?: string;
  anthropicModel?: string;
}