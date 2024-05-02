import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;
    const data = await resend.emails.send({
      from: `${email} <onboarding@resend.dev>`,
      to: ["mohamet.almeari@gmail.com"],
      subject: subject,
      react: (
        <div>
          <h1 style={{ color: "#39b54a" }}>{subject}</h1>
          <p>{message}</p>
          <br />
          <p>- From: {name}</p>
        </div>
      ),
    });

    if (data.error) {
      return Response.json({ error: data.error }, 500);
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, 500);
  }
}
