import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.customFields.register({
    name: 'mdeditor',
    plugin: 'mdeditor-strapi',
    type: 'text',
    inputSize: {
      default: 12,
      isResizable: false,
    },
  });
};

export default register;
