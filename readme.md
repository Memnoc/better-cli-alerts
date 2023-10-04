Cross platform CLI Alerts with colors with Cattpuccin colors and custom messages.
Work on macOS, Linux, and Windows.

</h4>

# better-cli-alerts

## Install

```sh
npm install better-cli-alerts
```

## Usage

```js
const alert = require("cli-alerts");

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
    <p><a href="https://github.com/Memnoc"><img alt="GitHub @Memnoc" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> Follow me on Github</small></p>
    <p><a href="https://matechblog.com/"><img alt="Blog: matechblog.com" align="center" src="https://img.shields.io/badge/MY%20BLOG-gray.svg?colorB=4D2AFF&style=flat" /></a>&nbsp;<small><strong>(read)</strong> Sometimes I write about tech, tutorials and passions. </small></p>
</div>

<br>

## Aknowledgment

<p><a href="https://github.com/ahmadawais"><img alt="GitHub @AhmadAwais" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&style=flat" /></a>&nbsp;<small><strong>Ahmad Awais</strong> This package was developed as part of his Node CLI course</small></p>
