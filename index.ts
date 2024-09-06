const server = Bun.serve({
	port: 3007,
	fetch(req) {
		return new Response("Bun!");
	},
});

console.log(`Listening on http://localhost:${server.port} ...`);
console.log('Bun version:', Bun.version);
