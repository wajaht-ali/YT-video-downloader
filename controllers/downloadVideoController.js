const ytdl = require('ytdl-core');

export const downloadController = async (req, res) => {
  const { url, quality } = req.body;

  if (!url || !ytdl.validateURL(url)) {
    return res.status(400).json({ error: 'Invalid YouTube URL' });
  }

  try {
    const info = await ytdl.getInfo(url);
    console.log('Video info:', info); // Debugging log

    const format = ytdl.chooseFormat(info.formats, { quality });
    if (!format) {
      return res.status(400).json({ error: 'Requested quality is not available' });
    }
    
    // Return download URL
    return res.json({ downloadUrl: format.url });
  } catch (error) {
    console.error('Error fetching video info:', error); // Log detailed error
    res.status(500).json({ error: 'Unable to fetch the download link' });
  }
};
