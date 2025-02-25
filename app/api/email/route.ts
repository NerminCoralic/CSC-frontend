import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      campTour,
      age,
      fatherName,
      motherName,
      address,
      description,
      confirmation,
    } = data;

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !campTour ||
      !age ||
      !fatherName ||
      !motherName ||
      !address ||
      !confirmation
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email using Resend
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: `${process.env.NEXT_PUBLIC_EMAIL_CSC}`,
      subject: "Nova Prijava za Ljetni Kamp",
      text: `Nova prijava:\n\n
Ime: ${firstName} ${lastName}
Email: ${email}
Telefon: ${phone}
Kamp Tura: ${campTour}
Uzrast: ${age}
Otac: ${fatherName}
Majka: ${motherName}
Adresa: ${address}
Dodatne Informacije: ${description || "Nema dodatnih informacija"}
`,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Registration submission error:", error);
    return NextResponse.json(
      { error: "Error processing registration" },
      { status: 500 }
    );
  }
}
