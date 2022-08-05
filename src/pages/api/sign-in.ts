import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(400).send({ error: "Bad request" })
  }
  if (req.body.email !== "asd@asd.asd" || req.body.password !== "asdasd") {
    res.status(401).send({ error: "Bad credentials" })
  }
  res.status(200).json({ id: 1, email: "asd@asd.asd", name: "John Wick", role: "admin" })
}
