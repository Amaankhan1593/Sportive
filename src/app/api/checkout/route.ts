import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

function absoluteUrl(req: NextRequest, path: string) {
  const origin =
    req.headers.get("origin") ||
    `${req.headers.get("x-forwarded-proto") || "http"}://${req.headers.get("host")}`;
  return `${origin}${path}`;
}

export async function POST(req: NextRequest) {
  try {
    const { items, currency = "usd" } = await req.json();

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 });
    }

    const line_items = items.map((it: any) => ({
      quantity: Math.max(1, Number(it.quantity || 1)),
      price_data: {
        currency,
        unit_amount: Math.round(Number(it.price) * 100), // 45.00 -> 4500
        product_data: {
          name: String(it.name || "Item"),
          images: it.image ? [String(it.image)] : [],
          metadata: it.id ? { id: String(it.id) } : undefined,
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items,
      success_url: absoluteUrl(req, "/success"),
      cancel_url: absoluteUrl(req, "/cancel"),
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Checkout error" }, { status: 500 });
  }
}
