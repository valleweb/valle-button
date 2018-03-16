# valle-button

> Awesome valle button

[![Travis CI Status](https://travis-ci.org/valleweb/valle-button.svg?branch=master)](https://travis-ci.org/valleweb/valle-button)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/valleweb/valle-button)

## How to install and use:

1 - Install the element using [Bower](http://bower.io/):

```sh
$ bower install --save valle-button
```

2 -  Import the element:

```html
<link rel="import" href="bower_components/valle-button/valle-button.html">
```

3 - Start using it!

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="valle-button.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<valle-button></valle-button>
```

## Properties

Property      | Type          | Default   | Description
:---          |:---           |:---       |:---
`disabled`    | *Boolean*     | `false`   | Allow disabled state
`toogle`      | *Boolean*     | `false`   | Allow toggle mode
`pressed`     | *Boolean*     | `false`   | Set the pressed state (toggled)

## Styling

The following custom properties and mixins are available for styling:

Custom property        | Default  | Description
:---                   |:---      |:---
--primary-color        | #2196F3  | Background color
--primary-text-color   | #fff     | Text color


## Browser Support

Using the [webcomponents.js](https://github.com/WebComponents/webcomponentsjs):

 ![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/chrome/chrome_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/opera/opera_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/firefox/firefox_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/safari/safari_48x48.png) |![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |  ![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/edge/edge_48x48.png) |
:---: | :---: | :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11+ | Latest ✔

## Development

1 - Install [Bower](http://bower.io/) & [Polymer-CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli):

```sh
$ [sudo] yarn global add bower polymer-cli
```

2 - Install local dependencies:

```sh
$ bower install
```

3 - Start the development server:

```sh
$ polymer serve
```

Go to [localhost:8080/components/valle-button/](http://localhost:8080/components/valle-button/)


## Tests

#### Linting

Linting with eslint:

```sh
$ [sudo] yarn global add eslint
$ [sudo] yarn global add eslint-plugin-html

$ eslint *.html
```

Linting with polylint:

```sh
$ polymer lint
```

#### Unit tests

Install the Web Component Tester (WCT) test runner:

```sh
$ [sudo] yarn global add web-component-tester
```

Run tests:

```sh
$ wct
```

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/valleweb/valle-button/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/valleweb/valle-button/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/valleweb/valle-button/releases) for detailed changelog.

## License

[MIT License](https://github.com/valleweb/valle-button/blob/master/LICENSE.md) © [valleweb](https://github.com/orgs/valleweb/people)
