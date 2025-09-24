const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const fs = require('fs');
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'host.docker.internal',
  database: 'postgres',
  password: 'wolf0435',
  port: 5432,
})

const UPLOADS_DIR = path.join(__dirname, '../uploads');



// Configure multer for file uploads
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../uploads'));
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname);
	}
});
const upload = multer({ storage: storage });


// POST /photogallery/upload - upload a photo
router.post('/upload', upload.single('photo'), async (req, res) => {
	try {
		const { title, description } = req.body;
		const filePath = req.file.filename;
		// Save metadata to DB (PostgreSQL)
		await pool.query(
			'INSERT INTO photos(title, description, filepath) VALUES($1, $2, $3)',
			[title, description, filePath]
		);
		res.status(201).json({ message: 'Photo uploaded', file: filePath });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// GET /photogallery - list all photos
router.get('/', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM photos ORDER BY id DESC');
		res.json(result.rows);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

router.get('/get_images', (req, res) => {
  fs.readdir(UPLOADS_DIR, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to list images' });
    }

    // Build URLs for each file
    const images = files.map(file => ({
      filename: file,
      url: `${req.protocol}://${req.get('host')}/uploads/${file}`
    }));
    res.json(images);
  });
});

// GET /photogallery/:id - get photo metadata
router.get('/:id', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM photos WHERE id = $1', [req.params.id]);
		if (result.rows.length === 0) return res.status(404).json({ error: 'Not found' });
		res.json(result.rows[0]);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
