import type { Configuration as DevServerConfig } from 'webpack-dev-server';
import type { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfig {
  const { port } = options;

  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
