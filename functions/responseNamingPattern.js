export default (input) => {
  const responses = input["responses"];
  const operationId = input["operationId"];

  if (
    !responses ||
    (!responses["200"] && !responses["201"] && !responses["204"])
  ) {
    return; // No relevant responses, skip check
  }

  const expectedResponseRef = `#/components/responses/${operationId}Response`;
  const noContentResponseRef = "#/components/responses/NoContentResponse";

  const isRef = (obj) => obj && typeof obj["$ref"] === "string";

  const isExactRef = (obj, ref) =>
    isRef(obj) && obj["$ref"] === ref;

  const isCreatedVariant = (obj) =>
    isRef(obj) && obj["$ref"].startsWith("#/components/responses/Created");

  // Accept exact operation-based response on 200/201/204
  if (
    isExactRef(responses["200"], expectedResponseRef) ||
    isExactRef(responses["201"], expectedResponseRef) ||
    isExactRef(responses["204"], expectedResponseRef)
  ) {
    return;
  }

  // Accept any Created* for 201
  if (responses["201"] && isCreatedVariant(responses["201"])) {
    return;
  }

  // Accept only strict NoContentResponse for 204
  if (responses["204"] && isExactRef(responses["204"], noContentResponseRef)) {
    return;
  }

  return [
    {
      message: `HTTP 200/201/204 response must reference "${operationId}Response", or in the case of 201 optionally a "Created*Response", or for 204 strictly "NoContentResponse".`,
    },
  ];
};