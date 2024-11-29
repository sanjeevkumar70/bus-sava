const PurposeModal = require("../../model/purpose");

const purposeList = async (req, res) => {
    try {
        const busData = await PurposeModal.find();
        console.log("Bus List: ", busData);
        return res.status(200).json({ count: busData.length, status: 200, data: busData });
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch bus list", status: 500 });
    }
};

module.exports = { purposeList };
