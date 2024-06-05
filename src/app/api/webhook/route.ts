// import Stripe from 'stripe';
// import { NextResponse, NextRequest } from 'next/server';

// async function registerPayment(
//     email: string,
//     amount: number,
//     payload: string,
//     eventType: string,
//     timeString: string,
//     dateTime: string,
//     receiptEmail: string,
//     receiptUrl: string,
//     paymentMethodDetails: string,
//     billingDetails: string,
//     currency: string
//   ) {
//     // Placeholder implementation for registerPayment function
//     // Replace this with your actual implementation
//     console.log('Payment registered:', {
//       email,
//       amount,
//       payload,
//       eventType,
//       timeString,
//       dateTime,
//       receiptEmail,
//       receiptUrl,
//       paymentMethodDetails,
//       billingDetails,
//       currency,
//     });
  
//     // Assuming you might want to return something here, adjust the return statement accordingly
//     return { status: 'success' };
//   }
  

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2024-04-10',
// });

// export async function POST(req: NextRequest) {
//   const payload = await req.text();
//   const sig = req.headers.get('Stripe-Signature');

//   try {
//     const event = stripe.webhooks.constructEvent(
//       payload,
//       sig!,
//       process.env.STRIPE_WEBHOOK_SECRET!
//     );

//     const res = event.data.object as any;
//     const dateTime = new Date(res.created * 1000).toLocaleDateString();
//     const timeString = new Date(res.created * 1000).toLocaleTimeString();

//     console.log('Event type:', event.type);

//     const response: any = await registerPayment(
//       res.billing_details.email,
//       res.amount,
//       JSON.stringify(res),
//       event.type,
//       timeString,
//       dateTime,
//       res.receipt_email,
//       res.receipt_url,
//       JSON.stringify(res.payment_method_details),
//       JSON.stringify(res.billing_details),
//       res.currency
//     );

//     return NextResponse.json({ status: 'success', event: event.type });
//   } catch (error) {
//     console.error('Error:', error);
//     return NextResponse.json({ status: 'failed', error: error });
//   }
// }
