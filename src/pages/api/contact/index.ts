import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  console.log("API key exists:", !!apiKey);
  console.log("API key prefix:", apiKey?.substring(0, 5));

  if (!apiKey) {
    return res.status(500).json({ error: "Missing API key" });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Watch Hill Contact <onboarding@resend.dev>",
        to: "ymarvintan@gmail.com",
        subject: `New Inquiry: ${service} - ${name}`,
        reply_to: email,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }),
    });

    clearTimeout(timeout);

    const data = await response.json();
    console.log("Resend response:", response.status, data);

    if (!response.ok) {
      return res.status(400).json({ error: data });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err: any) {
    console.error("Error:", err.message);
    return res.status(500).json({ error: err.message });
  }
}