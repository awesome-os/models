# Awesome-OS Models (`awesome-os/models`)

> **Unified registry & hub for all Awesome-OS machine learning, neuromorphic/analog routing, labeling, error-repair, and sovereign LLM models — governed by Section–Intersection Algebra × Software-Defined Analog Computing × `CAS Q-Self` (`v11`).**

---

## Install & Run

```powershell
# Windows (PowerShell)
irm https://awesome-os.com/install.ps1 | iex
```

```bash
# Linux / macOS
curl -fsSL https://awesome-os.com/install.sh | sh
```

```powershell
# Run standalone verification suite (Node 22+, zero dependencies)
node --test models.test.mts
```

---

## 1. Model Families

### A. Neuromorphic / Spin-Wave Routers & Micro-MoE
| Model | Format & Size | Verified Speed / Accuracy | Reference |
| :--- | :--- | :--- | :--- |
| **`SpinWaveMoEModel`** (`spinwave-moe`) | INT8 `.b8p` (`B8SW`, **`10.68 KB`**) | **`95.8%`** held-out (`0.0%` INT8 drop), **`7.28 µs/sample`** TS / **`82.6M tok/s`** (`12.1 ns/tok`, **`606.6×`**) C11 AVX2+FMA | [`awesome-os/awesome-os`](https://github.com/awesome-os/awesome-os) |
| **`b8g-micro-moe`** | Composable `.b8p` Micro-MoE | Modular domain expert shards hydrated via `v11` CAS | [`awesome-os/b8g-micro-moe`](https://github.com/awesome-os/b8g-micro-moe) |

### B. Labeling, Classification & Compiler-Repair Models
| Model | Format & Size | Verified Capability | Reference |
| :--- | :--- | :--- | :--- |
| **`lumiBERT`** (`lumibert`) | Compact `.b8p` error-repair model | `2.8 ms` 1:1 compiler/workspace error-to-fix resolution inside `holo-compiler` | [`awesome-os/holo-compiler`](https://github.com/awesome-os/holo-compiler) |
| **`b8g-app-dedup` Path MLP** (`b8g-app-dedup-path-mlp`) | INT8 `.b8p` (`B8GP`, **`42.2 KB`**) | 3-head (`installScope`, `bloatKind`, `action`) + Bloom unknown detector + online `crystallizePath()` | [`awesome-os/b8g-app-dedup`](https://github.com/awesome-os/b8g-app-dedup) |

### C. Sovereign LLMs, Chinchilla-Optimal & Sub-1-Bit Research
| Model / Line | Format | Focus | Status |
| :--- | :--- | :--- | :--- |
| **Xenon-1B / Kalaschnikow + AtlasKV** (`xenon-1b-kalaschnikow-atlaskv`) | `.b8p` / GGUF | Sovereign 1B-class model paired with AtlasKV memory & retrieval | `research-prototype` |
| **Inkling-2 Mini Looped MoE** (`inkling-2-mini-looped-moe`) | Research Spec | Chinchilla-aware looped-depth MoE architecture | `research-spec` |
| **Sub-1-Bit LittleBit / NanoQuant** (`littlebit-nanoquant-sub1bit`) | Sub-1-Bit | Sub-1-bit edge quantization for zero-GPU host inference | `research-spec` |

---

## 2. Manifest & ABI Contract

All models target **`B8G_ABI_MAGIC_V3` (`0x33564742`)** and are content-addressed in the unified **`v11/files/00..ff/<sha512>`** CAS store. See [`models-manifest.json`](./models-manifest.json) and [`index.mts`](./index.mts).
