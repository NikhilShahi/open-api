module.exports = {
  constructorArgs: {
    responses: {
      200: {
        description: 'Ok',
        content: {
          'text/markdown': {
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
    definitions: null,
  },

  inputStatusCode: 200,

  inputResponseBody: '# documentation\n',

  inputHeaders: { 'content-type': 'text/markdown' },

  expectedValidationError: void 0,
};
