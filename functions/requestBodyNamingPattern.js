export default (input) => {
  if (input["requestBody"] === undefined) {
    return;
  }

  const expectedRequestBodyRef = `#/components/requestBodies/${input["operationId"]}Request`;

  if (input["requestBody"]["$ref"] !== expectedRequestBodyRef) {
    return [
      {
        message: `The requestBody should be named "${input["operationId"]}Request"`,
      },
    ];
  }

  return;
};