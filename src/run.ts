import { cleanJSON } from ".";

// Test cases for cleanJSON
const testCases = [
    {
      input: { a: null, b: undefined, c: '', d: [], e: {}, f: 'value' },
      options: { removeNull: true, removeUndefined: true, removeEmptyString: true, removeEmptyArray: true, removeEmptyObject: true },
      expected: { f: 'value' },
    },
    {
      input: [null, undefined, '', [], {}, 'value'],
      options: { removeNull: true, removeUndefined: true, removeEmptyString: true, removeEmptyArray: true, removeEmptyObject: true },
      expected: ['value'],
    },
    {
      input: { a: { b: null, c: '' }, d: [null, '', { e: undefined }] },
      options: { removeNull: true, removeEmptyString: true },
      expected: { a: { b: null }, d: [null, { e: undefined }] },
    },
    {
      input: { a: [1, 2, []], b: { c: {} } },
      options: { removeEmptyArray: true, removeEmptyObject: true },
      expected: { a: [1, 2], b: {} },
    },
    {
      input: { a: null, b: undefined, c: '', d: [], e: {}, f: 'value' },
      options: {},
      expected: { a: null, b: undefined, c: '', d: [], e: {}, f: 'value' }, // Default options
    },
  ];
  
  // Run tests
  testCases.forEach(({ input, options, expected }, index) => {
    const result = cleanJSON(input, options);
    console.log(`Test Case ${index + 1}:`, JSON.stringify(result) === JSON.stringify(expected) ? 'Passed' : 'Failed');
  });