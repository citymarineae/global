import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from "next/server";
import dbConnect from 'lib/dbConnect';
import { Email } from 'app/models/Email';


const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const name = formData.get("name") as string;
        const phone = formData.get("phone") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        const { data, error } = await resend.emails.send({
            from: `City Marine <enquiry@citymarinebrokers.com>`,
            to: ['info@citymarinebrokers.com'],
            subject: 'Enquiry from website [citymarinebrokers.com]',
            react: EmailTemplate({ name, phone, email, message }),
            replyTo: email,
        });

        if (error) {
            console.log(error)
            return NextResponse.json(error, { status: 400 });
        }
        else {

            await dbConnect()
            const newEmail = await Email.create({
                senderName:name,
                phone,
                email,
                message
            })

            if(newEmail){
                console.log("email send")
                return NextResponse.json(data, { status: 200 });
            }else{
                return NextResponse.json("Email not send", { status: 400 });
            }
            
        }
    } catch (error) {
        console.log("Error sending email:", error)
        return NextResponse.json(error, { status: 400 });
    }

};