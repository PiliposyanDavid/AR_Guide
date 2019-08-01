class EntitiesService {
    constructor(db) {
        this.db = db;
    }

    async add(name, ownerId, audioUrl, iconUrl, description) {
        return await this._getCollection().create({
            "type": name,
            "description": description,
            "owner_id": ownerId
        });
    }

    async remove(id) {
        return await this._getCollection().remove({"_id": id});
    }

    async get(ownerId, limit = 30, offset = 0) {
        let categories = await this._getCollection()
            .find({owner_id: ownerId})
            .skip(offset)
            .limit(limit)
            .lean()
            .exec();
        return categories;
    }

    _getCollection() {
        return this.db.entities;
    }
}

module.exports = EntitiesService;
