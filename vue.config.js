module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        asar: false,
      },
    },
  },
  pages: {
    main: {

      entry: 'src/pages/main/index.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Lotus/Main',

    },
  },
};
