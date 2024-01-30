'use server';

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync('messageService.proto', {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const messagePackage = grpcObject.messagePackage;

const client = new messagePackage.MessageService('localhost:50000', grpc.credentials.createInsecure());

export const sendMessage = async (msg: string): Promise<string> => {
  return new Promise((res, rej) => {
      client.message({ 'message': msg }, (err: any, response: any) => {
        if (err) {
          rej(err);
          return;
        }

        console.log('Message ' + JSON.stringify(response));
        res(response.message);
      });
    },
  );
};
