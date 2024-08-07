exports.handler = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  try {
    // Process the event
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello from Lambda",
      }),
    };
    console.log("Response:", JSON.stringify(response));
    return response;
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Something went wrong",
        error: error.message,
      }),
    };
  }
};
