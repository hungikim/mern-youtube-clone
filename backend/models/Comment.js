import mongoose from 'mongoose'

const CommentSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    videoId: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('Comment', CommentSchema)