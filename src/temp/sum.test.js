// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('object assignment', () => {
//   const data = { one: 1 };
//   data['two'] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

// test('adding positive numbers is not zero', () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toBe(0);
//     }
//   }
// });

// test('null', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test('zero', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });

// test('two plus two', () => {
//   const value = 2 + 2;
//   expect(value).toBeGreaterThan(3);
//   expect(value).toBeGreaterThanOrEqual(3.5);
//   expect(value).toBeLessThan(5);
//   expect(value).toBeLessThanOrEqual(4.5);

//   // toBe and toEqual are equivalent for numbers
//   expect(value).toBe(4);
//   expect(value).toEqual(4);
// });

// test('adding floating point numbers', () => {
//   const value = 0.1 + 0.2;
//   //expect(value).toBe(0.3);           This won't work because of rounding error
//   expect(value).toBeCloseTo(0.3); // This works.
// });

// test('there is no I in team', () => {
//   expect('team').not.toMatch(/I/);
// });

// test('but there is a "stop" in Christoph', () => {
//   expect('Christoph').toMatch(/stop/);
// });

// const shoppingList = [
//   'diapers',
//   'kleenex',
//   2,
//   'paper towels',
//   'milk',
// ];

// test('the shopping list has milk and 2 on it', () => {
//   expect(shoppingList).toContain('milk');
//   expect(shoppingList).toContain(2);
//   expect(new Set(shoppingList)).toContain('milk');
// });

// function compileAndroidCode() {
//   throw new Error('you are using the wrong JDK');
// }

// test('compiling android goes as expected', () => {
//   expect(() => compileAndroidCode()).toThrow();
//   expect(() => compileAndroidCode()).toThrow(Error);

//   // You can also use the exact error message or a regexp
//   expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
//   expect(() => compileAndroidCode()).toThrow(/JDK/);
// });

// test('the data is peanut butter', done => {
//   function callback(data) {
//     try {
//       expect(data).toBe('peanut butter');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetch(callback('peanut butter'));
// });

// test('the data is peanut butter', () => {
//   return fetchData().then(data => {
//     expect(data).toBe('peanut butter');
//   });
// });


// test('the data is peanut butter', () => {
//   return expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('the fetch fails with an error', () => {
//   return expect(fetchData()).rejects.toMatch('error');
// });

// test('the data is peanut butter', async () => {
//   await expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//   await expect(fetchData()).rejects.toThrow('error');
// });


// beforeEach(() => {
//   return initializeCityDatabase();// using Asynchronous
// });

// afterEach(() => {
//   clearCityDatabase();
// });

// test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy();
// });

// test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy();
// });

// test.only('this will be the only test that runs', () => {
//   expect(true).toBe(true);
// });

// test('this test will not run', () => {
//   expect('A').toBe('A');
// });

// test('mock function', () => {
//   function forEach(items, callback) {
//     for (let index = 0; index < items.length; index++) {
//       callback(items[index]);
//     }
//   }

//   const mockCallback = jest.fn(x => 42 + x);
//   forEach([0, 1], mockCallback);

//   // The mock function is called twice
//   expect(mockCallback.mock.calls.length).toBe(2);

//   // The first argument of the first call to the function was 0
//   expect(mockCallback.mock.calls[0][0]).toBe(0);

//   // The first argument of the second call to the function was 1
//   expect(mockCallback.mock.calls[1][0]).toBe(1);

//   // The return value of the first call to the function was 42
//   expect(mockCallback.mock.results[0].value).toBe(42);
// });
// test('mock function', () => {
//   const myMock = jest.fn();
//   console.log(myMock());
//   // > undefined

//   myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(false);

//   console.log(myMock(), myMock(), myMock(), myMock());
//   // > 10, 'x', true, true
// });


// // users.test.js
// import axios from 'axios';
// import Users from './users';

// jest.mock('axios');

// test('should fetch users', () => {
//   const users = [{name: 'Bob'}];
//   const resp = {data: users};
//   axios.get.mockResolvedValue(resp);

//   // or you could use the following depending on your use case:
//   // axios.get.mockImplementation(() => Promise.resolve(resp))

//   return Users.all().then(data => expect(data).toEqual(users));
// });


// const myMockFn = jest
//   .fn()
//   .mockReturnValue('default')
//   .mockImplementation(scalar => 42 + scalar)
//   .mockName('add42');

import React from 'react';
import renderer from 'react-test-renderer';

import Items from './item';

it('renders correctly when there are no items', () => {

  const tree = renderer.create(<Items />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there are 3 items', () => {
  const items = [
    'Shark',
    'Dolphin',
    'Octopus'
  ];
  const tree = renderer.create(<Items items={items} />).toJSON();
  expect(tree).toMatchSnapshot();
});

