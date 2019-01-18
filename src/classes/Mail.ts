import { MailData } from "@sendgrid/helpers/classes/mail";
import { Request } from "express";
import sanitize from "sanitize-html";

export class Mail implements MailData {

  public isMultiple?: boolean;
  public substitutionWrappers?: string[];
  public substitutions?: { [key: string]: string; };
  // tslint:disable-next-line:max-line-length
  public trackingSettings?: import("/Users/zod/Projects/PBR2/node_modules/@sendgrid/helpers/classes/mail").TrackingSettings;
  // tslint:disable-next-line:max-line-length
  public mailSettings?: import("/Users/zod/Projects/PBR2/node_modules/@sendgrid/helpers/classes/mail").MailSettings;
  // tslint:disable-next-line:max-line-length
  public asm?: import("/Users/zod/Projects/PBR2/node_modules/@sendgrid/helpers/classes/mail").ASMOptions;
  public customArgs?: { [key: string]: any; };
  public category?: string;
  public categories?: string[];
  public headers?: { [key: string]: string; };
  public sections?: { [key: string]: string; };
  public batchId?: string;
  // tslint:disable-next-line:max-line-length
  public cc?: string | { name?: string; email: string; } | Array<import("/Users/zod/Projects/PBR2/node_modules/@sendgrid/helpers/classes/email-address").EmailData>;
  // tslint:disable-next-line:max-line-length
  public attachments?: Array<import("/Users/zod/Projects/PBR2/node_modules/@sendgrid/helpers/classes/attachment").AttachmentData>;
  // tslint:disable-next-line:max-line-length
  public personalizations?: Array<import("/Users/zod/Projects/PBR2/node_modules/@sendgrid/helpers/classes/personalization").PersonalizationData>;
  public templateId?: string;
  // tslint:disable-next-line:max-line-length
  public content?: Array<import("/Users/zod/Projects/PBR2/node_modules/@sendgrid/helpers/classes/mail").MailContent>;
  public html?: string;
  public text?: string;
  public subject?: string;
  public sendAt?: number;
  // tslint:disable-next-line:max-line-length
  public replyTo?: import("/Users/zod/Projects/PBR2/node_modules/@sendgrid/helpers/classes/email-address").EmailData;
  // tslint:disable-next-line:max-line-length
  public from: import("/Users/zod/Projects/PBR2/node_modules/@sendgrid/helpers/classes/email-address").EmailData;
  // tslint:disable-next-line:max-line-length
  public bcc?: string | { name?: string; email: string; } | Array<import("/Users/zod/Projects/PBR2/node_modules/@sendgrid/helpers/classes/email-address").EmailData>;
  // tslint:disable-next-line:max-line-length
  public to?: string | { name?: string; email: string; } | Array<import("/Users/zod/Projects/PBR2/node_modules/@sendgrid/helpers/classes/email-address").EmailData>;    public ipPoolName?: string;

  // Constructor formats form request into MailData
  constructor(req: Request) {
    const firstName = sanitize(req.body.first);
    const lastName = sanitize(req.body.last);

    this.from = sanitize(req.body.email);
    this.subject = `Beer Suggestion from ${ firstName + " " + lastName }`;
    this.text = sanitize(req.body.suggestion);
    this.to = "passablebeers@gmail.com";
  }
}
