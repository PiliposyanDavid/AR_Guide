const CategoriesService = require('./../services/categories-sevice');
const SubCategoriesService = require('./../services/sub-categories-service');
const ProductsService = require('./../services/products-service');
const EntitiesService = require('./../services/entities-service');

module.exports = function (app) {
    const categoriesService = new CategoriesService(app.db1);
    const subCategoriesService = new SubCategoriesService(app.db1);
    const productsService = new ProductsService(app.db1);
    const entitiesService = new EntitiesService(app.db1);

    //----------------------> CATEGORIES <----------------------
    app.get('/api/categories', (req, res, next) => {
        return categoriesService.get(30, 0).then((categories) => {
            return res.send({
                status: "success",
                categories: categories
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });

    });
    app.post("/api/categories", (req, res, next) => {
        const name = req.body.name;
        const iconUrl = req.body.icon_url;

        return categoriesService.add(name, iconUrl).then(() => {
            return res.send({
                status: "success"
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });
    });
    app.delete("/api/categories/:id", (req, res, next) => {
        const id = req.params.id;
        return categoriesService.remove(id).then(() => {
            return res.send({
                status: "success"
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });
    });

    //----------------------> SUB CATEGORIES <----------------------
    app.get('/api/sub/categories/:id', (req, res, next) => {
        const ownerId = req.params.id;

        return subCategoriesService.get(ownerId, 30, 0).then((categories) => {
            return res.send({
                status: "success",
                categories: categories
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });

    });
    app.post("/api/sub/categories", (req, res, next) => {
        const ownerId = req.body.id;
        const name = req.body.name;
        const iconUrl = req.body.icon_url;
        const audioUrl = req.body.audio_url;


        return subCategoriesService.add(name, ownerId, audioUrl, iconUrl).then(() => {
            return res.send({
                status: "success"
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });
    });


    //----------------------> PRODUCTS <----------------------
    app.get('/api/products/:id', (req, res, next) => {
        const ownerId = req.params.id;

        return productsService.get(ownerId, 30, 0).then((categories) => {
            return res.send({
                status: "success",
                categories: categories
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });

    });
    app.post("/api/products", (req, res, next) => {
        const ownerId = req.body.id;
        const name = req.body.name;
        const iconUrl = req.body.icon_url;
        const audioUrl = req.body.audio_url;
        const description = req.body.description;


        return productsService.add(name, ownerId, audioUrl, iconUrl ,description).then(() => {
            return res.send({
                status: "success"
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });
    });


    //----------------------> ENTITIES <----------------------
    app.get('/api/entities/:id', (req, res, next) => {
        const ownerId = req.params.id;

        return entitiesService.get(ownerId, 30, 0).then((categories) => {
            return res.send({
                status: "success",
                categories: categories
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });

    });
    app.post("/api/entities", (req, res, next) => {
        const ownerId = req.body.id;
        const name = req.body.name;
        const iconUrl = req.body.icon_url;
        const audioUrl = req.body.audio_url;
        const description = req.body.description;


        return entitiesService.add(name, ownerId, audioUrl, iconUrl ,description).then(() => {
            return res.send({
                status: "success"
            });
        }).catch((err) => {
            return res.send({
                status: "error",
                message: err
            })
        });
    });

    app.get('/*', (req, res) => {
        res.send('Bari apiV3');
    });
};

