import { NextApiRequest, NextApiResponse } from "next";
const AnnouncementModel = require("../../../models/announcement.ts");
import mongoose from "mongoose";

const uri = process.env.MONGO_URI as string;
mongoose.connect(uri);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { SCRIP_CD } = req.query;
  try {
    let data: any;
    if (SCRIP_CD) {
      data = await AnnouncementModel.find({ SCRIP_CD: SCRIP_CD }).exec();
    } else {
      data = await AnnouncementModel.find({});
    }
    res.status(200).json({ doc: data });
  } catch (error) {
    console.error(error);
  }
}
