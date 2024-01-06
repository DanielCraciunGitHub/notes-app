import { NextResponse } from "next/server"
import { db } from "@/db"
import { notes, users } from "@/db/schema"
import { env } from "@/env.mjs"
import { eq, sql } from "drizzle-orm"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

export async function POST() {
  try {
    const notesData = await db
      .select({
        email: users.email,
        body: notes.body,
        reminder: notes.reminder,
      })
      .from(users)
      .leftJoin(notes, eq(users.id, notes.userId))
      .where(sql`TIMESTAMPDIFF(MINUTE, ${notes.reminder}, NOW()) = 0`)

    const date = new Date()
    for (const data of notesData) {
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: env.NODEMAILER_EMAIL,
          pass: env.NODEMAILER_PASSWORD,
        },
      })
      const mailOptions: Mail.Options = {
        from: env.NODEMAILER_EMAIL,
        to: data.email,
        subject: `🔔 Reminder 🔔 @ ${
          date.toLocaleDateString() + " | " + date.toLocaleTimeString()
        }`,
        text: `${data.body}`,
      }

      await transport.sendMail(mailOptions)
    }
    return NextResponse.json(notesData)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
