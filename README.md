# @rootflow/mdeditor-strapi

A Strapi 5 custom field plugin that integrates [@rootflow/mdeditor](https://www.npmjs.com/package/@rootflow/mdeditor) as a text field in the Content-Type Builder.

## Installation

```bash
npm install @rootflow/mdeditor-strapi
# or
pnpm add @rootflow/mdeditor-strapi
```

## Setup

Enable the plugin in `config/plugins.ts`:

```ts
export default {
  'mdeditor-strapi': {
    enabled: true,
  },
};
```

Restart Strapi. The **Markdown Editor** field will appear in the Content-Type Builder under custom fields.

## Usage

Add the field to any content type — it works like a standard text field and stores plain markdown string.

## Requirements

- Strapi 5
- Node.js 18+

## License

MIT
