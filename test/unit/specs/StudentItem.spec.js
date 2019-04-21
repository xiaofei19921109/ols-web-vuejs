import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import StudentItem from '@/components/Camps/StudentItem'

describe('StudentItem.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(StudentItem, {
      propsData: {
        student: {
          avatar: 'avatar',
          name: 'Lee',
          email: 'test@test.com',
          score: 99,
        },
      },
    });
    expect(wrapper.find('.name').text()).toEqual('Lee')
    expect(wrapper.find('.email').text()).toEqual('test@test.com')
    expect(wrapper.find('.score').text()).toEqual('99')
  })
})
