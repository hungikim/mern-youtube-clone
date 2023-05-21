import Video from '../models/Video.js'

export const getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find()
        res.status(200).json(videos)
    } catch (err) {res.status(502).json({err: err.message})}
}

export const getVideo = async (req, res) => {
    try {
        const video = await Video.findById(req.params.videoId)
        res.status(200).json(video)
    } catch (err) {res.status(502).json({err: err.message})}
}

export const postVideo = async (req, res) => {
    try {
        const { userId, channelName, title, videoUrl, desc } = req.body
        const newVideo = new Video({ userId, author: channelName, title, videoUrl, desc })
        const savedVideo = await newVideo.save()

        res.status(202).json({})
    } catch (err) {res.status(501).json({err: err.message})}
}

export const getUserVideos = () => {
    
}