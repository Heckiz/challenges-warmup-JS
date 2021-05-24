const { Hashtag, Post } = require('../database/database')

const hashtagCtrl = {};


hashtagCtrl.getAllHashtags = async (req, res) => {
    const hashtags = await Hashtag.findAll();
    res.status(200).json(hashtags);
}

hashtagCtrl.createHashtag = async (hashtagName) => {
    const hashtagExistent = await Hashtag.findOne({ where: { name: hashtagName } });
    if (hashtagExistent) {
        return hashtagExistent;
    } else {
        const hashtag = await Hashtag.create({
            name: hashtagName
        });
        return hashtag
    }
}


hashtagCtrl.getHashtag = async (req, res) => {
    const hashtag = await Hashtag.findOne({
        where: { id: req.params.id }, include: {
            model: Post,
            attributes: ['id', 'title', 'content', 'imageUrl']
        }
    });
    res.status(200).json(hashtag);
}

hashtagCtrl.deleteHashtag = async (req, res) => {
    const hashtag = await Hashtag.findOne({ where: { id: req.params.id } })
    hashtag.destroy()
    res.send('hashtag delete')

}

hashtagCtrl.updateHashtag = async (req, res) => {
    const hashtag = await Hashtag.findOne({ where: { id: req.params.id } });
    const { name } = req.body;
    hashtag.update({
        name
    })
    res.send('hashtag update')

}


module.exports = hashtagCtrl;