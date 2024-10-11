import client, { MailDataRequired, ResponseError } from "@sendgrid/mail";
type SendRequest = MailDataRequired;

class EmailService {
  constructor() {
    client.setApiKey(process.env.SENDGRID_API_KEY!);
  }

  async sendEmail(message: SendRequest): Promise<void> {
    try {
      await client.send(message);
      console.log(`Email sent successfully to ${message}`);
    } catch (error) {
      this.handleError(error);
    }
  }

  async sendMultipleEmails(messages: SendRequest[]) {
    const promises = messages.map((msg) => this.sendEmail(msg));
    return await Promise.all(promises);
  }

  /**
   * Handles errors that occur during the email sending process.
   * @param error - The error object.
   */
  private handleError(error: unknown): void {
    if (error instanceof ResponseError) {
      console.error(`SendGrid error: ${JSON.stringify(error.response.body)}`);
    } else if (error instanceof Error) {
      console.error(`Unknown error: ${JSON.stringify(error.message)}`);
    } else {
      console.error("An unexpected error occurred:", JSON.stringify(error));
    }
  }
}

const emailService = new EmailService();
export default emailService;
