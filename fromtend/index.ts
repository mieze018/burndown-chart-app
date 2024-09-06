const server = Bun.serve({
	port: 3011,
	fetch(req) {
		return new Response("Bun!");
	},
});
