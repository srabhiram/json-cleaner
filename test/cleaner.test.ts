import { cleanJSON } from '../src/index';

describe('cleanJSON', () => {
  it('should clean the input JSON based on default options', () => {
    const input = {
      name: "Abhiram",
      age: null,
      email: "",
      skills: [],
      address: {
        city: "",
        pin: undefined,
        country: "India"
      }
    };

    const expected = {
      name: "Abhiram",
      address: {
        country: "India"
      }
    };

    const cleaned = cleanJSON(input, { removeEmptyArray: true }); // Explicitly set removeEmptyArray to true

    expect(cleaned).toEqual(expected);
  });
});