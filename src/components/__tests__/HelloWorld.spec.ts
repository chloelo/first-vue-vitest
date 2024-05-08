import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

/**
 * @jest-environment jsdom
 */
describe('HelloWorld', () => { // 描述測試的名稱
  it('renders properly', () => { // 測試核心，it等同於test
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
