const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDef = protoLoader.loadSync("messageService.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const messagePackage = grpcObject.messagePackage;

const server = new grpc.Server();

server.addService(messagePackage.MessageService.service,
  {
    "message": message,
  });

function message(call, callback) {
  const messagePayload = call.request.message;
  console.log('Received request: ' + messagePayload);

  callback(null, {message: `Hello from server ${messagePayload}`})
}

server.bindAsync("127.0.0.1:50000", grpc.ServerCredentials.createInsecure(), (error, port) => {
  server.start();
  console.log(`listening on port ${port}`);
});
