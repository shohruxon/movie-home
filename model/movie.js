const { Schema, model } = require('mongoose')

module.exports = model('movie', new Schema({
    title: {
        type: String,
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'category'
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    imdb: {
        type: Number,
        required: function () {
            if (this.isPublished) {
                return true
            } else {
                return false
            }
        }
    },
    isPublished: {
        type: Boolean,
        default: false
    }
}))

