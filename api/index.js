const Express = require("express");
const app = Express();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API for Shopping 4U',
            version: '1.0.0',
            description:
                'This is a REST API application made with Express.',
            license: {
                name: 'Licensed Under MIT',
                url: 'https://spdx.org/licenses/MIT.html',
            },
            contact: {
                name: 'Group44',
                url: 'http://localhost:49146/',
            },
        },
        servers: [
            {
                url: 'http://localhost:49146/',
                description: 'Development server',
            },
        ],
    },
    apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

var fs = require('fs');

var cors = require('cors')
app.use(cors())

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(49146, () => {
    console.log("APIs Running");
});


/**
 * @swagger
 * /api/ingaggi:
 *   get:
 *     summary: Retrieve a list of requests.
 *     description: Retrieve a list of requests from the Server.
 *     responses:
 *       200:
 *         description: A list of requests.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ingaggio:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       NomePersonalShopper:
 *                         type: string
 *                         description: The personal shopper Name.
 *                         example: Monica Zamberlan
 *                       Macrocategoria Prodotto:
 *                         type: string
 *                         description: The category of the product.
 *                         example: Idee regalo
 *                       Indirizzo di consegna:
 *                          type: string
 *                          description: The address of the client
 *                          example: Via S.Giovanni 3, San Bonifacio (VR)
 */
app.get('/api/ingaggi', (request, response) => {
    var data = fs.readFileSync('ingaggi.json');
    var myObject = JSON.parse(data);

    response.send(myObject);

})

/**
 * @swagger
 * /api/ingaggi:
 *   post:
 *     summary: Create a request.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NomePersonalShopper:
 *                  type: string
 *                  description: The personal shopper Name.
 *                  example: Monica Zamberlan
 *               Macrocategoria prodotto:
 *                  type: string
 *                  description: The category of the product.
 *                  example: Idee regalo
 *               Indirizzo di consegna:
 *                  type: string
 *                  description: The address of the client
 *                  example: Via S.Giovanni 3, San Bonifacio (VR)
 *     responses:
 *       201:
 *         description: successful executed
*/
app.post('/api/ingaggi', (request, response) => {

    var data = fs.readFileSync('ingaggi.json');
    var myObject = JSON.parse(data);

    let nuovoIngaggio = {
        "NomePersonalShopper": request.body['NomePersonalShopper'],
        "Macrocategoria prodotto": request.body['Macrocategoria prodotto'],
        "Indirizzo di consegna": request.body['Indirizzo di consegna']
    };

    myObject.ingaggi.push(nuovoIngaggio);

    var newData = JSON.stringify(myObject);
    fs.writeFile('ingaggi.json', newData, err => {
        if (err) throw err;
    });

    response.json("Ingaggio Inserito Correttamente: (" + myObject.ingaggi.length + ")");
})

/**
 * @swagger
 * /api/macrocategorie:
 *   get:
 *     summary: Retrieve a list of product category.
 *     description: Retrieve a list of product category from the Server.
 *     responses:
 *       200:
 *         description: A list of product category.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 macrocategoria:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       Abbigliamento: 
 *                         type: string
 *                         description: Product category.
 *                         example: abiti, top, bottom, scarpe
 */
app.get('/api/macrocategorie', (request, response) => {
    var data = fs.readFileSync('macrocategorie.json');
    var myObject = JSON.parse(data);

    response.send(myObject);

})

/**
 * @swagger
 * /api/recensione:
 *   get:
 *     summary: Retrieve a list of reviews.
 *     description: Retrieve a list of reviews from the Server.
 *     responses:
 *       200:
 *         description: A list of reviews.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 review:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       Recensione: 
 *                         type: string
 *                         description: Opinion about the work of the personal shopper
 *                         example: Il personal shopper ha fatto una lavoro eccelente. I prodotti acquistati sono perfettamente adatti ai miei gusti personali
 */
 app.get('/api/recensione', (request, response) => {
    var data = fs.readFileSync('recensione.json');
    var myObject = JSON.parse(data);

    response.send(myObject);

})

/**
 * @swagger
 * /api/recensione:
 *   post:
 *     summary: Create a review.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Recensione: 
 *                 type: string
 *                 description: Opinion about the work of the personal shopper
 *                 example: Il personal shopper ha fatto una lavoro eccelente. I prodotti acquistati sono perfettamente adatti ai miei gusti personali
 *               
 *     responses:
 *       201:
 *         description: successful executed
*/
app.post('/api/recensione', (request, response) => {

    var data = fs.readFileSync('recensione.json');
    var myObject = JSON.parse(data);

    let nuovaRecensione = {
        "Recensione": request.body['Recensione']
    };

    myObject.recensione.push(nuovaRecensione);

    var newData = JSON.stringify(myObject);
    fs.writeFile('recensione.json', newData, err => {
        if (err) throw err;
    });

    response.json("Recensione Inserita Correttamente: (" + myObject.recensione.length + ")");
})

/**
 * @swagger
 * /api/form:
 *   get:
 *     summary: Retrieve a list of requests with details.
 *     description: Retrieve a list of requests with details from the Server.
 *     responses:
 *       200:
 *         description: A list of requests with details.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ingaggio:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       NomePersonalShopper:
 *                         type: string
 *                         description: The personal shopper Name.
 *                         example: Monica Zamberlan
 *                       Macrocategoria Prodotto:
 *                         type: string
 *                         description: The category of the product.
 *                         example: Idee regalo
 *                       Indirizzo di consegna:
 *                          type: string
 *                          description: The address of the client
 *                          example: Via S.Giovanni 3, San Bonifacio (VR)
 *                       Informazioni:
 *                          type: string
 *                          description: More informaion about the product wanted
 *                          example: Vorrei un regalo per il mio ragazzo. In particolare per il suo compleanno (18).
 *                          
 */
 app.get('/api/form', (request, response) => {
    var data = fs.readFileSync('form.json');
    var myObject = JSON.parse(data);

    response.send(myObject);

})

/**
 * @swagger
 * /api/form:
 *   post:
 *     summary: Create a form related to the request.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NomePersonalShopper:
 *                  type: string
 *                  description: The personal shopper Name.
 *                  example: Monica Zamberlan
 *               Macrocategoria prodotto:
 *                  type: string
 *                  description: The category of the product.
 *                  example: Idee regalo
 *               Indirizzo di consegna:
 *                  type: string
 *                  description: The address of the client
 *                  example: Via S.Giovanni 3, San Bonifacio (VR)
 *               Informazioni:
 *                  type: string
 *                  description: More informaion about the product wanted
 *                  example: Vorrei un regalo per il mio ragazzo. In particolare per il suo compleanno (18).
 *     responses:
 *       201:
 *         description: successful executed
*/
app.post('/api/form', (request, response) => {

    var data = fs.readFileSync('form.json');
    var myObject = JSON.parse(data);

    let nuovoForm = {
        "NomePersonalShopper": request.body['NomePersonalShopper'],
        "Macrocategoria prodotto": request.body['Macrocategoria prodotto'],
        "Indirizzo di consegna": request.body['Indirizzo di consegna'],
        "Informazioni": request.body['Informazioni']

    };

    myObject.form.push(nuovoForm);

    var newData = JSON.stringify(myObject);
    fs.writeFile('form.json', newData, err => {
        if (err) throw err;
    });

    response.json("Form Inserito Correttamente: (" + myObject.form.length + ")");
})
