---
title: Install & Deploy (new)
order: 5
---
## Install locally

To get a local version up and running:

1.  **Install dependencies**: `npm install`.
    
2.  **Create a GitHub OAuth app**: 0n GitHub, go to [your Developer Settings](https://github.com/settings/developers) and [create a New OAuth App](https://github.com/settings/applications/new) (or alternatively create one for one of your organizations). You can use the following settings for your development environment:
    
    *   Application name: `Pages CMS (dev)`
        
    *   Homepage URL: `https://pagescms.org`
        
    *   Authorization callback URL: `http://localhost:8788/auth/callback`
        
3.  **Create a file for environment variables**: copy `.dev.vars.exmple` into `.dev.vars` and replace `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` with the values you got for your GitHub OAuth app. You shouldn't have to modify `BASE_URL`.
    
4.  **Run it**: `npm run dev`. This should [run the app locally with Wrangler](https://developers.cloudflare.com/pages/functions/local-development/) (allowing us to run the serverless functions locally).
    
5.  **Visit** [**localhost:8788**](http://localhost:8788).
    

## Deploy on Cloudflare

1.  **Prerequisite**: you'll need a [Cloudflare](https://cloudflare.com) account (it's free). Once you have one:
    
2.  **Create a** [**Cloudflare Pages**](https://developers.cloudflare.com/pages/) **app**:
    
    1.  From your account dashboard, go to `Workers & Pages`, then click on `Create application` and select the `Pages` tab.
        
    2.  From there you can connect your GitHub account and select the repo you want to deploy (assuming you've [forked pages-cms/pages-cms](https://github.com/pages-cms/pages-cms/fork)).
        
    3.  Cloudflare will give you a public URL (e.g. [https://pages-cms-123.pages.dev](https://pages-cms-123.pages.dev)).
        
3.  **Create a GitHub OAuth app**: same as for local, go to [your Developer Settings](https://github.com/settings/developers) and [create a New OAuth App](https://github.com/settings/applications/new) (or alternatively create one for one of your organizations) with the following settings:
    
    *   **Application name**: `Pages CMS`
        
    *   **Homepage URL**: `https://pagescms.org`
        
    *   **Authorization callback URL**: `https://pages-cms-123.pages.dev/auth/callback` (replace `https://pages-cms-123.pages.dev` with whatever URL Cloudflare generated for you, or the custom domain you set up)
        
4.  **Add the environment variables to Cloudflare**:
    
    1.  Go back to your Cloudflare Pages app, click on the `Settings` tab and select `Environment variables` in the sidebar.
        
    2.  Fill in `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` with the values you got from GitHub.
        
    3.  You will also need to set `BASE_URL` to the URL that was given to you when you create the Cloudflare Pages app (e.g. `https://pages-cms-123.pages.dev`).
        
5.  **Open the app link** (e.g. `https://pages-cms-123.pages.dev`).
    

Cloudflare has very generous free tiers and can also host your actual website. It's a great alternative to GitHub Pages, Netlify or Vercel.