import { formatPrice } from '../src/util/format';

describe('Format', () => {
  it('should be able to format a price', () => {
    const price = 10.0;
    const formated = formatPrice(price);

    expect(formated).toBe(`R$\xa0${price}.00`);
  });
});
