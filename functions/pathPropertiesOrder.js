const allProperties = [
  "tags",
  "deprecated",
  "summary",
  "description",
  "operationId",
  "parameters",
  "requestBody",
  "responses",
];

export default (input) => {
  const inputKeys = Object.keys(input).join("");

  const allPropertiesKeys = Object.values(allProperties).join("");

  const allPropertiesWithoutDeprecatedKeys = Object.values(
    allProperties.filter((f) => f !== allProperties[1])
  ).join("");

  const allPropertiesWithoutParametersKeys = Object.values(
    allProperties.filter((f) => f !== allProperties[5])
  ).join("");

  const allPropertiesWithoutRequestBodyKeys = Object.values(
    allProperties.filter((f) => f !== allProperties[6])
  ).join("");

  const allPropertiesWithoutDeprecatedAndParametersKeys = Object.values(
    allProperties.filter(
      (f) => f !== allProperties[1] && f !== allProperties[5]
    )
  )
  .join("");

  const allPropertiesWithoutDeprecatedAndRequestBodyKeys = Object.values(
    allProperties.filter(
      (f) => f !== allProperties[1] && f !== allProperties[6]
    )
  )
  .join("");

  const allPropertiesWithoutParametersAndRequestBodyKeys = Object.values(
    allProperties.filter(
      (f) => f !== allProperties[5] && f !== allProperties[6]
    )
  )
  .join("");

  const allPropertiesWithoutDeprecatedAndParametersAndRequestBodyKeys =
    Object.values(
      allProperties.filter(
        (f) =>
          f !== allProperties[1] &&
          f !== allProperties[5] &&
          f !== allProperties[6]
      )
    )
    .join("");

  if (inputKeys === allPropertiesKeys) {
    return;
  }

  if (inputKeys === allPropertiesWithoutDeprecatedKeys) {
    return;
  }

  if (inputKeys === allPropertiesWithoutParametersKeys) {
    return;
  }

  if (inputKeys === allPropertiesWithoutRequestBodyKeys) {
    return;
  }

  if (inputKeys === allPropertiesWithoutDeprecatedAndParametersKeys) {
    return;
  }

  if (inputKeys === allPropertiesWithoutDeprecatedAndRequestBodyKeys) {
    return;
  }

  if (inputKeys === allPropertiesWithoutParametersAndRequestBodyKeys) {
    return;
  }

  if (
    inputKeys ===
    allPropertiesWithoutDeprecatedAndParametersAndRequestBodyKeys
  ) {
    return;
  }

  return [
    {
      message: JSON.stringify([
        `Input: ${inputKeys}`,
        `allPropertiesKeys: ${allPropertiesKeys}`,
        `allPropertiesWithoutDeprecatedKeys: ${allPropertiesWithoutDeprecatedKeys}`,
        `allPropertiesWithoutParametersKeys: ${allPropertiesWithoutParametersKeys}`,
        `allPropertiesWithoutRequestBodyKeys: ${allPropertiesWithoutRequestBodyKeys}`,
        `allPropertiesWithoutDeprecatedAndParametersKeys: ${allPropertiesWithoutDeprecatedAndParametersKeys}`,
        `allPropertiesWithoutDeprecatedAndRequestBodyKeys: ${allPropertiesWithoutDeprecatedAndRequestBodyKeys}`,
        `allPropertiesWithoutParametersAndRequestBodyKeys: ${allPropertiesWithoutParametersAndRequestBodyKeys}`,
        `allPropertiesWithoutDeprecatedAndParametersAndRequestBodyKeys: ${allPropertiesWithoutDeprecatedAndParametersAndRequestBodyKeys}`,
      ]),
    },
  ];
};