const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        completedProjects: Number,
        image: String,
        frameworks: { type: Schema.Types.ObjectId, ref: "Framework" },
        qualities: [{ type: Schema.Types.ObjectId, ref: "Quality" }],
        stage: Number
    },
    {
        timestamps: true
    }
);

module.exports = model("User", schema);
