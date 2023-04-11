var AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: process.env.AWS_REGION });

const TABLE_NAME = "tablename";

exports.handler = async event => {
    return { statusCode: 200, body: `Done` };
}

async function queryDatabase() {
    let result = [];
    var params = {
        TableName: TABLE_NAME,
        KeyConditionExpression: "#attrbutename = :attrvalue",
        ExpressionAttributeNames: {
            "#attrbutename": "attrbutename"
        },
        ExpressionAttributeValues: {
            ":attrvalue": "attrvalue"
        }
    };

    await ddb.query(params, function (err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            result = data.Items[0];
        }
    }).promise();
    return result;
}

async function InsertData() {
    let success = false;
    const putParams = {
        TableName: TABLE_NAME,
        Item: {
            attribute: "value",
        }
    };

    try {
        await ddb.put(putParams).promise();
        success = true;
    } catch (err) {
        console.log(err);
    }
    return success;
}

async function getRecordCount() {
    var count = 0;
    let params = {
        TableName: TABLE_NAME,
        Select: "COUNT"
    };

    try {
        count = await ddb.scan(params).promise();
    } catch (err) {
        console.log(err);
    }
}

async function findConnectionsWithoutAttribute() {
    let params = {
        TableName: TABLE_NAME,
        FilterExpression: "attribute_not_exists (attribute1) and attribute_not_exists (#attr2)",
        ExpressionAttributeNames: {
            "#attr2": "attr2"
        },
    };

    let data = await ddb.scan(params).promise();

    console.log(`Total count ${data.Items.length}`);
    for (let i = 0; i < data.Items.length; i++) {
        console.log(`${data.Items[i]}`);
    }
}

async function deleteConnection(keyname, keyvalue) {
    tempkey = {}
    tempkey[keyname] = keyvalue;
    const deleteParams = {
        TableName: TABLE_NAME,
        Key: tempkey
    };

    try {
        await ddb.delete(deleteParams).promise();
    }
    catch (err) {
        return { statusCode: 500, body: 'Failed to disconnect: ' + JSON.stringify(err) };
    }
}