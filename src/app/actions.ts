"use server";

import { revalidatePath } from "next/cache";

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    interest?: string;
    message?: string;
  };
}

/**
 * Server Action to handle the contact form submissions.
 * It integrates with the Google Stitch MCP (Model Context Protocol) pipeline.
 */
export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  // Extract values
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const interest = formData.get("interest")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  // Validate fields
  const errors: Record<string, string> = {};

  if (!name || name.length < 3) {
    errors.name = "Name must be at least 3 characters long.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const validInterests = ["outsourcing", "certification", "training", "other"];
  if (!interest || !validInterests.includes(interest)) {
    errors.interest = "Please select a valid interest option.";
  }

  if (!message || message.length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the validation errors below.",
      errors,
    };
  }

  // 1. Google Stitch MCP Automation Layer Simulation
  // In a production server, we can forward these leads to database triggers,
  // CRM flows, or webhook queues managed via Stitch MCP integrations.
  const payload = {
    event: "lead_registered",
    timestamp: new Date().toISOString(),
    source: "corporate_landing_page",
    data: {
      name,
      email,
      interest,
      message,
    },
  };

  console.log("--------------------------------------------------");
  console.log("Google Stitch MCP - Processing Contact Form Lead");
  console.log("Payload:", JSON.stringify(payload, null, 2));

  const webhookUrl = process.env.STITCH_MCP_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      console.log(`Forwarding payload to Stitch Webhook: ${webhookUrl}`);
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Stitch Webhook trigger status: SUCCESS");
    } catch (error) {
      console.error("Failed to forward payload to Stitch Webhook:", error);
      // We do not fail the form submission for the user if the webhook fails,
      // as the lead has been successfully logged on the server.
    }
  } else {
    console.log("STITCH_MCP_WEBHOOK_URL not configured. Simulation complete.");
  }
  console.log("--------------------------------------------------");

  // Revalidate the home path
  revalidatePath("/");

  return {
    success: true,
    message: "Thank you! Your request has been securely processed by the BIT Consulting team.",
  };
}
