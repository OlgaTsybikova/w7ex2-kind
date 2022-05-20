const Kind = require("../../models/Kind");
const { getKindsList } = require("./kindsControllers");

describe("Given a getkindsList function", () => {
  describe("When it receives a request", () => {
    test("Then it should response with a method status 200 and a mockKind", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const kindsMock = [
        {
          id: 22,
          kind: "Buena cookie",
        },
      ];

      Kind.find = jest.fn().mockResolvedValue(kindsMock);

      const expectedStatusCode = 200;

      await getKindsList(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.json).toHaveBeenCalledWith(kindsMock);
    });
  });
});
