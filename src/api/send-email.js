import { Resend } from "resend";

const resend = new Resend(`re_jJo7iDpq_FsDFza5HvRnigoPZWifxc9zZ`);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { senderEmail, message } = req.body;

  if (!senderEmail || !message) {
    return res.status(400).json({ error: "Missing senderEmail or message" });
  }

  try {
    const response = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "juanmanuel.jmg200@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      text: message,
    });

    return res.status(200).json({ success: true, response });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
