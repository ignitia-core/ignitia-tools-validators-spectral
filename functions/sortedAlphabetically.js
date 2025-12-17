export default (input) => {
  const inputKeys = Object.keys(input);

  const sortedSchemaKeys = [...inputKeys]
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  const outOfPlaceKeys = inputKeys.filter(
    (key, index) => key !== sortedSchemaKeys[index]
  );

  if (outOfPlaceKeys.length === 0) {
    return;
  }

  return [
    {
      message: JSON.stringify({
        input: inputKeys.join(","),

        correct: sortedSchemaKeys.join(","),

        outOfPlace: outOfPlaceKeys.join(", "),
      }),
    },
  ];
};