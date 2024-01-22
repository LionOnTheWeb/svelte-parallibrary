# Parallibrary

A super-powered boilerplate starter library for SvelteKit. Quickly jumpstart your next SvelteKit atomic library, preconfigured with the following features:

*	[Storybook](https://storybook.js.org)
	*  A frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It’s open source and free.
* 	[Vitest](https://vitest.dev)
	* A unit testing framework for Vite, the underbelly of SvelteKit
*	[Playwright](https://playwright.dev)
	* An integration testing framework that works seemlessly with SvelteKit
*	[Release-Please](https://github.com/googleapis/release-please)
	* Automated CHANGELOG generation, GitHub releases, and version bumps

# Developer First

This library boilerplate was built on a developer-first approach, made by a developer- for developers, allowing you to start building your library with minimal obfuscation in the process. What are you waiting for? Build your next idea with ease, pull TDD-built components with Parallibrary.

Everything you need to build a Svelte library, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

Read more about creating a library [in the docs](https://kit.svelte.dev/docs/packaging).

## VS Code Tasks

If you're developing using [VS Code](https://code.visualstudio.com), you can create a new SvelteKit component directory, files, and subdirectories for Storybook and tests, on the fly!

On UNIX-based systems, in the application menu bar, select `terminal > Run Task`, then select `SvelteKit: New SvelteKit Component` from the Tasks list.

**Note:** Speed up this process even greater by using a keybinding.

#### Create Keybinding (VS Code)

Open VS Code command pallete (`cmd`, `shift`, `P`), type and select "Open Keyboard Shortcuts (JSON)", then add the following:
```json
[
	{ "key": "cmd+ctrl+c", "command": "workbench.action.tasks.runTask", "args": "SvelteKit: New SvelteKit Component" }
]
```

## Developing

Once you've created a project and installed dependencies with `pnpm install` start a storybook server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

This boilerplate is influenced by the [Atomic Design structure by Brad Frost](https://atomicdesign.bradfrost.com/chapter-2/). 

![Atomic Design visual](https://atomicdesign.bradfrost.com/images/content/atomic-design-process.png)
> Atomic design is atoms, molecules, organisms, templates, and pages concurrently working together to create effective interface design systems.

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```bash
pnpm run package
```

To create a production version of your showcase app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [pnpm](https://www.npmjs.com):

```bash
pnpm publish
```
