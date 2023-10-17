# console-helper

vite plugin console helper

## 📦  Install

```sh
pnpm add vite-plugin-console-helper -D
# or
yarn add vite-plugin-console-helper -D
# or
npm i vite-plugin-console-helper -D
```

##  🔨 Usage

```ts
import { defineConfig } from 'vite'
import ConsoleHelper from 'vite-plugin-console-helper'

const config = defineConfig({
  plugins: [
    // if you use vue, ensure the vuePlugin before the log plugin
    ConsoleHelper({
      splitBy: '\n',
      preTip: '🐖🐖🐖🐖🐖🐖🐖🐖🐖🐖',
      enableFileName: true, // or enableFileName: { enableDir: false}
    }),
  ],
})
```

## Ref

[vite-plugin-enhance-log]https://github.com/baozouai/vite-plugin-enhance-log