import { JsonObject } from '@angular-devkit/core';
import { ProjectType } from '@nrwl/workspace';

export interface ServeBuilderSchema extends JsonObject {
  projectType?: ProjectType;
  configPath?: string;

  debug?: boolean;
  dev?: boolean;
  docs?: boolean;
  port?: number;
  verbose?: boolean;
}
