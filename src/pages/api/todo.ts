import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({
      todoList: [
        { id: "0", text: "hello world", done: false },
        { id: "1", text: "hi world", done: false },
        { id: "2", text: "hola world", done: true },
        { id: "3", text: "tomorrow world", done: true },
      ],
    });
  }
}
