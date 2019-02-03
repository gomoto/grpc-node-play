import * as grpc from 'grpc';

/**
 * Starts an RPC server
 */
function main() {
  const server = new grpc.Server();
  // server.addService();
  server.bind(`0.0.0.0:54321`, grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
