import { NextApiRequest, NextApiResponse } from "next";
const AnnouncementModel = require("../../../models/announcement.ts");
import mongoose from "mongoose";

const uri = process.env.MONGO_URI as string;
mongoose.connect(uri);

export default async function critical(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { SCRIP_CD } = req.query;
  try {
    let data: any;
    if (SCRIP_CD != null) {
      data = await AnnouncementModel.find({
        SCRIP_CD: SCRIP_CD,
        CRITICALNEWS: 1,
      }).exec();
    } else {
      data = await AnnouncementModel.find({
        CRITICALNEWS: 1,
      }).exec();
    }

    res.status(200).json({ doc: data });
  } catch (error) {
    console.error(error);
  }
}
