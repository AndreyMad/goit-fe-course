import sum from "./sum";


describe("added some numbers", () => {
  it("added two numbers", () => {
    expect(sum(3, 7)).toBe(10);
  });

  it("added number and string", () => {
    expect(sum(5, "10")).toBe(null);
  });

  it("added number and object", () => {
    expect(sum(1, {})).toBe(null);
  });
});

// test("Should sum two numbers", () => {
//   expect(sum(3, 5)).toBe(8);
// });
