import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import MissionTicket from '@/components/Camps/MissionTicket'

describe('MissionTicket.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(MissionTicket, {
      propsData: {
        mission: {
          name: 'name',
          description: 'description',
          createdAt: 1555815078251,
        },
      },
    });
    expect(wrapper.find('.name').text()).toEqual('name')
    expect(wrapper.find('.description').text()).toEqual('description')
    expect(wrapper.find('.date').text()).toEqual('2019-04-21创建')
  })
})
