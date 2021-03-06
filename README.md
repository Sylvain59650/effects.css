# Effects.css 

<div style="display:inline">
    <a target="_blank" title="build" href="https://travis-ci.org/Sylvain59650/effects.css"><img src="https://travis-ci.org/Sylvain59650/effects.css.png?branch=master" /></a>
    <a target="_blank" title="version" href="https://www.npmjs.com/package/effects.css"><img src="https://img.shields.io/npm/v/effects.css.svg" /></a>
    <a target="_blank" title="package" href="https://github.com/Sylvain59650/effects.css"><img src="https://img.shields.io/github/package-json/v/Sylvain59650/effects.css.svg" /></a>
    <a target="_blank" title="dependencies" href="https://david-dm.org/Sylvain59650/effects.css"><img src="https://img.shields.io/david/Sylvain59650/effects.css.svg" /></a>
    <a target="_blank" title="dependencies graph" href="http://npm.anvaka.com/#/view/2d/effects.css"><img src="https://img.shields.io/badge/dependencies-graph-blue.svg" /></a>
    <img src="https://img.shields.io/bundlephobia/min/effects.css.svg" />
    <img src="https://img.shields.io/badge/eslint-ok-blue.svg" />
    <a target="_blank" title="tests" href="https://sylvain59650.github.io/effects.css/"><img src="https://img.shields.io/badge/tests-passing-brightgreen.svg" /></a>
    <a target="_blank" title="downloads" href="https://www.jsdelivr.com/package/npm/effects.css"><img src="https://data.jsdelivr.com/v1/package/npm/effects.css/badge" /></a>
    <a target="_blank" title="cdn" href="https://cdn.jsdelivr.net/npm/effects/distrib/effects.min.js"><img src="https://img.shields.io/badge/cdn-jsdeliv-black.svg" /></a>
    <img src="https://img.shields.io/npm/l/effects.css.svg" />
    <img src="https://hits.dwyl.com/Sylvain59650/effects.css.svg" />
  </div>

`Effects.css` is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

# Demonstration

