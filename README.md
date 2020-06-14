This repo is a proof-of-concept for porting Idyll to Svelte.

Current Idyll compiles to Markdown + custom syntax to React components and a custom runtime. It also
hacks in reactive variables. Unfortunately, the hacking does not play well with React components,
Idyll files are not composable, and the compiler is very brittle and doesn't give good error
messages.

This port converts Idyll to an EDSL in Svelte + MDsveX. Idyll-Svelte components are composable.
Svelte handles the reactive runtime and MDsveX handles the Markdown syntax. Idyll-Svelte is
effectively a component library with nice CSS templates. But don't be fooled by its simplicity! This
is still a wildly useful product for people (like me) who want to craft explorable explanations and
other types of interactive articles. In fact, it should be much more pleasant to use in Svelte,
since Svelte components should "just work" with Idyll-Svelte.

Port Status (crossed-out directories are handled by Svelte + MDsveX):

TODO: some of these components use `onChange` internally, but don't expose externally? Can this be
removed in the Svelte version because it's an implementation detail? Or does it affect the API?

- [x] ~~ast~~
- [ ] cli
- [x] ~~compiler~~
- [ ] components
  - [x] action
  - [ ] analytics
  - [x] aside
  - [ ] boolean
  - [x] button
  - [ ] case
  - [ ] chart
  - [ ] cite
  - [ ] code-highlight
  - [x] conditional
  - [ ] default
  - [ ] desmos
  - [x] display (TODO: figure out what the extra stuff is for and port over if needed)
  - [ ] dynamic
  - [ ] equation
  - [x] fixed
  - [x] float
  - [ ] generateHeaders
  - [ ] gist
  - [ ] graphic
  - [ ] h1
  - [ ] h2
  - [ ] h3
  - [ ] h4
  - [ ] h5
  - [ ] h6
  - [ ] header
  - [ ] index
  - [ ] inline
  - [ ] link
  - [x] loop (Svelte `each` blocks)
  - [ ] preload
  - [ ] radio
  - [x] range
  - [ ] scroller
  - [x] select
  - [ ] step
  - [ ] stepper-control
  - [ ] stepper
  - [ ] svg
  - [ ] switch
  - [ ] table
  - [ ] text-container
  - [ ] text-input
  - [ ] tweet
  - [ ] youtube
- [ ] docs
- [x] ~~document~~
- [ ] layouts (TODO: Might be able to use both layouts and themes by using frontmatter props info to incorporate
  one into the other.)
  - [ ] blog
  - [ ] centered
  - [ ] none
- [ ] template projects
  - [ ] article
  - [ ] multipage
  - [ ] scrollytelling
  - [ ] slideshow
- [x] themes (Note: Uses MDsveX's layout support. Must rerun `npm run dev` to change layout.)
  - [x] default
  - [x] github
  - [x] idyll
  - [x] none (implicit when passed `layout: false`)
  - [x] tufte



Default Svelte README below:

---

*Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
