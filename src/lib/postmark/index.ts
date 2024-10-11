import { ServerClient, Message, Errors } from "postmark";

class EmailService {
  private client: ServerClient;

  constructor() {
    this.client = new ServerClient(process.env.POSTMARK_SERVER_TOKEN!);
  }

  async sendEmail(message: Message): Promise<void> {
    try {
      await this.client.sendEmail(message);
      console.log(`Email sent successfully to ${message.To}`);
    } catch (error) {
      this.handleError(error);
    }
  }

  /**
   * Sends an email with a template using Postmark.
   * @param templateId - Postmark template ID.
   * @param from - Sender email address.
   * @param to - Recipient email address.
   * @param templateModel - Data to fill in the template.
   * @returns - A promise that resolves when the email is successfully sent.
   */
  async sendTemplatedEmail(
    templateId: number,
    from: string,
    to: string,
    templateModel: Record<string, unknown>
  ): Promise<void> {
    try {
      await this.client.sendEmailWithTemplate({
        From: from,
        To: to,
        TemplateId: templateId,
        TemplateModel: templateModel,
      });
      console.log(`Templated email sent successfully to ${to}`);
    } catch (error) {
      this.handleError(error);
    }
  }

  /**
   * Handles errors that occur during the email sending process.
   * @param error - The error object.
   */
  private handleError(error: unknown): void {
    if (error instanceof Errors.PostmarkError) {
      console.error(`Postmark error: ${error.code} - ${error.message}`);
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
}
const emailService = new EmailService();
export default emailService;
