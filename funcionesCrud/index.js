var MongoClient = require('mongodb').MongoClient;
var moment = require('moment');


var url = "mongodb://dana:root@74.208.16.217:28018"

// router.use(cors())
// Funcion que Insera el nuevo dato de TIEMPO_REAL
export function InsertUpdate(body, collection) {
    console.log("Insertando documento NUEVO");
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("dana");
        dbo.collection(collection).insertOne(body, function (err, res) {
            if (err) throw err;
            console.log("---------------DOCUMUENTO INSERTADO---------------");
            db.close();
            // RESPUESTA AL SERVIDOR ESP32
            return true
        });
    });
}

export function UpdateReg(body, collection) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("dana");
        var myquery = { can: body.can, pin: body.pin };
        var newvalues = { $set: body };
        dbo.collection(collection).updateOne(myquery, newvalues, function (err, res_db) {
            if (err) throw err;
            // console.log(res_db);
            db.close();
            if (res_db.modifiedCount == 0 && res_db.upsertedCount == 0 && res_db.matchedCount == 0) {
                console.log("!undefined!    !undefined!    !undefined!    !undefined!    !undefined!")
                let result = InsertUpdate(body, collection)
                return true
            } else {
                console.log("---------------DOCUMUENTO ACTUALIZADO---------------");
                return true
            }
            // RESPUESTA AL SERVIDOR ESP32

        });
    });
}

//
export async function FindReg(can, pin, collection) {
    let query = { "can": can, "pin": pin }
    if (can == 0) {
        query = ""
    }
    const db = await MongoClient.connect(url);
    const dbo = db.db("dana");
    const MyCollection = dbo.collection(collection);
    const result = await MyCollection.find(query).toArray();
    db.close();

    if (result[0] == undefined) {
        // console.log("!!!!!!! DATO NO ENCONTRADO !!!!!!!")

    } else {
        // console.log("!!!!!!! DATO ENCONTRADO !!!!!!!")
    }
    return result
}

//
export function horaActual() {
    let hoy = moment().utcOffset("-6:00");
    let dia = hoy.date().toString();
    let mes = (hoy.month() + 1).toString();
    let ano = hoy.year().toString();
    let hora = hoy.hours().toString();
    let minuto = hoy.minutes().toString();
    let segundo = hoy.seconds().toString();
    if (mes.length == 1) {
        mes = "0" + mes
    }
    if (dia.length == 1) {
        dia = "0" + dia
    }
    if (minuto.length == 1) {
        minuto = "0" + minuto
    }
    if (hora.length == 1) {
        hora = "0" + hora
    }
    if (segundo.length == 1) {
        segundo = "0" + segundo
    }
    let horaAct = ano + "-" + mes + "-" + dia + " " + hora + ":" + minuto + ":" + segundo
    return horaAct
}

export async function FindDispZona(zona, collection) {
    let query = { "zona": { $in: [zona] } }
    const db = await MongoClient.connect(url);
    const dbo = db.db("dana");
    const MyCollection = dbo.collection(collection);
    const result = await MyCollection.find(query).toArray();
    db.close();
    return result
}


export async function DropData(body, query, proyect , collection) {
    if (body == "" || query == "" || proyect == "" || collection == "") {
        return false
    } else {
        // let query = { "can": body.can, "pin": body.pin }
        const db = await MongoClient.connect(url);
        const dbo = db.db( proyect );
        const MyCollection = dbo.collection(collection);
        const result = await MyCollection.deleteOne(query);
        db.close();
        return result
    }
}

export async function UpgrateZone(body, query, proyect, collection) {
    // console.log(body);
    if (body == "" || query == "" || proyect == "" || collection == "") {
        return false
    } else {
        // let query = { "zona": body.zona }
        let newvalues = { $set: body };
        const db = await MongoClient.connect(url);
        const dbo = db.db(proyect);
        const MyCollection = dbo.collection(collection);
        let result = await MyCollection.updateOne(query, newvalues);
        if (result.modifiedCount == 0 && result.upsertedCount == 0 && result.matchedCount == 0 ) {        
            result = await MyCollection.insertOne(body);
        } else {
            //   
        }
        db.close();
        return result
    }
}

export async function FindZona(body, query, proyect, collection) {
    if (  proyect == "" || collection == "") {
        return false
    } else {
        let query = { "zona": body.zona }
        let newvalues = { $set: body };
        const db = await MongoClient.connect(url);
        const dbo = db.db(proyect);
        const MyCollection = dbo.collection(collection);
        let result = await MyCollection.find().toArray();        
        db.close();
        return result
    }
} 



///////////////////////////////////////////////////////////////////////

// FIND 
export async function FindData( query, proyect, collection) {
    
    if (  proyect == "" || collection == "") {
        return false
    } else {
        const db = await MongoClient.connect(url);
        const dbo = db.db(proyect);
        const MyCollection = dbo.collection(collection);
        // console.log(query, proyect, collection);
        let result = await MyCollection.find(query).toArray();        
        db.close();
        return result
    }
}
// INSERT
export async function InsertData(body, proyect, collection) {
    if (  proyect == "" || collection == "") {
        return false
    } else {
        let newvalues = { $set: body };
        const db = await MongoClient.connect(url);
        const dbo = db.db(proyect);
        const MyCollection = dbo.collection(collection);
        let result = await MyCollection.insertOne(body);        
        db.close();
        return result
    }
}

// UPDATE
export async function UpgrateData(body, query, proyect, collection) {
    if (body == "" || query == "" || proyect == "" || collection == "") {
        return false
    } else {
        // let query = { "zona": body.zona }
        let newvalues = { $set: body };
        const db = await MongoClient.connect(url);
        const dbo = db.db(proyect);
        const MyCollection = dbo.collection(collection);
        let result = await MyCollection.updateOne(query, newvalues);
        if (result.modifiedCount == 0 && result.upsertedCount == 0 && result.matchedCount == 0 ) {        
            result = await MyCollection.insertOne(body);
        } else {
            //   
        }
        db.close();
        return result
    }
}

// DELETE
export async function DeleteData(query, proyect , collection) {
    if ( query == "" || proyect == "" || collection == "") {
        return false
    } else {
        // let query = { "can": body.can, "pin": body.pin }
        const db = await MongoClient.connect(url);
        const dbo = db.db( proyect );
        const MyCollection = dbo.collection(collection);
        const result = await MyCollection.deleteOne(query);
        db.close();
        return result
    }
}
