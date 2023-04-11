export async function postData(data = {}) {
  // Default options are marked with *
  const response = await fetch(
    " https://dummyjson.com/products?" + new URLSearchParams(data),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      // body: JSON.stringify(data),
    }
  );
  return response.json();
}
