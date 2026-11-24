import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  getAwesomeOsModel,
  listAwesomeOsModels,
  loadModelsManifest,
} from './index.mts';

describe('awesome-os/models standalone registry', () => {
  it('loads models-manifest.json with valid B8G v3 ABI and v11 CAS metadata', () => {
    const manifest = loadModelsManifest();
    assert.equal(manifest.schema, 'awesome-os-models-manifest-v1');
    assert.equal(manifest.abiMagic, '0x33564742');
    assert.equal(manifest.casLayout, 'v11');
    assert.ok(manifest.models.length >= 7);
  });

  it('filters models by category and resolves individual entries by id', () => {
    const routers = listAwesomeOsModels('neuromorphic-router');
    assert.ok(routers.some((m) => m.id === 'spinwave-moe'));

    const classifiers = listAwesomeOsModels('labeling-classifier');
    assert.ok(classifiers.some((m) => m.id === 'b8g-app-dedup-path-mlp'));

    const llms = listAwesomeOsModels('sovereign-llm');
    assert.ok(llms.some((m) => m.id === 'xenon-1b-kalaschnikow-atlaskv'));

    const spinwave = getAwesomeOsModel('spinwave-moe');
    assert.equal(spinwave?.magic, 'B8SW');
    assert.equal(spinwave?.sizeBytes, 10934);
  });
});
