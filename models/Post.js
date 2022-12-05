const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        content: { type: String, required: true },
        title: String,
        author: String,
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true }
    },
    {
        timestamps: { createdAt: "created_at" }
    }
);

module.exports = model("Comment", schema);
