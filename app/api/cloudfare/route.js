import { NextResponse } from 'next/server'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'


export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const fileName = searchParams.get('fileName')
    const S3 = new S3Client({
        region: 'auto',
        endpoint: `https://${process.env.CLOUDFARE_ACCOUNT_ID}.r2.cloudflarestorage.com/`,
        credentials: {
            accessKeyId: process.env.CLOUDFARE_ACCESS_KEY_ID,
            secretAccessKey: process.env.CLOUDFARE_SECRET_ACCESS_KEY,
        },
    });

    const params = {
        Bucket: 'duobaoba-website',
        Key: fileName
    }
    const command = new GetObjectCommand(params)

    try {
        const data = await S3.send(command)
        return new NextResponse(data.Body, { status: 200 }
        )
    } catch (e) {
        console.log(e)
        return new NextResponse(
            JSON.stringify({error: 'Failed to retreive file'}), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }
}
