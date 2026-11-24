/**
 * @file index.mts
 * @description Standalone programmatic entrypoint for `awesome-os/models`:
 * neuromorphic routers, labeling/classification MLPs, error-repair models,
 * sovereign LLMs, and sub-1-bit quantization specs.
 *
 * Strictly `erasableSyntaxOnly: true`, zero external dependencies.
 */

import fs from 'node:fs';
import path from 'node:path';

export type AwesomeOsModelCategory =
  | 'neuromorphic-router'
  | 'labeling-classifier'
  | 'error-repair'
  | 'sovereign-llm'
  | 'quantization';

export interface AwesomeOsModelEntry {
  readonly id: string;
  readonly category: AwesomeOsModelCategory;
  readonly format: string;
  readonly magic?: string;
  readonly sizeBytes?: number;
  readonly sourcePath?: string;
  readonly docPath?: string;
  readonly status: 'implemented-verified' | 'research-prototype' | 'research-spec';
}

export interface AwesomeOsModelsManifest {
  readonly schema: 'awesome-os-models-manifest-v1';
  readonly abiMagic: '0x33564742';
  readonly casLayout: 'v11';
  readonly models: readonly AwesomeOsModelEntry[];
}

export const MODELS_MANIFEST_PATH: string = path.join(
  import.meta.dirname,
  'models-manifest.json',
);

export function loadModelsManifest(): AwesomeOsModelsManifest {
  return JSON.parse(
    fs.readFileSync(MODELS_MANIFEST_PATH, 'utf8'),
  ) as AwesomeOsModelsManifest;
}

export function listAwesomeOsModels(
  category?: AwesomeOsModelCategory,
): readonly AwesomeOsModelEntry[] {
  const manifest = loadModelsManifest();
  if (!category) return manifest.models;
  return manifest.models.filter((m) => m.category === category);
}

export function getAwesomeOsModel(id: string): AwesomeOsModelEntry | undefined {
  return loadModelsManifest().models.find((m) => m.id === id);
}
