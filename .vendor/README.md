# Leonardo

A forward-thinking library of web components.

- Works with all frameworks 🧩
- Works with CDNs 🚛
- Fully customizable with CSS 🎨
- Includes an official dark theme 🌛
- Built with accessibility in mind ♿️
- Open source 😸

Designed in New Hampshire by [Cory LaViska](https://twitter.com/claviska).

---

Documentation: [leonardo.style](https://leonardo.style)

Source: [github.com/leonardo-design-system/leonardo](https://github.com/leonardo-design-system/leonardo)

Twitter: [@leonardo_style](https://twitter.com/leonardo_style)

---

## Shoemakers 🥾

Shoemakers, or "Leonardo developers," can use this documentation to learn how to build Leonardo from source. You will need Node >= 14.17 to build and run the project locally.

**You don't need to do any of this to use Leonardo!** This page is for people who want to contribute to the project, tinker with the source, or create a custom build of Leonardo.

If that's not what you're trying to do, the [documentation website](https://leonardo.style) is where you want to be.

### What are you using to build Leonardo?

Components are built with [LitElement](https://lit-element.polymer-project.org/), a custom elements base class that provides an intuitive API and reactive data binding. The build is a custom script with bundling powered by [esbuild](https://esbuild.github.io/).

### Forking the Repo

Start by [forking the repo](https://github.com/leonardo-design-system/leonardo/fork) on GitHub, then clone it locally and install dependencies.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/leonardo
cd leonardo
npm install
```

### Developing

Once you've cloned the repo, run the following command.

```bash
npm start
```

This will spin up the dev server. After the initial build, a browser will open automatically. There is currently no hot module reloading (HMR), as browser's don't provide a way to reregister custom elements, but most changes to the source will reload the browser automatically.

### Building

To generate a production build, run the following command.

```bash
npm run build
```

### Creating New Components

To scaffold a new component, run the following command, replacing `ld-tag-name` with the desired tag name.

```bash
npm run create ld-tag-name
```

This will generate a source file, a stylesheet, and a docs page for you. When you start the dev server, you'll find the new component in the "Components" section of the sidebar.

### Contributing

Leonardo is an open source project and contributions are encouraged! If you're interesting in contributing, please review the [contribution guidelines](CONTRIBUTING.md) first.

## License

Leonardo is designed in New Hampshire by [Cory LaViska](https://twitter.com/claviska). It’s available under the terms of the MIT license.

Designing, developing, and supporting this library requires a lot of time, effort, and skill. I’d like to keep it open source so everyone can use it, but that doesn’t provide me with any income.

**Therefore, if you’re using my software to make a profit,** I respectfully ask that you help [fund its development](https://github.com/sponsors/claviska) by becoming a sponsor. There are multiple tiers to choose from with benefits at every level, including prioritized support, bug fixes, feature requests, and advertising.

👇 Your support is very much appreciated! 👇

- [Become a sponsor](https://github.com/sponsors/claviska)
- [Star on GitHub](https://github.com/leonardo-design-system/leonardo/stargazers)
- [Follow on Twitter](https://twitter.com/leonardo_style)

Whether you're building Leonardo or building something _with_ Leonardo — have fun creating! 🥾
