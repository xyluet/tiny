const tiny = require(`../tiny`);

describe(`tiny`, () => {
  it(`should remove all spaces`, () => {
    const fixtures = [
      `foo`,
      ` foo`,
      ` foo `,
    ];
    fixtures.forEach((fixture) => {
      expect(tiny(fixture)).toEqual(`foo`);
    });
  });

  it(`should throw error if argument is not a string`, () => {
    const fixtures = [
      {},
      () => { },
      123,
      [],
      null,
      undefined,
      class { },
    ];
    fixtures.forEach((fixture) => {
      let called = false;
      try {
        tiny(fixture);
        called = true;
      } catch (error) {
        expect(error.code).toEqual(400);
      } finally {
        expect(called).toBeFalsy();
      }
    });
  });
});
