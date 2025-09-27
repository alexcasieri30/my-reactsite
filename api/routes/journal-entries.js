const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// GET /journal-entries/hawaii
router.get('/hawaii', async (req, res) => {
	try {
		const entriesDir = path.join(__dirname, '../hawaii-journal-entries');
		const files = fs.readdirSync(entriesDir);
		const result = {};
		files.forEach((filename) => {
			if (filename.endsWith('.txt')) {
				const dayMatch = filename.match(/day(\d+)\.txt/);
				if (dayMatch) {
					const dayNum = `day${dayMatch[1]}`;
					const filePath = path.join(entriesDir, filename);
					const text = fs.readFileSync(filePath, 'utf8');
					result[dayNum] = text;
				}
			}
		});
		res.json(result);
	} catch (err) {
		res.status(500).json({ error: 'Failed to read journal entries.' });
	}
});

module.exports = router;
