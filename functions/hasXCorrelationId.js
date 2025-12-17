export default (input) => {
  if (input === null || input === undefined) {
    return [
      {
        message: "No parameters.",
      },
    ];
  }
  
  if (
    JSON.stringify(input).includes("#/components/parameters/XCorrelationId") ||
    JSON.stringify(input).includes("#/components/parameters/CorrelationId")
  ) {
    return;
  }

  return [
    {
      message: JSON.stringify(input),
    },
  ];
};