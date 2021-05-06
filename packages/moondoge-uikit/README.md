# 🥞 Pancake UIkit

[![Version](https://img.shields.io/npm/v/moondoge-uikit)](https://www.npmjs.com/package/moondoge-uikit) [![Size](https://img.shields.io/bundlephobia/min/moondoge-uikit)](https://www.npmjs.com/package/moondoge-uikit)

Pancake UIkit is a set of React components and hooks used to build pages on Pancake's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add moondoge-uikit`

## Setup

### Theme

Before using Pancake UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'moondoge-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'moondoge-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://moondogeswap.github.io/moondoge-uikit/)
