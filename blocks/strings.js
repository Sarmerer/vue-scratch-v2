import { createModule } from '.'
import { BlockInput, BlockField, Connection } from './types'

export default createModule({
  name: 'strings',

  style: {
    background: 'LightSeaGreen',
  },

  blocks: [
    {
      name: 'print',
      connections: [Connection.Prev, Connection.Next],
      inputs: [
        {
          type: BlockInput.Value,
          name: 'text',
          fields: [{ type: BlockField.Label, value: 'print' }],
        },
      ],

      compile: ['console.log(${input.text})'],
    },

    {
      name: 'string',
      connections: [Connection.Output],
      inputs: [
        {
          type: BlockInput.Dummy,
          fields: [
            {
              type: BlockField.Text,
              name: 'value',
              value: '',
            },
          ],
        },
      ],

      compile: ['"${value}"'],
    },
  ],
})