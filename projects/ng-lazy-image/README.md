<h1 align="center">ng-lazy-image</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/trendster-io/ng-lazy-image#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/trendster-io/ng-lazy-image/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/trendster-io/ng-lazy-image/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> An Angular directive to efficiently lazy load images using the IntersectionObserver API.

### 🏠 [Homepage](https://github.com/trendster-io/ng-lazy-image)

## 📝 Table of Contents

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Setup](#setup)
- [Usage](#usage)
- [Author](#author)
- [Contributing](#contributing)
- [Show your support](#support)
- [License](#license)

## ✅ Prerequisites <a name = "prerequisites"></a>

The library uses [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) API, Check its [Browser Support](https://caniuse.com/#feat=intersectionobserver) and if you need to target unsupported browsers, you can use the official [Polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill). If you don't want to increase the bundle size by using the Polyfill, the library fallsback to delaying the image loading using setTimeout in an attempt to minimize render blocking.

The library is Server-Side Rendering (SSR) compatible and can be used normally with Angular Universal.

The library can used normally with Ionic, however it won't be very useful since Ionic provides its own lazy loaded image component `ion-img`, which you should definitely use instead.

## ⬇️ Install <a name = "install"></a>

Using npm

```sh
npm install --save @trendster-io/ng-lazy-image
```

Using yarn

```sh
yarn add @trendster-io/ng-lazy-image
```

## 🛠 Setup <a name = "setup"></a>

Once installed you need to import our module in the parent module for the component you will be using it in:

```js
import { LazyImageModule } from '@trendster-io/ng-lazy-image';

@NgModule({
  ...
  imports: [LazyImageModule, ...],
  ...
})
export class YourModule {
}
```

## Usage <a name = "usage"></a>

The directive is written to utilize a normal `img` tag so that you don't change your familiar markup for adding an image in HTML. To use it, just add a `lazy` attribute on the `img` element.

### API

### Properties

You can customize the [IntersectionObserverOptions](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver#Properties) using their exact names as properties to the `img`:

- root: `Element`
- rootMargin: `string`
- threshold: `number | number[]`

### Events

Listening to any of the events

- willLoad: `Custom event, called whenever the image is going to start loading`
- load: `The native img load event, called whenever the image has finished loading`
- error: `The native img error event, called whenever the image failed to load`

### Example:

```javascript
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <img src="assets/img/example1.jpg" alt="Example 1 Image" lazy (willLoad)="onImageWillLoad('Example 1)" (load)="onImageLoad('Example 1')" (error)="onImageError('Example 1')" />

    <img [src]="example2Image" lazy (willLoad)="onImageWillLoad('Example 2')" (load)="onImageLoad('Example 2')" (error)="onImageError('Example 2')" />

    <img src="assets/img/example3.jpg" alt="Example 3 Image" lazy [root]="rootElement" rootMargin="20px 10px 20px 10px" [threshold]="0.4" />
  `
})
class ExampleComponent implements OnInit {
  example2Image = 'https://via.placeholder.com/150';
  rootElement: Element;

  constructor(private el: ElementRef<Element>) {}

  ngOnInit(): void {
    this.rootElement = this.el.nativeElement;
  }

  onImageWillLoad(name: string): void {
    console.log(`Image ${name} Will Load`);
  }

  onImageLoad(name: string): void {
    console.log(`Image ${name} Loaded`);
  }

  onImageError(name: string): void {
    console.log(`Image ${name} Failed To Load`);
  }
}
```

## Author <a name = "author"></a>

👤 **Omar Doma**

- Github: [@omardoma](https://github.com/omardoma)

## 🤝 Contributing <a name = "contributing"></a>

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/trendster-io/ng-lazy-image/issues).

## Show your support <a name = "support"></a>

Give a ⭐️ if this project helped you!

## 📝 License <a name = "license"></a>

Copyright © 2019 [Trendster](https://github.com/trendster-io).<br />
This project is [MIT](https://github.com/trendster-io/ng-lazy-image/blob/master/LICENSE) licensed.
