import { NextApiRequest, NextApiResponse } from "next";
const AnnouncementModel = require("../../../models/announcement.ts");
import mongoose from "mongoose";

const uri = process.env.MONGOURI as string;
mongoose.connect(uri);

export default async function period(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { SCRIP_CD, SD, ED } = req.query;
  try {
    let data: any;
    if (SCRIP_CD != null) {
      data = await AnnouncementModel.find({
        SCRIP_CD: SCRIP_CD,
        NEWS_DT: {
          $gte: SD,
          $lte: ED,
        },
      }).exec();
    } else {
      data = await AnnouncementModel.find({
        NEWS_DT: {
          $gte: SD,
          $lte: ED,
        },
      }).exec();
    }

    res.status(200).json({ doc: data });
  } catch (error) {
    console.error(error);
  }
}
