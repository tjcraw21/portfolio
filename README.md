# Tristan Crawford's marketing portfolio

A personal portfolio intended to help a hiring team or collaborator understand my marketing work and find relevant project stories. The site organizes experience, selected work, background and contact information, with separate routes for longer project and experience pages.

**Status:** this repository holds a partial source export. The original ZIP is preserved, and selected files are now browsable. This is not a complete runnable app: the export has no package manifest, build configuration or entry point, and some imported components and assets are missing.

## Start here

- [Page structure](source-snapshot/client/src/pages/Home.tsx): how the introduction, experience, selected work and contact sections are ordered.
- [Navigation](source-snapshot/client/src/components/Navbar.tsx): section navigation and the mobile menu.
- [Routes](source-snapshot/client/src/App.tsx): home, experience and project-detail routes.
- [Styles](source-snapshot/client/src/index.css): typography, theme tokens and visual treatment.
- [Source inventory and limitations](docs/source-inventory.md): what was extracted and what is missing.
- [Original export](portfolio-v2-factchecked.zip): retained unchanged for reference.

The source is the inspectable artifact here. The repository's configured Vercel URL returned 404 during this review, so it is not presented as a working demo.

## My contribution and AI support

This is my personal portfolio project, built with AI tools to present my work. My focus is how a reader finds relevant experience and understands a project story. The available files show the resulting page structure and presentation; they do not establish who wrote each line or substantiate the results described in the archived copy. I approach this work as a marketer and digital entrepreneur.

## Tools visible in the export

The source uses React with TypeScript/TSX, Wouter for routing, Lucide React icons and Tailwind CSS imports. The stylesheet also imports `tw-animate-css`. Without a package manifest or lockfile, exact dependency versions and build tooling cannot be verified.

## Viewing and setup

Browse the linked files on GitHub, or download them to read locally. There is no verified install or start command for this export. Running a guessed `npm install` command would not restore its missing files. To run the original site, the complete project, dependency manifest, entry point, configuration and referenced assets are needed.

## Presentation choices worth discussing

The home page provides a short overview, while dedicated routes hold the longer stories. That gives a reader a way to scan first and choose where to spend more time. The navigation also returns readers from a detail route to a section on the home page. These are visible design choices; the repository contains no usability study or conversion data showing their effect.

Only structural files were extracted for browsing. The archive also contains career claims, project narratives and named-client material that need an accuracy and permission review before being featured more prominently. The archive's filename is not evidence that those claims have been verified.

See my [profile](https://github.com/tjcraw21) for other projects.