[Check out all the animations here!](https://Sylvain59650.github.io/effects.css/)

## Installation

Install via npm:

```bash
$ npm install effects.css --save
```

or yarn:

```bash
$ yarn add effects.css
```


## Usage

To use Effects.css in your website, simply drop the stylesheet into your document's `<head>`, and add the class `animated` to an element, along with any of the animation names. That's it! You've got a CSS animated element. Super!

```html
<head>
  <link rel="stylesheet" href="effects.css/dist/effects.min.css" />
</head>
```

or use a CDN hosted version by [JSDeliv](https://www.jsdelivr.com/package/npm/effects.css)

```html
<head>
  <link rel="stylesheet" href="https://www.jsdelivr.com/package/npm/effects.css" />
</head>
```


### Animations

To animate an element, add the class `animated` to an element and one of the following classes to the element :

| Class Name           |                        |                     |                         |
| -------------------- | ---------------------- | ------------------- | ----------------------- |
| `bounce`             | `flash`                | `pulse`             | `rubberBand`            |
| `shake`              | `headShake`            | `swing`             | `tada`                  |
| `wobble`             | `jello`                | `bounceIn`          | `bounceInDown`          |
| `bounceInLeft`       | `bounceInRight`        | `bounceInUp`        | `bounceOut`             |
| `bounceOutDown`      | `bounceOutLeft`        | `bounceOutRight`    | `bounceOutUp`           |
| `fadeIn`             | `fadeInDown`           | `fadeInDownBig`     | `fadeInLeft`            |
| `fadeInLeftBig`      | `fadeInRight`          | `fadeInRightBig`    | `fadeInUp`              |
| `fadeInUpBig`        | `fadeOut`              | `fadeOutDown`       | `fadeOutDownBig`        |
| `fadeOutLeft`        | `fadeOutLeftBig`       | `fadeOutRight`      | `fadeOutRightBig`       |
| `fadeOutUp`          | `fadeOutUpBig`         | `flipInX`           | `flipInY`               |
| `flipOutX`           | `flipOutY`             | `lightSpeedIn`      | `lightSpeedOut`         |
| `rotateIn`           | `rotateInDownLeft`     | `rotateInDownRight` | `rotateInUpLeft`        |
| `rotateInUpRight`    | `rotateOut`            | `rotateOutDownLeft` | `rotateOutDownRight`    |
| `rotateOutUpLeft`    | `rotateOutUpRight`     | `hinge`             | `jackInTheBox`          |
| `rollIn`             | `rollOut`              | `zoomIn`            | `zoomInDown`            |
| `zoomInLeft`         | `zoomInRight`          | `zoomInUp`          | `zoomOut`               |
| `zoomOutDown`        | `zoomOutLeft`          | `zoomOutRight`      | `zoomOutUp`             |
| `slideInDown`        | `slideInLeft`          | `slideInRight`      | `slideInUp`             |
| `slideOutDown`       | `slideOutLeft`         | `slideOutRight`     | `slideOutUp`            |
| `heartBeat`          | `boingInUp`            | `boingOutDown`      | `bombLeftOut`           |
| `bombRightOut`       | `foolishIn`            | `foolishOut`        | `holeOut`               |
| `magic`              | `washOut`              | `openDownLeft`      | `openDownLeftOut`       |
| `openDownLeftReturn` | `openDownRight`        | `openDownRightOut`  | `openDownRightReturn`   |
| `openUpLeft`         | `openUpLeftOut`        | `openUpLeftReturn`  | `openUpRight`           |
| `openUpRightOut`     | `openUpRightReturn`    | `perspectiveDown`   | `perspectiveDownReturn` |
| `perspectiveLeft`    | `perspectiveLeftReturn`| `perspectiveRight`  | `perspectiveRightReturn`|
| `perspectiveUp`      | `perspectiveUpReturn`  | `puffIn`            | `puffOut`               |
| `rotateDown`         | `rotateLeft`           | `rotateRight`       | `rotateUp`              |
| `slideDown`          | `slideDownReturn`      | `slideLeft`         | `slideLeftReturn`       |
| `slideRight`         | `slideRightReturn`     | `slideUp`           | `slideUpReturn`         |
| `spaceInDown`        | `spaceInLeft`          | `spaceInRight`      | `spaceInUp`             |
| `spaceOutDown`       | `spaceOutLeft`         | `spaceOutRight`     | `spaceOutUp`            |
| `swap`               | `swashIn`              | `tinDownIn`         | `tinDownOut`            |
| `tinLeftIn`          | `tinLeftOut`           | `tinRightIn`        | `tinRightOut`           |
| `tinUpIn`            | `tinUpOut`             | `twisterInDown`     | `twisterInUp`           |
| `vanishIn`           | `vanishOut`            |

```html
<h1 class="animated bounce">Example</h1>
```


You can include the class `infinite` for an infinite loop.

```html
<h1 class="animated infinite bounce">Example</h1>
```

It's possible to add delays directly on the element's class attribute by including one of the following classes.

| Class Name | Delay Time |
| ---------- | ---------- |
| `delay-2s` | `2s`       |
| `delay-3s` | `3s`       |
| `delay-4s` | `4s`       |
| `delay-5s` | `5s`       |


```html
<h1 class="animated infinite bounce delay-2s">Example</h1>
```


It's possible to change the duration of your animations, add a delay or change the number of times that it plays:

```css
.yourElement {
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
}
```

> _**Note**: The default delays are from 1 second to 5 seconds only. If you need custom delays, add it directly to your own CSS code._

It's possible to control the speed of the animation by adding these classes, as a sample below:

| Class Name | Speed Time |
| ---------- | ---------- |
| `slow`     | `2s`       |
| `slower`   | `3s`       |
| `fast`     | `800ms`    |
| `faster`   | `500ms`    |

> _**Note**: The `animated` class has a default speed of `1s`. If you need custom duration, add it directly to your own CSS code._

```html
<div class="animated bounce faster">Example</div>
```


## Usage

All effects are in dist/effects.min.css file, you can easily use with 
```html
 <link href="effects.css/dist/effects.min.css" rel="stylesheet" type="text/css" />
```

but if you want only few effects, you can use the file which is called as the effect name.

Example 
```html
<link href="effects.css/dist/effects-core.min.css" rel="stylesheet" type="text/css" />
 <link href="effects.css/dist/bounceIn.min.css" rel="stylesheet" type="text/css" />
```

```html
  <div id="div1">DIV 1</div>
```

```javascript
  <script>
    var div1 = document.querySelector("#div1");
    div1.classList.add("animated");
    div.classList.add("zoomIn");
  </script>
```

## License

Effects.css is based on <a href="https://github.com/daneden/animate.css">Animate.css v3.7.2</a> by Daniel Eden and 96 contributors
and on <a href="https://github.com/miniMAC/magic"> magic v1.4.5</a> by miniMAC and 9 contributors.

<ul>
<li>Effects.css is licensed under the MIT license.</li>
<li>Animate.css v3.7.2 is licensed under the MIT license.</li>
<li>magic is licensed under the MIT license.</li>
</ul>

## Contributing

Pull requests are the way to go here. 
We only have two rules for submitting a pull request: 
<ul>
<li>match the naming convention (camelCase, categorised [fades, bounces, etc])</li>
<li>let us see a demo of submitted animations in a [pen](http://codepen.io). That **last one is important**.</li>
</ul>


