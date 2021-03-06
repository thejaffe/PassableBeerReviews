import { MailData } from "@sendgrid/helpers/classes/mail";
import { Request } from "express";
import { body } from "express-validator";

export class Mail implements MailData {
  public isMultiple?: boolean;
  public substitutionWrappers?: string[];
  public substitutions?: { [key: string]: string };
  public trackingSettings?: import("/Users/zod/Projects/PBR/node_modules/@sendgrid/helpers/classes/mail").TrackingSettings;
  public mailSettings?: import("/Users/zod/Projects/PBR/node_modules/@sendgrid/helpers/classes/mail").MailSettings;
  public asm?: import("/Users/zod/Projects/PBR/node_modules/@sendgrid/helpers/classes/mail").ASMOptions;
  public customArgs?: { [key: string]: any };
  public category?: string;
  public categories?: string[];
  public headers?: { [key: string]: string };
  public sections?: { [key: string]: string };
  public batchId?: string;
  public cc?:
    | string
    | { name?: string; email: string }
    | Array<
        import("/Users/zod/Projects/PBR/node_modules/@sendgrid/helpers/classes/email-address").EmailData
      >;
  public attachments?: Array<
    import("/Users/zod/Projects/PBR/node_modules/@sendgrid/helpers/classes/attachment").AttachmentData
  >;
  public personalizations?: Array<
    import("/Users/zod/Projects/PBR/node_modules/@sendgrid/helpers/classes/personalization").PersonalizationData
  >;
  public templateId?: string;
  public content?: Array<
    import("/Users/zod/Projects/PBR/node_modules/@sendgrid/helpers/classes/mail").MailContent
  >;
  public html?: string;
  public text?: string;
  public subject?: string;
  public sendAt?: number;
  public replyTo?: import("/Users/zod/Projects/PBR/node_modules/@sendgrid/helpers/classes/email-address").EmailData;
  public from: import("/Users/zod/Projects/PBR/node_modules/@sendgrid/helpers/classes/email-address").EmailData;
  public bcc?:
    | string
    | { name?: string; email: string }
    | Array<
        import("/Users/zod/Projects/PBR/node_modules/@sendgrid/helpers/classes/email-address").EmailData
      >;

  public to?:
    | string
    | { name?: string; email: string }
    | Array<
        import("/Users/zod/Projects/PBR/node_modules/@sendgrid/helpers/classes/email-address").EmailData
      >;
  public ipPoolName?: string;

  // Constructor formats form request into MailData
  constructor(req: Request) {
    body("first").trim().escape();
    body("last").trim().escape();
    body("email").trim().escape();
    body("text").trim().escape();

    const firstName = req.body.first;
    const lastName = req.body.last;
    const email = req.body.email;
    const suggestion = req.body.suggestion;

    this.from = "beersuggestions@passablebeers.com";
    this.replyTo = email;
    this.subject = `Beer Suggestion from ${firstName + " " + lastName}`;
    this.text = suggestion;
    this.to = "passablebeers@gmail.com";
  }
}
