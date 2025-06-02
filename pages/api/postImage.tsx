const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
  region: "eu-north-1",
});

import { NextApiRequest, NextApiResponse } from 'next';

// TODO - add trycatch at least
export default async function handler(req: NextApiRequest | any, res: NextApiResponse | any) {
  const { image, id, index } = req.body || {};

  if (req.method === "POST") {
    if (!(image && id && index !== undefined)) {
      res.status(400).json({ message: "missing parameters" });
    } else {
      try {
        let imageType: any;
        const imageString: string = image.replace(
          /^data:image\/\w+;base64,/,
          (substr: string) => {
            imageType = substr.split("/")[1].split(";")[0];
            return "";
          }
        );
        const base64Image = Buffer.from(imageString, "base64");
        const params: any = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: `${id}/${index}.${imageType}`,
          Body: base64Image,
          ContentEncoding: "base64",
          ContentType: `image/${imageType}`,
        };

        const response: any = await s3.upload(params).promise();

        res.status(201).json({ message: response });
      } catch (error: any) {
        res.status(500).json({ message: "Error processing the image", error });
      }
    }
  } else {
    res.status(405).json({ message: "method not allowed" });
  }
}
