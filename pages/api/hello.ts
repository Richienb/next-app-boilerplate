import { VercelRequest, VercelResponse } from "@vercel/node"

const hello = (_request: VercelRequest, response: VercelResponse) => {
	response.statusCode = 200
	response.json({ name: "John Doe" })
}

export default hello
