exports.handler = async (event) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello from Lambda",
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal server error",
      }),
    };
  }
};
