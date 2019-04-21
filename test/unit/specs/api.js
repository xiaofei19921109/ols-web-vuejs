import api from '@/api';

describe('API', () => {
  it('#createCamp should return a promise', () => {
    expect(api.createCamp).toBe(Promise);
  });

  it('#getCamp should return a promise', () => {
    expect(api.getCamp).toBe(Promise);
  });
});
