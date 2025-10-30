import { supabase } from "@/app/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { firstName, lastName, email, password } = await req.json();

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data: userData, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { firstName, lastName },
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({
      success: true,
      message: "User registered successfully! Please verify your email.",
      user: userData.user,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
