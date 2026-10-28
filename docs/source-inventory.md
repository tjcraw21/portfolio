# Source snapshot inventory

Five structural files were copied byte-for-byte from `portfolio-v2-factchecked.zip`. Original directory paths are preserved inside `source-snapshot/`. The ZIP remains at the repository root, unchanged.

The public repository and archive contain no `AGENTS.md` or other repository editing instructions.

## Included

| File | Purpose |
| --- | --- |
| `client/src/App.tsx` | App wrapper and routes. |
| `client/src/pages/Home.tsx` | Order of the home-page sections. |
| `client/src/components/Navbar.tsx` | Desktop and mobile navigation. |
| `client/src/components/Footer.tsx` | Footer and section links. |
| `client/src/index.css` | Theme and presentation styles. |

## Export limits

The archive has 17 files: 13 TSX/CSS files and four PNG images. It contains no package manifest, lockfile, HTML entry point, app mounting file or build configuration. Imports also refer to files absent from the archive, including the theme provider, error boundary, not-found page and UI components. A Freedom Mobile image referenced under `/manus-storage/` is absent too.

Other section components, detail-page copy and images remain in the original ZIP. They were not extracted into the browsable snapshot because the narratives include attribution-sensitive claims and named-client material needing review. No private repository files were copied here.

These files support source inspection only. They do not establish that the deployed site matches the archive, or that every career or project claim in the archive is current and verified.

## Preservation check

Original archive SHA-256:

```text
43724af8b56b06ad896fc49c7a952026a892a77a472c6cf0dbf189e7cd45e6ff
```

See [snapshot hashes](snapshot-hashes.json) for the included files. Each extracted file matches its archive entry. This presentation change adds documentation and source copies without changing the original archive or a deployment configuration.
