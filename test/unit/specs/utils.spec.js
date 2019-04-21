import { formatDate } from '@/utils';

describe('formatDate', () => {
  it('should correct', () => {
    expect(formatDate(1555815462640)).toEqual('2019-04-21');
  });
});