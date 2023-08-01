import mongoose from "mongoose";
const { Schema } = mongoose;

const announcementSchema = new Schema({
  NEWSID: String,
  SCRIP_CD: Number,
  XML_NAME: String,
  NEWSSUB: String,
  DT_TM: String,
  NEWS_DT: Date,
  CRITICALNEWS: Number,
  ANNOUNCEMENT_TYPE: String,
  QUARTER_ID: Number,
  FILESTATUS: String,
  ATTACHMENTNAME: String,
  MORE: String,
  HEADLINE: String,
  CATEGORYNAME: String,
  OLD: Number,
  RN: Number,
  PDFFLAG: Number,
  NSURL: String,
  SLONGNAME: String,
  AGENDA_ID: Number,
  TotalPageCnt: Number,
  News_submission_dt: String,
  DissemDT: String,
  TimeDiff: String,
  Fld_Attachsize: Number,
  SUBCATNAME: String,
  AUDIO_VIDEO_FILE: String,
});

module.exports = mongoose.model("announcements", announcementSchema);
