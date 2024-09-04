const ytdl = require('ytdl-core');
const axios = require('axios');

exports.downloadVideo = async (req, res) => {
  const { url, quality } = req.body;

  if (!url || !ytdl.validateURL(url)) {
    return res.status(400).json({ error: 'Invalid YouTube URL' });
  }

  try {
    // Get video information and format
    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, { quality });

    // Respond with the download URL
    res.json({ downloadUrl: format.url });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process the video' });
  }
};
