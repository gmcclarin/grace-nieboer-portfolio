// Netlify runs a function with this exact name automatically
// whenever a verified form submission comes in (spam is excluded).
// Docs: https://docs.netlify.com/manage/forms/notifications/
//
// Requires env var RESEND_API_KEY (Netlify UI -> Site configuration ->
// Environment variables). The key never lives in this repo.

const NOTIFY_TO = "grace.nieboer@outlook.com"; // must match the Resend account email until the domain is verified in Resend
// Resend's shared onboarding sender works without domain verification,
// but can ONLY deliver to the email on your Resend account.
// After verifying gracemcclarin.com in Resend, switch to e.g.:
// const FROM = "Portfolio Contact <noreply@gracemcclarin.com>";
const FROM = "Portfolio Contact <onboarding@resend.dev>";

export default async (req) => {
  const { payload } = await req.json();
  const { name, email, business, message } = payload.data;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [NOTIFY_TO],
      reply_to: email, // hitting Reply answers the prospect directly
      subject: `New contact form lead: ${name}${business ? ` (${business})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${business || "—"}`,
        ``,
        `Message:`,
        `${message}`,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("Resend API error:", res.status, body);
    return new Response("Email notification failed", { status: 500 });
  }

  return new Response("Notification sent", { status: 200 });
};
