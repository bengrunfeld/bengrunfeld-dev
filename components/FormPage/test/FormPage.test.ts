import { add } from "../FormPage";

describe("Add", () => {
  test("should add correctly", () => {
    const result = add(3, 2);
    expect(result).toEqual(5);
  });
});
