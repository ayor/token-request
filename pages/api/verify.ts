// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Twilio } from "twilio";
import {LoginInfo} from '../../src/interfaces'
const accountSid = process.env.NEXT_APP_TWILIO_ACCOUNT_SID;
const authToken = process.env.NEXT_APP_TWILIO_AUTH;
const client = new Twilio(accountSid, authToken);



type ReturnData = {
  message: string; 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReturnData>
) {
  const code = JSON.parse(req.body) as string;
  const verificationCheck = await client.verify.v2
  .services(process.env.NEXT_APP_TWILIO_SERVICE_SID as string)
  .verificationChecks
  .create({to: '+2348156811122', code})

    
  if (!verificationCheck.valid) {
    return res.status(400).json({
      message: "INVALID OTP",
    })
  }

  res.status(200).json({
    message: "Verified", 
  })
}
