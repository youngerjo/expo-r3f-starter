# Expo R3F Starter

> [!WARNING]
> According to Apple's deprecation of OpenGL support on iOS devices, this starter no longer works on modern iOS devices. Please refer to [CodyJasonBennett's comment](https://github.com/pmndrs/react-three-fiber/issues/2546) on this issue.

An Expo starter project for [React Three Fiber](https://github.com/pmndrs/react-three-fiber) based on [Cody Bennett's R3F React Native Starter](https://github.com/CodyJasonBennett/r3f-native-starter). Supports both native and web environments.

## Install

```
$ yarn
```

## Run

```
$ yarn start
```

## Features

- Supports web environment through [React Native for Web](https://necolas.github.io/react-native-web/)
- Automatically imports web or native modules from @react-three/fiber and @react-three/drei packages
- File-based routing with [Expo Router](https://github.com/expo/router)
- Uses Metro for bundling instead of Webpack: [Metro bundler web support](https://docs.expo.dev/guides/customizing-metro/#web-support)

## Limits

- Rendering on iOS devices are not supported anymore due to deprecation of OpenGL support from Apple.
- Hence the limits of Three.js's native support, some classes and components are not applicable in the native environment (e.g. OrbitControls). Please find your own solutions.

## License

MIT
