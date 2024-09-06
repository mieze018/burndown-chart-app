const server = Bun.serve({
	port: 3012,
	fetch(req) {
		return new Response("Bun!");
	},
});
