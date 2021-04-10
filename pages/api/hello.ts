import type { NextApiRequest, NextApiResponse } from "next"

const hello = (_request: NextApiRequest, response: NextApiResponse) => {
	response.statusCode = 200
	response.json({ name: "John Doe" })
}

export default hello
