const Video = require('../models/videos.model.js')
const Comments = require('../models/comments.model.js')

// Video
async function getVideos(_, res) {
    try {
        const videos = await Video.find()
        res.status(200).json(videos)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function getVideo(req, res) {
    try {
        const { id } = req.params;
        const video = await Video.findById(id);

        if(!video) {
            return res.status(404).json({ message: "Video not found" });
        }
        res.status(200).json(video);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function postVideo(req, res) {
    try {
        const video = await Video.create(req.body)
        await video.save()
        res.status(201).json(video)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function patchVideo(req, res) {
    try {
        const { id } = req.params;
        const updatedVideo = await Video.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedVideo) {
            return res.status(404).json({ message: "Video not found" });
        }

        res.status(200).json({ message: "Video updated successfully" });
    } catch (error) {
        res.status(500).json(error);
    }
}

async function deleteVideo(req, res) {
    try {
        const { id } = req.params;
        const deletedVideo = await Video.findByIdAndDelete(id);

        if (!deletedVideo) {
            return res.status(404).json({ message: "Video not found" });
        }

        res.status(200).json({ message: "Video deleted successfully" });
    } catch (error) {
        res.status(500).json(error);
    }
}

// Products from Video
const getProductsFromVideo = async (req, res) => {
    const { id } = req.params;
    try {
        const video = await Video.findById(id).populate("productId");
    if (!video) {
        return res.status(404).json({ message: "Video not found" });
    }
        return res.status(200).json(video.productId);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Comments
async function getCommentsByVideoId(req, res) {
    try {
        const videoId = req.params.videoId; // Extract the video ID from the URL
        const comments = await Comments.find({ videoId: videoId }); // Filter comments by videoId
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function postComment(req, res) {
    try {
        const { username, comment, videoId, timestamp } = req.body;

        // Cek username dan comment harus diisi
        if (!username || !comment) {
            return res.status(400).json({ message: "Username and Comment are required." });
        }

        // Cek comment harus pada videoId yang ada di comments.model
        const existingComment = await Comments.find({videoId});
        if (!existingComment) {
            return res.status(404).json({ message: "Video not found." });
        }

        // Buat comment baru menggunakan comments.model
        const newComment = new Comments({
            username,
            comment,
            videoId,
            timestamp: timestamp || Date.now()
        });

        // Save ke database
        const savedComment = await newComment.save()
        if (!savedComment) {
            return res.status(500).json({ message: "Failed to send the comment." });
        }
        res.status(201).json({ message: "Comment sent successfully.", comment: savedComment });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getVideos, getVideo, postVideo, patchVideo, deleteVideo,
    getProductsFromVideo, 
    getCommentsByVideoId, postComment
}
