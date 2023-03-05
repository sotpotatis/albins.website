# albins.website

My very own personal website which projects that I have made and tells a little more about me.

> **ℹ️ Note**: As of March 2023, this is the current version of my personal website that is live
> at the domain with the same name as the repository: https://albins.website.

## Developing

1. Clone the repository:
   `git clone https://github.com/sotpotatis/albins.website.git`
2. Install dependencies:
   `npm install`
3. Install pre-commit tools (automatically formats your code before every git commit):
   `npm run prepare`

### Development server

To run a development server:

- `npm run dev`

### Building

To build the website:

- `npm run build`

### Formatting

#### Automatically

If you follow the instructions above to install Husky for pre-commit hooks,
the script below will be automatically ran before every commit.

#### Manually

To automatically format code using [Prettier](https://prettier.io/):

- `npm run format`

### Linting

To lint code:

- `npm run lint`

(see [SvelteKit information](README_SvelteKit.md) for more information)

## Hosting

This website is hosted on [Netlify](https://netlify.app/) and the repository includes an example [netlify.toml](netlify.toml)
as well as uses the Svelte Netlify adapter in [svelte.config.js](svelte.config.js). However, since the website is entirely static,
you can publish it pretty much anywhere. My personal website is hosted at https://albins.website/ and is auto-updated every time updates
are pushed to the master branch.

### Personal website build status:

[![Netlify Status](https://api.netlify.com/api/v1/badges/3e4627b7-5c6d-4752-ba5d-5cafcbcd9cd2/deploy-status)](https://app.netlify.com/sites/albins-website/deploys)