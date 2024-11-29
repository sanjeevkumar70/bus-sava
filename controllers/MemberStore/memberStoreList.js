const MemberModal = require("../../model/memberStore");

const memberStoreList = async (req, res) => {
    try {
        const busData = await MemberModal.find();
        console.log("Bus List: ", busData);
        return res.status(200).json({ count: busData.length, status: 200, data: busData });
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch bus list", status: 500 });
    }
};

module.exports = { memberStoreList };
