"use server";
export async function subscribeEmail({ email, id, source, postTitle }) {
  try {
    const res = await fetch(`http://localhost:3000/api/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
      body: JSON.stringify({ email, id, source, postTitle }),
    });
    console.log("Subscription response status:", res.status);

    if (!res.ok) {
      throw new Error("Failed to subscribe email");
    }

    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error subscribing email:", error);
    return { success: false, message: error.message };
  }
}
