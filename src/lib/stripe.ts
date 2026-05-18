import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export const createCheckoutSession = async ({
  bookingId,
  amount,
  email,
  serviceName,
}: {
  bookingId: string;
  amount: number;
  email: string;
  serviceName: string;
}) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: serviceName,
            description: "Reserva de cita - EliteBook",
          },
          unit_amount: Math.round(amount * 100),
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/?canceled=true`,
    customer_email: email,
    metadata: {
      bookingId,
    },
  });

  return session;
};
