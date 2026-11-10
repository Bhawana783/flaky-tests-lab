const cart = require('../src/cart');

beforeEach(() => {
  // Reset module-level cart state before every test so no
  // items left by a previous test can contaminate this one.
  while (cart.getCart().length > 0) {
    cart.getCart().pop();
  }
});

test('addItem adds to cart', () => {
  cart.addItem({ id: 1, name: 'Widget' });
  expect(cart.getCart().length).toBe(1);
});

test('cart starts empty', () => {
  expect(cart.getCart().length).toBe(0);
});

test('removeItem removes from cart', () => {
  cart.addItem({ id: 2, name: 'Gadget' });
  cart.removeItem(2);
  expect(cart.getCart().length).toBe(0);
});
