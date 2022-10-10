"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res) {
    const { pool, query } = req;
    pool.query(`SELECT * FROM form_transaction LEFT JOIN leads ON form_transaction.lead_id = leads.id LEFT JOIN prosucts ON form_transaction.product_id = prosucts.id  LIMIT ${query.limit}`, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}
exports.default = default_1;
//# sourceMappingURL=handler.js.map