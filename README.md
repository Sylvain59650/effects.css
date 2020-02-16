# Effects.css 


`Effects.css` is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.


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
  <link rel="stylesheet" href="animate.min.css">
</head>
```

or use a CDN hosted version by [CDNJS](https://cdnjs.com/libraries/Effects.css)

```html
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Effects.css/3.7.0/animate.min.css">
</head>
```


### Animations

To animate an element, add the class `animated` to an element. You can include the class `infinite` for an infinite loop. Finally you need to add one of the following classes to the element:

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
| `magic`              | `magicCopie`           | `openDownLeft`      | `openDownLeftOut`       |
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
| `vanishIn`           | `vanishOut`            | `washOut`           |

Full example:

```html
<h1 class="animated infinite bounce delay-2s">Example</h1>
```

[Check out all the animations here!](https://Sylvain59650.github.io/effects.css/)

It's possible to change the duration of your animations, add a delay or change the number of times that it plays:

```css
.yourElement {
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
}
```

## Usage with jQuery

You can do a whole bunch of other stuff with Effects.css when you combine it with jQuery. A simple example:

```javascript
$('#yourElement').addClass('animated bounceOutLeft');
```

You can also detect when an animation ends:

<!--
Before you make changes to this file, you should know that $('#yourElement').one() is *NOT A TYPO*

http://api.jquery.com/one/
-->

```javascript
// See https://github.com/daneden/Effects.css/issues/644
var animationEnd = (function(el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

$('#yourElement').one(animationEnd, doSomething);
```




## Setting _Delay_ and _Speed_

### Delay Class

It's possible to add delays directly on the element's class attribute, just like this:

```html
<div class="animated bounce delay-2s">Example</div>
```

| Class Name | Delay Time |
| ---------- | ---------- |
| `delay-2s` | `2s`       |
| `delay-3s` | `3s`       |
| `delay-4s` | `4s`       |
| `delay-5s` | `5s`       |

> _**Note**: The default delays are from 1 second to 5 seconds only. If you need custom delays, add it directly to your own CSS code._

### Slow, Slower, Fast, and Faster Class

It's possible to control the speed of the animation by adding these classes, as a sample below:

```html
<div class="animated bounce faster">Example</div>
```

| Class Name | Speed Time |
| ---------- | ---------- |
| `slow`     | `2s`       |
| `slower`   | `3s`       |
| `fast`     | `800ms`    |
| `faster`   | `500ms`    |

> _**Note**: The `animated` class has a default speed of `1s`. If you need custom duration, add it directly to your own CSS code._

## Custom Builds

Effects.css is powered by [gulp.js](http://gulpjs.com/), which means you can create custom builds pretty easily. First of all, you’ll need Gulp and all other dependencies:

```sh
$ cd path/to/Effects.css/
$ sudo npm install
```

Next, run `gulp` to compile your custom builds. For example, if you want only some of the “attention seekers”, simply edit the `animate-config.json` file to select only the animations you want to use.

```javascript
"attention_seekers": {
  "bounce": true,
  "flash": false,
  "pulse": false,
  "shake": true,
  "headShake": true,
  "swing": true,
  "tada": true,
  "wobble": true,
  "jello":true
}
```

## Accessibility

Effects.css supports the [`prefers-reduced-motion` media query](https://webkit.org/blog/7551/responsive-design-for-motion/) so that users with motion sensitivity can opt out of animations. On supported platforms (currently only OSX Safari and iOS Safari), users can select "reduce motion" on their operating system preferences and it will turn off CSS transitions for them without any further work required.


## Effects
Effects.css is based on <a href="https://github.com/daneden/animate.css">Animate.css v3.7.2</a> by Daniel Eden and 96 contributors
and on <a href="https://github.com/miniMAC/magic"> magic v1.4.5</a>by miniMAC and 9 contributors
## License

Effects.css is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contributing

Pull requests are the way to go here. We only have two rules for submitting a pull request: match the naming convention (camelCase, categorised [fades, bounces, etc]) and let us see a demo of submitted animations in a [pen](http://codepen.io). That **last one is important**.


