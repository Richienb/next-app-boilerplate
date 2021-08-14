import type { NextApiRequest, NextApiResponse } from "next"

export default function hello(_request: NextApiRequest, response: NextApiResponse) {
	response.statusCode = 200
	response.json({ name: "John Doe" })
}
