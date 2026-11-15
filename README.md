# mvonebers.com

Personal site, built with Jekyll and served by GitHub Pages from `main`. Pushing to `main` deploys it.

## Layout

- `index.html` is the home page.
- `blog/_posts/` holds the posts. Filenames are `YYYY-MM-DD-slug.md`, and each post is served at `/blog/slug/`.
- `blog/index.md` is the post list.
- `_layouts/` contains `default` (header and Perlin background), `post` and `page`.
- `assets/` has the CSS, images, post media (e.g. `assets/payphone-go/`) and the background script.
- `docs/` has PDFs linked from the home page (thesis, resume, papers).

## Writing a post

Create `blog/_posts/YYYY-MM-DD-slug.md`:

```yaml
---
layout: post
title: "Post title"
date: YYYY-MM-DD 12:00:00 -0600
description: "One line for the blog list and link previews."
---
```

Optional front matter:

- `zoom_figures: true` lets readers click images to enlarge them.
- `external_url: https://...` lists the post as a link to an outside project.

## Running locally

Requires Ruby 3+ (`brew install ruby`). The system Ruby on macOS is too old.

```sh
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

## Background

The Perlin-noise background is Rust compiled to WebAssembly. Only the built output is committed: `assets/js/index.js`, `assets/js/1.js` and `assets/js/8841d36db1fb6f813ceb.module.wasm`. The webpack/Cargo files used to build it are local only and gitignored.
