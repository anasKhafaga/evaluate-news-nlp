import { handleSubmit } from '../src/client/js/formHandler';

 
describe("Testing the submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
      const event = new MouseEvent('click');
      const expectedValue = 'It works';
      expect(handleSubmit(event, true)).toEqual(expectedValue);
})});