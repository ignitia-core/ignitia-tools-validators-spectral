const allComponents = [
  "securitySchemes",
  "parameters",
  "requestBodies",
  "responses",
  "headers",
  "schemas",
];

export default (input) => {
  const inputKeysAsString = Object.keys(input).join("");

  const allComponentsInputKeysAsString = Object.values(allComponents).join("");

  const allComponentsWithoutSecuritySchemesInputKeysAsString = Object.values(
    allComponents.filter((f) => f !== allComponents[0])
  ).join("");

  const allComponentsWithoutRequestBodyInputKeysAsString = Object.values(
    allComponents.filter((f) => f !== allComponents[2])
  ).join("");

  const allComponentsWithoutSecuritySchemesAndRequestBodyInputKeysAsString =
    Object.values(
      allComponents.filter(
        (f) => f !== allComponents[0] && f !== allComponents[2]
      )
    ).join("");

  if (inputKeysAsString === allComponentsInputKeysAsString) {
    return;
  }

  if (
    inputKeysAsString === allComponentsWithoutSecuritySchemesInputKeysAsString
  ) {
    return;
  }

  if (inputKeysAsString === allComponentsWithoutRequestBodyInputKeysAsString) {
    return;
  }

  if (
    inputKeysAsString ===
  return [
    {
      message: JSON.stringify([
        `Input: ${inputKeysAsString}`,

        `All: ${allComponentsInputKeysAsString}`,

        `AllWithoutSecuritySchemes: ${allComponentsWithoutSecuritySchemesInputKeysAsString}`,

        `AllWithoutRequestBody: ${allComponentsWithoutRequestBodyInputKeysAsString}`,

        `AllWithoutSecuritySchemesAndRequestBody: ${allComponentsWithoutSecuritySchemesAndRequestBodyInputKeysAsString}`,
      ]),
    },
  ];
};