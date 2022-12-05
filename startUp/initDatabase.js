const Framework = require("../models/Framework");
const Quality = require("../models/Quality");

const frameworksMock = require("../mock/frameworks.json");
const qualitiesMock = require("../mock/qualities.json");

module.exports = async () => {
    const frameworks = await Framework.find();
    if (frameworks.length !== frameworksMock.length) {
        await createInitialEntity(Framework, frameworksMock);
    }
    const qualities = await Quality.find();
    if (qualities.length !== qualitiesMock.length) {
        await createInitialEntity(Quality, qualitiesMock);
    }
};

async function createInitialEntity(Model, data) {
    await Model.collection.drop();
    return Promise.all(
        data.map(async (item) => {
            try {
                delete item._id;
                const newItem = new Model(item);
                await newItem.save();
                return newItem;
            } catch (e) {
                return e;
            }
        })
    );
}
