import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CampDetail from '@/components/Camps/CampDetail'
import router from '@/router';

describe('CampDetail.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(CampDetail, {
      router,
      data() {
        return {
          camp: {
            name: 'camp name',
            description: 'camp description',
          },
        };
      },
    });
    expect(wrapper.find('.header').text()).toEqual('camp name')
  })
})
