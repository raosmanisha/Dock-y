import { NextResponse } from "next/server";

type TestRidePayload = {
  name: string;
  email: string;
  phone: string;
  preferredModel: string;
  preferredDate: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<TestRidePayload>;
    const { name, email, phone, preferredModel, preferredDate } = body;

    const missingFields = [
      !name && "name",
      !email && "email",
      !phone && "phone",
      !preferredModel && "preferredModel",
      !preferredDate && "preferredDate",
    ].filter(Boolean) as string[];

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Please complete the following fields: ${missingFields.join(", ")}.`,
        },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email || "")) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const bookingReference = `TR-${Date.now().toString().slice(-6)}`;

    return NextResponse.json(
      {
        success: true,
        message: `Your test ride request has been received. Reference: ${bookingReference}`,
        bookingReference,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "We could not process your request right now. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
