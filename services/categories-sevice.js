class CategoriesService {
    constructor(db) {
        this.db = db;
    }

    async add(name, iconUrl) {
        return await this._getCollection().create({"name": name, "icon_url": iconUrl});
    }

    async remove(id) {
        return await this._getCollection().remove({"_id": id});
    }

    async get(limit = 30, offset = 0) {
        let categories = await this._getCollection()
            .find()
            .skip(offset)
            .limit(limit)
            .lean()
            .exec();
        return categories;
    }


    _getCollection() {
        return this.db.categories;
    }
}

module.exports = CategoriesService;
