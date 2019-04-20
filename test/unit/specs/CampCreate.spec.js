import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CampCreate from '@/components/Camps/CampCreate'

describe('CampCreate.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(CampCreate, {
      data() {
        return {
          form: {
            name: 'hello',
            description: 'world',
          },
        };
      },
    });
    expect(wrapper.contains('form')).toBe(true)
  })
})
