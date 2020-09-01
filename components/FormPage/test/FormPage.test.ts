import { add } from "../FormPage";

describe("Add", () => {
  test("should add correctly", () => {
    const result = add(2, 2);
    expect(result).toEqual(4);
  });
});
