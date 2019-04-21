import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CampCreate from '@/components/Camps/CampCreate'
import router from '@/router';

describe('CampCreate.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(CampCreate, {
      router,
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
