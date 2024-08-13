import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButtonToolbar',
      props: {
        '': {
          ariaLabel: {
            type: 'string',
            default: 'Group',
          },
          justify: {
            type: 'boolean',
            default: false,
          },
          role: {
            type: 'string',
            default: 'toolbar',
          },
        } satisfies Record<keyof BvnComponentProps['BButtonToolbar'], PropertyReference>,
      },
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
      emits: [],
    },
  ],
}
