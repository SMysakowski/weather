import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://jsonplaceholder.typicode.com/todos/1",
    async (req, res, ctx) => {
      const originalResponse = await ctx.fetch(req);
      const originalResponseData = await originalResponse.json();
      return res(
        ctx.json({
          ...originalResponseData,
          dodam: "cos",
        })
      );
    }
  ),
];
