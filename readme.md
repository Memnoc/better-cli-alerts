Cross platform CLI Alerts with colors with [Catpuccin](https://github.com/catppuccin/palette) colors and custom messages.
Work on macOS, Linux, and Windows.

</h4>

# [better-cli-alerts](https://www.npmjs.com/package/better-cli-alerts)

<h4 align="center">
    <a href="https://github.com/memnoc/better-cli-alerts">
<a href="https://www.npmjs.com/package/better-cli-alerts"><img src="https://i.imgur.com/CTlCkOI.png" title="better-cli-alerts" /></a>
    </a>
    <br>
</h4>

## Install

```sh
npm install better-cli-alerts
```

## Usage

```js
const alert = require("better-cli-alerts");
// or if you use modueles
import alert from "better-cli-alerts";

// Success message
alert({
  type: `success`,
  message: ` All is good! `,
  description: `SUCCESS`
});

// Info message
alert({
  type: `info`,
  message: ` Some useful info `,
  description: `INFO`
});

// Warning message
alert({
  type: `warning`,
  message: ` Careful! `,
  description: `WARNING`
});

// Error message
alert({
  type: `error`,
  message: ` Something is wrong! `,
  description: `ERROR`
});

// Using custom messages
alert({
  type: `error`,
  message: ` Something is wrong! `,
  description: `YOUR CUSTOM MESSAGE`
});
```

# API

### alert(options)

#### ❯ options

Type: `object`<br>
Default: `{}`

You can specify the options below.

##### ❯ type

Type: `string`<br>
Default: `error`

##### ❯ msg

Type: `string`<br>
Default: `You forgot to define all options.` (Error message)

##### ❯ description

Type: `string`<br>
Default: `''` (Empty string)

## License & Conduct

- MIT © [Matteo Stara](https://matechblog.com)
- [Code of Conduct](code-of-conduct.md)

## Connect

<div align="left">
    <p><a href="https://github.com/Memnoc"><img alt="GitHub @Memnoc" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=f2d5cf&style=flat&logo=11111b" /></a>&nbsp;<small><strong>(follow)</strong> Follow me on Github</small></p>
    <p><a href="https://matechblog.com/"><img alt="Blog: matechblog.com" align="center" src="https://img.shields.io/badge/MY%20BLOG-gray.svg?colorB=f5a97f&style=flat&logo=11111b" /></a>&nbsp;<small><strong>(read)</strong> Sometimes I write about tech, tutorials and passions. </small></p>
</div>

<br>

## Credits

<p><a href="https://github.com/ahmadawais"><img alt="GitHub @AhmadAwais" align="center" src="https://img.shields.io/badge/GITHUB-black.svg?colorB=8aadf4&style=flat&logo=11111b" /></a>&nbsp;<small><strong>Ahmad Awais</strong> This package was developed as part of Ahmad's Node CLI course that I strongly recommend <3 </small></p>

<p><a href="https://github.com/catppuccin/palette"><img alt="Catpuccin palette" align="center" src="https://img.shields.io/badge/CATPUCCIN-white.svg?colorB=b7bdf8&style=flat&logo=11111b" /></a>&nbsp;<small><strong>Catpuccin</strong> This package was developed as part of his Node CLI course</small></p>
