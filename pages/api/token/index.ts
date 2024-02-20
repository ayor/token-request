// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Twilio } from "twilio";
import { LoginInfo } from '../../../src/interfaces';
const accountSid = process.env.NEXT_APP_SAM_TWILIO_ACCOUNT_SID;
const authToken = process.env.NEXT_APP_SAM_TWILIO_AUTH;
// const client = new Twilio(accountSid, authToken);
const client = require('twilio')(accountSid, authToken)

const SAMS_PHONE = "+16592243346";
const AYOS_PHONE = "+15743199808";


type ReturnData = {
    message: string;
    user?: LoginInfo;
    error?: unknown; 
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ReturnData>
) {
    try {
        const body = JSON.parse(req.body) as LoginInfo;
        console.log(body); 
         client.verify.v2.services("VAc2b4b256d3540b311a5663bbdbe68ad7")
        .verifications
        .create({to: AYOS_PHONE, channel: 'sms'})
        .then((verification: any)=> {
            console.log(verification.sid)
          return res.status(200).json({
                message: "OTP sent",
                user: body
            })
        })
        // .error((error: any)=>{
        //     return res.status(400).json({
        //         message: error,
        //         user: body
        //     })
        // })
        
        //const message = await client.messages.create({
        //     from: SAMS_PHONE,
        //     to: body.phoneNumber,
        //     body: "use this to verify your application",
        // })

        // if (!message.sid) {
        //     return res.status(400).json({
        //         message: message,
        //         user: body
        //     })
        // }

        
    } catch (error) {
        res.status(400).json({
            message: "An error Occured",
            error
        })
    }


}
