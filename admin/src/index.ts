// import { getTranslation } from "./utils/getTranslation";
import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
// import { PluginIcon } from './components/PluginIcon';
import { IndentIncrease } from '@strapi/icons';

export default {
  register(app: any) {
    app.customFields.register({
      name: 'mdeditor',
      pluginId: PLUGIN_ID,
      type: 'text',
      options: [
        {
          intlLabel: { id: 'mdeditor.options.required', defaultMessage: 'Required' },
          description: {
            id: 'mdeditor.options.required.desc',
            defaultMessage: 'Makes the field required',
          },
          name: 'required',
          type: 'checkbox',
        },
      ],
      intlLabel: {
        id: `${PLUGIN_ID}.field.label`,
        defaultMessage: 'Markdown Editor',
      },
      intlDescription: {
        id: `${PLUGIN_ID}.field.description`,
        defaultMessage: 'A markdown editor with live preview',
      },
      icon: IndentIncrease,
      components: {
        Input: async () =>
          import('./components/MdEditorInput').then((module) => ({
            default: module.MdEditorInput,
          })),
      },
    });

    // app.addMenuLink({
    //   to: `plugins/${PLUGIN_ID}`,
    //   icon: PluginIcon,
    //   intlLabel: {
    //     id: `${PLUGIN_ID}.plugin.name`,
    //     defaultMessage: PLUGIN_ID,
    //   },
    //   Component: async () => {
    //     const { App } = await import("./pages/App");

    //     return App;
    //   },
    // });

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });
  },

  async registerTrads({ locales }: { locales: string[] }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = await import(`./translations/${locale}.json`);

          return { data, locale };
        } catch {
          return { data: {}, locale };
        }
      })
    );
  },
};
