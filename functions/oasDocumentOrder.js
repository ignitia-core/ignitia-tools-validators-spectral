// Allowed key orders. We accept an optional `servers` key directly after `info`.
const allowedOrders = [
  ["openapi", "info", "servers", "security", "tags", "paths", "components"],
  ["openapi", "info", "security", "tags", "paths", "components"],
  ["openapi", "info", "servers", "tags", "paths", "components"],
  ["openapi", "info", "tags", "paths", "components"],
];

export default (input) => {
  const inputKeyString = Object.keys(input).join("");

  const isAllowed = allowedOrders.some((arr) => arr.join("") === inputKeyString);

  if (isAllowed) {
    return;
  }

  return [{ message: "ERROR" }];
};