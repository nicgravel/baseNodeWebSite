
module.exports = {
    addTransaction: addTransaction,
    getTransactions: getTransactions,
    getTransactionsByUserId: getTransactionsByUserId,
    getTransactionsByItemId: getTransactionsByItemId,
    getItems: getItems,
    getItemById: getItemById,
    addItem: addItem,
    updateItem: updateItem,
    getUsers: getUsers,
    getUserById: getUserById,
    getUserByUsername: getUserByUsername,
    getUserByScan: getUserByScan,
    updateUserDebpt: updateUserDebpt,
    updateLastLogin: updateLastLogin,
    addUser: addUser
}

////////////////////////////////////////////////////////////////////
/////
/////   TRANSACTION
/////
////////////////////////////////////////////////////////////////////
async function addTransaction(db, t, callback) {
    let query = "INSERT INTO transactions (userId, itemId, price, date, info) VALUES (?,?,?,datetime('now','localtime'),?)"
    let vals = [t.userId, i.itemId, t.price, t.info]
    db.exec(query, vals, callback)
}

function getTransactions(db, callback) {
    let query = "SELECT * FROM transactions"
    db.all(query, [], callback)
}

function getTransactionsByUserId(db, userId, callback) {
    let query = "SELECT * FROM transactions WHERE userId = ?"
    db.all(query, [userId], callback)
}

function getTransactionsByItemId(db, itemId, callback) {
    let query = "SELECT * FROM transactions WHERE itemId = ?"
    db.all(query, [itemId], callback)
}

////////////////////////////////////////////////////////////////////
/////
/////   ITEMS
/////
////////////////////////////////////////////////////////////////////
function getItems(db, callback) {
    let query = "SELECT * FROM items";
    db.all(query, [], callback)
}

function getItemById(db, itemId, callback) {
    let query = "SELECT * FROM items WHERE itemId = ?"
    db.all(query, [itemId], callback)
}

function addItem(db, item, callback) {
    let query = "INSERT INTO items (name, upc, price) VALUES (?,?,?)"
    db.exec(query, [item.name, item.upc, item.price], callback)
}

function updateItem(db, item, callback) {
    let query = "UPDATE items SET name=?, price=?, upc=? WHERE itemId=?"
    db.exec(query, [item.name, item.price, item.upc], callback)
}


////////////////////////////////////////////////////////////////////
/////
/////   USERS
/////
////////////////////////////////////////////////////////////////////

function getUsers(db, callback) {
    let query = "SELECT * FROM users"
    db.all(db, [], callback)
}

function getUserById(db, userId, callback) {
    let query = "SELECT * FROM users WHERE userId = ?"
    db.get(query, [userId], callback)
}

function getUserByUsername(db, username, callback) {
    let query = "SELECT * FROM users WHERE username = ?"
    db.get(query, [username], callback)
}

function getUserByScan(db, scan, callback) {
    let query = "SELECT * FROM users WHERE scan = ?"
    db.get(query, [scan], callback)
}

function updateUserDebpt(db, userId, amount, callback) {
    let query = "UPDATE users SET debt=? WHERE userId=?"
    db.exec(query, [amount, userId], callback)
}

function updateLastLogin(db, userId, callback) {
    let query = "UPDATE users SET lastLogin = datetime('now', 'localtime') WHERE userId = ?"
    db.exec(query, [userId], callback)
}

function addUser(db, user, callback) {
    let query = "INSERT INTO users (username, name, isActive, isAdmin) VALUES (?,?,1,0)"
    db.exe(query, [user.username, user.name], callback)
}
